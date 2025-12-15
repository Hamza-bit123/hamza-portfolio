import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-secondary max-w-xl mx-auto">
            A diverse skillset focusing on modern frontend technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <div 
              key={category.title}
              className="bg-surface p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-slate-700">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-background rounded-md text-sm text-slate-300 border border-slate-700 hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;