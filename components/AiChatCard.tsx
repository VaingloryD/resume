import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Sparkles, Bot, User as UserIcon, X, MessageSquareText } from 'lucide-react';
import { streamGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const AiChatCard: React.FC = () => {
  const { data } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize welcome message when data (language) changes, only if empty
  useEffect(() => {
    if (messages.length === 0) {
        setMessages([{ role: 'model', text: data.ui.aiWelcome, timestamp: Date.now() }]);
    }
  }, [data, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
        // Focus input slightly after open animation
        setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, messages]);

  const handleSend = useCallback(async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const modelMsgId = Date.now() + 1;
    setMessages(prev => [...prev, { role: 'model', text: '', timestamp: modelMsgId }]);

    let fullText = '';
    
    // Pass the system instruction from the current language data
    await streamGeminiResponse(userMsg.text, data.systemInstruction, (chunk) => {
      fullText += chunk;
      setMessages(prev => prev.map(msg => 
        msg.timestamp === modelMsgId ? { ...msg, text: fullText } : msg
      ));
    });

    setIsTyping(false);
  }, [input, isTyping, data.systemInstruction]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${
            isOpen ? 'dark:bg-slate-700 bg-slate-200 dark:text-slate-300 text-slate-700 rotate-90' : 'bg-indigo-600 text-white hover:bg-indigo-500'
        }`}
        title="Chat with AI"
      >
        {isOpen ? <X size={24} /> : <MessageSquareText size={24} />}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-6 w-[90vw] md:w-[380px] h-[500px] max-h-[70vh] dark:bg-slate-900/95 bg-white/95 backdrop-blur-xl border dark:border-slate-800 border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right z-40 ${
            isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b dark:border-slate-800 border-slate-200 dark:bg-slate-900/80 bg-white/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
            <div className="p-1.5 dark:bg-indigo-500/10 bg-indigo-100 rounded-lg">
                <Bot size={18} className="dark:text-indigo-400 text-indigo-600" />
            </div>
            <div>
                <span className="text-sm font-semibold dark:text-slate-200 text-slate-800 block">AI Assistant</span>
                <span className="text-[10px] text-slate-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    Online
                </span>
            </div>
            </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar dark:bg-slate-950/30 bg-slate-50/50">
            {messages.map((msg, idx) => (
            <div 
                key={idx} 
                className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === 'user' ? 'bg-slate-700 text-slate-300' : 'dark:bg-indigo-500/20 bg-indigo-100 dark:text-indigo-400 text-indigo-600'
                }`}>
                {msg.role === 'user' ? <UserIcon size={12} /> : <Sparkles size={12} />}
                </div>
                
                <div className={`rounded-2xl px-3 py-2 max-w-[85%] text-sm leading-relaxed ${
                msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'dark:bg-slate-800 bg-white dark:text-slate-300 text-slate-700 rounded-tl-none border dark:border-slate-700/50 border-slate-200 shadow-sm'
                }`}>
                {msg.text || (
                    <div className="flex gap-1 items-center h-4">
                        <span className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                )}
                </div>
            </div>
            ))}
            <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 dark:bg-slate-900 bg-white border-t dark:border-slate-800 border-slate-200">
            <div className="relative flex items-center">
            <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={data.ui.aiPlaceholder}
                disabled={isTyping}
                className="w-full dark:bg-slate-950 bg-slate-100 border dark:border-slate-700 border-slate-200 dark:text-slate-200 text-slate-800 text-sm rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500 disabled:opacity-50"
            />
            <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute right-2 p-1.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-400 text-white rounded-lg transition-colors"
            >
                <Send size={14} />
            </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default AiChatCard;