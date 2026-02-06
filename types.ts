import React from 'react';

export type Language = 'en' | 'zh';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<any>;
  username: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design' | 'AI' | 'programming' | 'Data' | 'Product';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface PortfolioData {
  profile: {
    name: string;
    role: string;
    bio: string;
    avatar: string;
    location: string;
    email: string;
  };
  socials: SocialLink[];
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  systemInstruction: string;
  ui: {
    workExperience: string;
    techStack: string;
    featuredProjects: string;
    total: string;
    connect: string;
    quote: string;
    quoteAuthor: string;
    aiWelcome: string;
    aiPlaceholder: string;
  }
}