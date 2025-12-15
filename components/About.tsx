import React from 'react';
import { User, Code, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative aspect-square rounded-lg bg-surface overflow-hidden border border-slate-700 shadow-2xl flex items-center justify-center">
                    {/* Placeholder for a real image, using an icon as fallback if no image provided in prompt */}
                    <div className="text-slate-500 flex flex-col items-center">
                        <User size={64} className="mb-4 text-primary opacity-80" />
                        <span className="text-sm">Hamza Hassen</span>
                    </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-12 h-1 bg-primary block rounded-full"></span>
                About Me
              </h2>
              
              <div className="text-slate-300 space-y-4 leading-relaxed">
                <p>
                  I am a <strong className="text-white">5th year Computer Science student</strong> at Addis Ababa University with a relentless passion for technology.
                </p>
                <p>
                  My journey is defined by a love for <strong className="text-primary">frontend development</strong>. I enjoy crafting modern, responsive, and user-friendly web interfaces that solve real-world problems.
                </p>
                <p>
                  Beyond my academic studies, I am a self-taught developer who has completed numerous courses on Udemy, Coursera, and earned a certification from Udacity in Web Development Fundamentals.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-surface p-4 rounded-lg border border-slate-700/50 hover:border-primary/50 transition-colors">
                  <Code className="text-primary mb-2" size={24} />
                  <h4 className="font-semibold text-white">Developer</h4>
                  <p className="text-xs text-slate-400">Passionate about clean UI</p>
                </div>
                <div className="bg-surface p-4 rounded-lg border border-slate-700/50 hover:border-primary/50 transition-colors">
                  <BookOpen className="text-primary mb-2" size={24} />
                  <h4 className="font-semibold text-white">Learner</h4>
                  <p className="text-xs text-slate-400">Continuous growth</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;