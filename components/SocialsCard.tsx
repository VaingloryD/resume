import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SocialsCard: React.FC = () => {
  const { data } = useLanguage();

  return (
    <div className="h-full w-full bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-6 flex flex-col hover:border-slate-700 transition-colors duration-300">
      <h2 className="text-lg font-semibold text-slate-200 mb-4">{data.ui.connect}</h2>
      <div className="flex flex-col gap-3">
        {data.socials.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-200 border border-transparent hover:border-slate-700"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-950 rounded-lg text-slate-400 group-hover:text-indigo-400 transition-colors">
                <social.icon size={18} />
              </div>
              <span className="text-sm font-medium text-slate-300 group-hover:text-slate-100">
                {social.platform}
              </span>
            </div>
            <ArrowUpRight size={16} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialsCard;