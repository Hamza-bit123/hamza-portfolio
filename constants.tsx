import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Project, SkillCategory, SocialLink, EducationItem, TestimonialItem } from './types';

export const PERSONAL_INFO = {
  name: "Hamza Hassen",
  title: "Front-End Developer",
  tagline: "Modern & Creative Front-End Developer",
  email: "hamuzehassen@gmail.com",
  phone: "+251965417537",
  location: "Addis Ababa, Ethiopia",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Hamza-bit123",
    icon: Github,
    label: "Hamza-bit123"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/hamza-hassen-b64626365",
    icon: Linkedin,
    label: "hamza-hassen"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Technical Core",
    skills: ["HTML5", "CSS3", "JavaScript (ES6)", "React", "Tailwind CSS"]
  },
  {
    title: "Frontend Focus",
    skills: ["Responsive Design", "UI Implementation", "Clean Code Structure", "Mobile-First"]
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Continuous Learning", "Team Collaboration"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "House Rental System",
    description: "A comprehensive personal project for managing property rentals. Features include a dedicated admin dashboard, user management, and property listings tracking.",
    tags: ["Frontend", "Dashboard", "Management"]
  },
  {
    id: 2,
    title: "Election System",
    description: "A digital voting management system designed to handle voters, candidates, and real-time election results, complete with an administrative interface.",
    tags: ["Admin Panel", "Data Handling", "UI/UX"]
  },
  {
    id: 3,
    title: "Practice Projects",
    description: "A collection of various frontend clones and learning experiments demonstrating versatility and passion for continuous improvement in web technologies.",
    tags: ["Clones", "Learning", "Experiments"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "BSc in Computer Science",
    institution: "Addis Ababa University",
    details: "5th Year Student"
  },
  {
    degree: "Web Development Fundamentals",
    institution: "Udacity",
    details: "Certification"
  },
  {
    degree: "Various Online Courses",
    institution: "Udemy & Coursera",
    details: "Continuous Professional Development"
  }
];

export const TESTIMONIAL: TestimonialItem = {
  text: "Hamza has a good understanding of programming and frontend development. He is dedicated, learns fast, and shows strong problem-solving skills.",
  author: "Lealem Birhanu",
  role: "Fullstack Developer"
};