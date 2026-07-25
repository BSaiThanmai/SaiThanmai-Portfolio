export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Machine Learning' | 'Voice & Web AI' | 'Data Analytics' | 'All';
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
  metrics?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Full-time' | 'Education';
  description: string[];
  skillsUsed: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  description: string;
  credentialUrl?: string;
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  highlights: string[];
}

export interface PersonalInfo {
  name: string;
  headline: string;
  bio: string;
  fullBio: string;
  email: string;
  phone: string;
  location: string;
  cgpa: string;
  github: string;
  linkedin: string;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}
