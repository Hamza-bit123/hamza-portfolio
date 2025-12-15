import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  label: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  details: string;
}

export interface TestimonialItem {
  text: string;
  author: string;
  role: string;
}