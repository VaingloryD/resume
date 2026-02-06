import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Code2, Terminal, PenTool, Layers, Bot, Target } from 'lucide-react';
import { Language } from '../types';

const SkillsCard: React.FC = () => {
  const { data, language } = useLanguage();
  
  const categories = {
    AI: { icon: Bot, color: 'dark:text-sky-400 text-sky-600', bg: 'dark:bg-sky-400/10 bg-sky-50' },
    programming: { icon: Code2, color: 'dark:text-indigo-400 text-indigo-600', bg: 'dark:bg-indigo-400/10 bg-indigo-50' },
    Product: { icon: Target, color: 'dark:text-emerald-400 text-emerald-600', bg: 'dark:bg-emerald-400/10 bg-emerald-50' },
    Data: { icon: Layers, color: 'dark:text-amber-400 text-amber-600', bg: 'dark:bg-amber-400/10 bg-amber-50' },
    design: { icon: PenTool, color: 'dark:text-pink-400 text-pink-600', bg: 'dark:bg-pink-400/10 bg-pink-50' },
  };

  const categoryLabels: Record<string, Record<Language, string>> = {
    AI: { en: 'AI', zh: 'AI' },
    programming: { en: 'Programming', zh: '编程' },
    Product: { en: 'Product', zh: '产品能力' },
    Data: { en: 'Data', zh: '数据能力' },
    design: { en: 'Design', zh: '设计' },
  };

  return (
    <div className="h-full w-full dark:bg-slate-900/50 bg-white/70 backdrop-blur-md border dark:border-slate-800 border-slate-200 rounded-3xl p-6 hover:dark:border-slate-700 hover:border-slate-300 transition-colors duration-300 overflow-y-auto custom-scrollbar shadow-sm">
      <h2 className="text-lg font-semibold dark:text-slate-200 text-slate-800 mb-4">{data.ui.techStack}</h2>
      <div className="space-y-4">
        {Object.entries(categories).map(([key, config]) => {
          // @ts-ignore - dynamic key access
          const categorySkills = data.skills.filter(s => s.category === key);
          if (categorySkills.length === 0) return null;

          return (
            <div key={key} className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-slate-500">
                <config.icon size={14} />
                <span>{categoryLabels[key] ? categoryLabels[key][language] : key}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map(skill => (
                  <span 
                    key={skill.name}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium ${config.bg} ${config.color} border border-transparent hover:border-current transition-colors cursor-default`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsCard;