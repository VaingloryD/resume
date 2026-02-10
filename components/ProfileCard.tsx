import React from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProfileCard: React.FC = () => {
  const { data, language } = useLanguage();
  const { profile, socials } = data;

  return (
    <div className="w-full h-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24 relative z-10">
      
      {/* Left Column: Text & Socials */}
      <div className="flex-[1.4] flex flex-col items-center lg:items-start text-center lg:text-left space-y-10">
        
        <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold dark:text-slate-100 text-slate-800 tracking-tight leading-[1.1]">
              {language === 'en' ? "Hi I'm " : "你好，我是 "}{profile.name}, <br />
              <span className={
                language === 'zh' 
                  ? "text-[#0066FF] inline-block mt-2" 
                  : "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 inline-block mt-2"
              }>
                {profile.role}.
              </span>
            </h1>
        </div>

        {/* Paragraph */}
        <p className="dark:text-slate-400 text-slate-600 text-lg md:text-xl leading-relaxed max-w-[50ch]">
          {profile.bio}
        </p>

        <div className="flex flex-col gap-8 w-full lg:w-auto">
            <div className="flex items-center justify-center lg:justify-start gap-2 dark:text-slate-500 text-slate-500 text-sm font-medium uppercase tracking-[0.2em]">
                <MapPin size={16} className="dark:text-indigo-500/60 text-indigo-600/70" />
                <span>{profile.location}</span>
            </div>

            {/* Social Tabs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {socials.map((social) => (
                <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-full dark:bg-slate-800/40 bg-white/60 hover:bg-white dark:hover:bg-slate-800 border dark:border-slate-700/40 border-slate-200 hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                <social.icon size={18} className="dark:text-slate-400 text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors" />
                <span className="text-sm font-semibold dark:text-slate-300 text-slate-700 dark:group-hover:text-slate-100 group-hover:text-slate-900">
                    {social.platform}
                </span>
                </a>
            ))}
            </div>
        </div>
      </div>

      {/* Right Column: Photo */}
      <div className="w-64 h-64 md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] flex-shrink-0 relative">
        <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_-12px_rgba(99,102,241,0.3)] dark:border-slate-800/50 border-slate-200 border">
          <img 
            src={profile.avatar} 
            alt={profile.name} 
            className={`w-full h-full object-cover ${
    language === 'en' ? 'object-top' : 'object-center'
  } dark:grayscale-[0.2] hover:grayscale-0 transition-all duration-700`}
          />
        </div>
        {/* Subtle glow behind photo */}
        <div className="absolute -inset-4 bg-indigo-500/5 blur-3xl rounded-full -z-10 animate-pulse-slow"></div>
      </div>
    </div>
  );
};

export default ProfileCard;
