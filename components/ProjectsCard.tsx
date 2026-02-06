import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectsCard: React.FC = () => {
  const { data } = useLanguage();

  return (
    <div className="h-full w-full dark:bg-slate-900/50 bg-white/70 backdrop-blur-md border dark:border-slate-800 border-slate-200 rounded-3xl p-6 flex flex-col hover:dark:border-slate-700 hover:border-slate-300 transition-colors duration-300 shadow-sm">
       <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
            <div className="p-2 dark:bg-indigo-500/10 bg-indigo-100 rounded-xl dark:text-indigo-400 text-indigo-600">
                <FolderGit2 size={20} />
            </div>
            <h2 className="text-xl font-semibold dark:text-slate-100 text-slate-800">{data.ui.featuredProjects}</h2>
        </div>
        <span className="text-xs font-medium dark:text-slate-500 text-slate-500 px-2 py-1 dark:bg-slate-800 bg-slate-100 rounded-md">
            {data.projects.length} {data.ui.total}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto custom-scrollbar pr-2">
        {data.projects.map((project) => (
          <div 
            key={project.id}
            className="group relative dark:bg-slate-950/50 bg-slate-50 border dark:border-slate-800 border-slate-200 rounded-2xl overflow-hidden hover:dark:border-slate-600 hover:border-slate-300 transition-all duration-300 shadow-sm"
          >
            <div className="aspect-video w-full overflow-hidden">
                <div className="w-full h-full dark:bg-slate-800 bg-slate-200 relative">
                     {/* Overlay gradient */}
                     <div className="absolute inset-0 bg-gradient-to-t dark:from-slate-950 from-slate-100 via-transparent to-transparent opacity-90 z-10" />
                     <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                     />
                </div>
            </div>
            
            <div className="p-4 relative z-20 -mt-10">
                <div className="flex justify-between items-end mb-2">
                     <h3 className="text-lg font-bold dark:text-white text-[#1E293B] group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                        {project.title}
                    </h3>
                    {project.link && (
                      <a href={project.link} className="p-1.5 dark:bg-slate-800 bg-white shadow-sm rounded-full dark:text-slate-400 text-slate-500 hover:text-white dark:hover:text-white hover:bg-indigo-500 dark:hover:bg-indigo-500 transition-all">
                          <ExternalLink size={14} />
                      </a>
                    )}
                </div>
              <p className="text-sm dark:text-slate-400 text-slate-600 mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full dark:bg-slate-800 bg-white dark:text-slate-400 text-slate-600 border dark:border-slate-700 border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;