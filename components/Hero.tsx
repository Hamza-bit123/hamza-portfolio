import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wide animate-fade-in">
          {PERSONAL_INFO.title}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight animate-slide-up">
          {PERSONAL_INFO.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up delay-100">
          {PERSONAL_INFO.tagline}
        </p>

        <div className="flex justify-center gap-6 mb-12 animate-slide-up delay-200">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surface rounded-lg text-slate-300 hover:text-white hover:bg-primary hover:scale-110 transition-all duration-300 shadow-md group"
              aria-label={link.platform}
            >
              <link.icon size={24} className="group-hover:stroke-white" />
            </a>
          ))}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-3 bg-surface rounded-lg text-slate-300 hover:text-white hover:bg-primary hover:scale-110 transition-all duration-300 shadow-md group"
            aria-label="Email"
          >
            <Mail size={24} className="group-hover:stroke-white" />
          </a>
        </div>

        <button 
          onClick={scrollToAbout}
          className="animate-bounce p-2 text-slate-400 hover:text-primary transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;