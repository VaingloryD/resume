import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TimelineCard: React.FC = () => {
  const { data } = useLanguage();

  return (
    <div className="h-full w-full dark:bg-slate-900/50 bg-white/70 backdrop-blur-md border dark:border-slate-800 border-slate-200 rounded-3xl p-6 hover:dark:border-slate-700 hover:border-slate-300 transition-colors duration-300 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 dark:bg-purple-500/10 bg-purple-100 rounded-xl dark:text-purple-400 text-purple-600">
            <Briefcase size={20} />
        </div>
        <h2 className="text-xl font-semibold dark:text-slate-100 text-slate-800">{data.ui.workExperience}</h2>
      </div>

      <div className="space-y-8 relative pl-2">
        {/* Vertical Line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-[2px] dark:bg-slate-800 bg-slate-200" />

        {data.experience.map((job) => (
          <div key={job.id} className="relative pl-8">
            {/* Dot */}
            <div className="absolute left-0 top-1.5 w-[24px] h-[24px] dark:bg-slate-950 bg-white rounded-full border dark:border-slate-700 border-slate-300 flex items-center justify-center z-10 group-hover:border-purple-500 transition-colors">
                <div className="w-2 h-2 dark:bg-slate-500 bg-slate-400 rounded-full group-hover:bg-purple-500 transition-colors" />
            </div>

            {/* Content */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-lg font-bold dark:text-slate-200 text-slate-800">{job.role}</h3>
                <div className="flex items-center gap-1.5 text-xs font-medium dark:text-slate-500 text-slate-500 dark:bg-slate-800/50 bg-slate-100 px-2 py-1 rounded-md w-fit mt-1 sm:mt-0">
                    <Calendar size={12} />
                    <span>{job.period}</span>
                </div>
            </div>
            
            <p className="dark:text-indigo-400 text-indigo-600 text-sm font-medium mb-2">{job.company}</p>
            <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed max-w-prose">
                {job.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineCard;