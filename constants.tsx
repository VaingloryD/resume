import { Github, Twitter, Linkedin, Mail, Globe } from 'lucide-react';
import { PortfolioData, SocialLink, Skill, Experience, Project } from './types';

// Shared Data
const AVATAR_EN = "https://pic1.imgdb.cn/item/698b0c6b8b2d4ec3cdd84b87.png";
const AVATAR_CN = "https://pic1.imgdb.cn/item/69846e4e013471eb7b528b37.jpg";
const EMAIL = "diaoyichao1995@gmail.com";
const SOCIALS_DATA: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/VaingloryD", icon: Github, username: "@ethandior" },
  // { platform: "Twitter", url: "https://twitter.com", icon: Twitter, username: "@ethan_dior" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/逸超-刁-75858a195", icon: Linkedin, username: "Ethan Dior" },
  { platform: "Email", url: `mailto:${EMAIL}`, icon: Mail, username: EMAIL },
];

// --- ENGLISH SKILLS ---
const SKILLS_EN: Skill[] = [
  { name: "LLMs", category: "AI" },
  { name: "RAG", category: "AI" },
  { name: "Prompt Engineering", category: "AI" },
  { name: "Agent Frameworks", category: "AI" },
  { name: "Deep Learning", category: "AI" },
  { name: "Python", category: "programming" },
  { name: "React", category: "programming" },
  { name: "MySQL", category: "programming" },
  { name: "Data Analysis", category: "Data" },
  { name: "A/B Testing", category: "Data" },
  { name: "Business Intelligence", category: "Data" },
  { name: "Product Strategy", category: "Product" },
  { name: "User Research", category: "Product" },
  { name: "Prioritization", category: "Product" },
  { name: "Figma", category: "design" },
  { name: "Axure", category: "design" },
];

// --- CHINESE SKILLS (Translated) ---
const SKILLS_ZH: Skill[] = [
  { name: "大语言模型 (LLMs)", category: "AI" },
  { name: "RAG", category: "AI" },
  { name: "提示词工程", category: "AI" },
  { name: "Agent", category: "AI" },
  { name: "深度学习", category: "AI" },
  { name: "Python", category: "programming" },
  { name: "React", category: "programming" },
  { name: "MySQL", category: "programming" },
  { name: "数据分析", category: "Data" },
  { name: "A/B 测试", category: "Data" },
  { name: "商业智能 (BI)", category: "Data" },
  { name: "产品设计", category: "Product" },
  { name: "需求调研", category: "Product" },
  { name: "项目管理", category: "Product" },
  { name: "Figma", category: "design" },
  { name: "Axure", category: "design" },
];

// --- ENGLISH DATA ---
const EXPERIENCE_EN: Experience[] = [
  {
    id: "1",
    role: "Senior AI Product Manager",
    company: "Der Future Technology Holding Group Co.,Ltd",
    period: "2022.05 - 2025.09",
    description: "Planning and delivering AI-driven products across the organization, with a focus on LLM-based agent assistants that translate advanced models into practical business tools."
  },
  {
    id: "2",
    role: "Search Ranking Product Manager",
    company: "Suiyi Information Technology",
    period: "2021.06 - 2022.04",
    description: "Leading the strategy and optimization of SEO and search ranking products, driving organic growth through data-driven prioritization, algorithm improvements, and user experience enhancements."
  },
  {
    id: "3",
    role: "AI Engineer Intern",
    company: "Big Vision Medical Technology",
    period: "2020.06 - 2020.12",
    description: "Developing and training ophthalmology segmentation models using PyTorch, improving accuracy and performance for medical image analysis."
  }
];

const PROJECTS_EN: Project[] = [
  {
    id: "1",
    title: "Amber Glade Village",
    description: "An AI-driven pixel RPG featuring story, combat, and commerce, fostering financial literacy and mathematical skills for teenagers.",
    tags: ["Mobile App", "Steam game"，"Neural Narratives (AI-Powered NPCs)"],
    image: "https://pic1.imgdb.cn/item/6985abd4f8ef6591278d49a7.png"

  },
  {
    id: "2",
    title: "Lingxin Copilot",
    description: "An enterprise AI assistant platform built with RAG pipelines and LLM-based agents, enabling accurate knowledge retrieval, transparent reasoning workflows, and intelligent task execution across internal business systems.",
    tags: ["RAG", "LLM Agents", "Enterprise"],
    image: "https://pic1.imgdb.cn/item/69859497f8ef6591278ce90e.png",
    link: "https://lxai.der-king.com/lxapp"
  },
  {
    id: "3",
    title: "VisionEye – Ophthalmology Detection System",
    description: "An AI-powered ophthalmology detection system built with PyTorch to analyze medical images and identify retinal abnormalities, improving diagnostic accuracy and efficiency.",
    tags: ["AI", "Medical Imaging", "PyTorch"],
    image: "https://pic1.imgdb.cn/item/69859e34f8ef6591278cfe08.png"
  }
];

const SYSTEM_INSTRUCTION_EN = `
You are an AI assistant for Ethan Dior's personal portfolio website. 
Your goal is to answer questions about Ethan's professional background, skills, and projects in a friendly, professional, and concise manner.
Keep answers short (under 100 words).
`;

// --- CHINESE DATA ---
const EXPERIENCE_ZH: Experience[] = [
  {
    id: "1",
    role: "AI产品经理",
    company: "德尔未来科技控股有限公司",
    period: "2022.05 - 2025.09",
    description: "规划，推动AI技术在公司业务中的应用落地，包括基于深度学习检测产品瑕疵，结合LLM，RAG技术的智能对话Agent等项目。"
  },
  {
    id: "2",
    role: "策略产品经理",
    company: "苏州食行生鲜电子商务有限公司",
    period: "2021.06 - 2022.04",
    description: "主导产品内搜索排序，推荐商品的策略优化，通过数据驱动追踪、算法改进提升用户体验。"
  },
  {
    id: "3",
    role: "AI 算法实习生",
    company: "比格威医疗科技",
    period: "2020.06 - 2020.12",
    description: "基于深度学习训练眼底疾病的图像分割模型，辅助提升医生判断眼底疾病的准确性与处理性能。"
  }
];

const PROJECTS_ZH: Project[] = [
  {
    id: "1",
    title: "眼底智能检测系统",
    description: "基于PyTorch构建眼底线性损伤检测模型，用于分析OCT医学影像眼底病变异常，有效提升诊断准确率与效率。",
    tags: ["AI", "医学影像", "PyTorch"],
    image: "https://pic1.imgdb.cn/item/69859e34f8ef6591278cfe08.png"
  },
  {
    id: "2",
    title: "灵芯智能助手",
    description: "基于RAG与LLM智能体构建的企业级AI问答助手，实现精准的知识检索、透明的推理工作流，赋能公司从销售到客服。",
    tags: ["RAG", "LLM Agents", "企业服务"],
    image: "https://pic1.imgdb.cn/item/69859497f8ef6591278ce90e.png",
    link: "https://lxai.der-king.com/lxapp"
  },
  
];

const SYSTEM_INSTRUCTION_ZH = `
你是 Ethan Tiao 个人作品集网站的 AI 助手。
你的目标是以友好、专业且简洁的方式回答有关 Ethan 职业背景、技能和项目的问题。
请用中文回答，保持简短（100字以内）。
`;

// --- EXPORTED DATA OBJECT ---

export const DATA: Record<'en' | 'zh', PortfolioData> = {
  en: {
    profile: {
      name: "Ethan Tiao",
      role: "Builder and AI Product Manager",
      bio: "Exploring the intersection of artificial intelligence and decentralized finance. Building products that bridge the gap between complex algorithms and human needs.",
      avatar: AVATAR_EN,
      location: "Suzhou, CN",
      email: EMAIL
    },
    socials: SOCIALS_DATA,
    skills: SKILLS_EN,
    experience: EXPERIENCE_EN,
    projects: PROJECTS_EN,
    systemInstruction: SYSTEM_INSTRUCTION_EN,
    ui: {
      workExperience: "Work Experience",
      techStack: "Skill",
      featuredProjects: "Featured Projects",
      total: "Total",
      connect: "Connect",
      quote: "\"Simplicity is the ultimate sophistication.\"",
      quoteAuthor: "- Leonardo da Vinci",
      aiWelcome: "Hi! I'm Ethan's AI assistant. Ask me anything about his work in AI!",
      aiPlaceholder: "Ask about Ethan..."
    }
  },
  zh: {
    profile: {
      name: "逸超",
      role: "AI产品经理，知识分享者",
      bio: "探索人工智能应用前沿领域。专注AI智能系统落地，致力于连接 AI 与人类需求，让技术创造更大价值。",
      avatar: AVATAR_CN,
      location: "中国 苏州",
      email: EMAIL
    },
    socials: SOCIALS_DATA,
    skills: SKILLS_ZH,
    experience: EXPERIENCE_ZH,
    projects: PROJECTS_ZH,
    systemInstruction: SYSTEM_INSTRUCTION_ZH,
    ui: {
      workExperience: "工作经历",
      techStack: "技能",
      featuredProjects: "精选项目",
      total: "共计",
      connect: "联系方式",
      quote: "“至繁归于至简。”",
      quoteAuthor: "- 达·芬奇",
      aiWelcome: "你好！我是刁逸超的 AI 助手。欢迎询问关于他的 AI 工作经历！",
      aiPlaceholder: "询问关于 Ethan 的信息..."
    }
  }
};
