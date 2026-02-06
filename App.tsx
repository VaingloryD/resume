import React from 'react';
import ProfileCard from './components/ProfileCard';
import SkillsCard from './components/SkillsCard';
import ProjectsCard from './components/ProjectsCard';
import TimelineCard from './components/TimelineCard';
import AiChatCard from './components/AiChatCard';
import { useLanguage } from './contexts/LanguageContext';
import { Languages } from 'lucide-react';

const App: React.FC = () => {
  const { language, toggleLanguage, data } = useLanguage();

  return (
    <div className={`w-full transition-colors duration-500 ${language === 'en' ? 'bg-[#020617] text-slate-200' : 'bg-[#fcfbf9] text-slate-800'}`}>
      
      {/* Language Switcher */}
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 rounded-full dark:bg-slate-800/80 bg-white/80 backdrop-blur-md border dark:border-slate-700 border-slate-200 hover:scale-105 transition-all shadow-lg"
        >
          <Languages size={16} className="dark:text-indigo-400 text-indigo-600" />
          <span className="text-xs font-bold uppercase tracking-wider dark:text-slate-200 text-slate-700">
            {language === 'en' ? 'EN / 中文' : '中文 / EN'}
          </span>
        </button>
      </div>

      {/* Screen 1: Hero Section */}
      <section className="min-h-screen w-full flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
         <div className="max-w-7xl w-full">
            <ProfileCard />
         </div>
         
         {/* Background Decor */}
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-sky-500/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '1.5s' }}></div>
      </section>

      {/* Screen 2: Skills & Timeline */}
      <section className="min-h-screen w-full flex items-center justify-center p-6 md:p-12 dark:bg-slate-950/30 bg-slate-50/50 relative">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">
            {/* Left: Skills */}
            <div className="lg:col-span-1 h-full">
                <SkillsCard />
            </div>

            {/* Right: Timeline */}
            <div className="lg:col-span-2 h-full">
                <TimelineCard />
            </div>
        </div>
      </section>

      {/* Screen 3: Projects & Quote */}
      <section className="min-h-screen w-full flex flex-col justify-center p-6 md:p-12 space-y-12 pb-24 relative">
         <div className="max-w-7xl w-full mx-auto space-y-12">
            
            {/* Featured Projects */}
            <div className="w-full min-h-[500px]">
                <ProjectsCard />
            </div>

            {/* Quote Footer */}
            <div className="dark:bg-slate-900/50 bg-white/70 backdrop-blur-md border dark:border-slate-800 border-slate-200 rounded-3xl p-10 flex items-center justify-center text-center shadow-sm">
                <div>
                <p className="text-2xl md:text-3xl font-serif italic dark:text-slate-300 text-slate-700">
                    {data.ui.quote}
                </p>
                <p className="mt-3 text-sm dark:text-indigo-400 text-indigo-600 font-medium tracking-widest uppercase">
                    {data.ui.quoteAuthor}
                </p>
                </div>
            </div>
         </div>
         
         {/* Decorative gradient for 3rd screen */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[400px] bg-indigo-900/10 blur-[100px] pointer-events-none rounded-t-full"></div>
      </section>

      {/* Floating AI Chat Widget */}
      <AiChatCard />
      
    </div>
  );
};

export default App;