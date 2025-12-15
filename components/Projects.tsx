import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-secondary">Highlighting my journey in software development.</p>
          </div>
          <a href="https://github.com/Hamza-bit123" target="_blank" rel="noreferrer" className="hidden md:flex items-center text-primary hover:text-white transition-colors mt-4 md:mt-0">
            View all on GitHub <ExternalLink size={16} className="ml-2" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="bg-surface rounded-xl overflow-hidden border border-slate-700/50 hover:border-primary/50 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Decorative top bar for visual appeal instead of image */}
              <div className="h-2 w-full bg-gradient-to-r from-primary/50 to-purple-500/50 group-hover:from-primary group-hover:to-purple-500 transition-all duration-500"></div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-background text-secondary border border-slate-700/50">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-700/50">
                  <button className="flex-1 py-2 px-4 rounded-lg bg-background hover:bg-slate-700 text-slate-300 text-sm font-medium transition-colors flex items-center justify-center gap-2 border border-slate-700 cursor-not-allowed opacity-70" title="Demo link placeholder">
                    <ExternalLink size={16} />
                    View Project
                  </button>
                  <button className="flex-1 py-2 px-4 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors flex items-center justify-center gap-2 border border-primary/20 cursor-not-allowed opacity-70" title="Code link placeholder">
                    <Github size={16} />
                    Source
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <a href="https://github.com/Hamza-bit123" target="_blank" rel="noreferrer" className="inline-flex items-center text-primary hover:text-white transition-colors">
            View all on GitHub <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;