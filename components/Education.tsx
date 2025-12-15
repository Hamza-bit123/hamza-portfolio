import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION, TESTIMONIAL } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" /> Education
            </h2>
            <div className="space-y-8">
              {EDUCATION.map((item, index) => (
                <div key={index} className="pl-8 relative border-l-2 border-slate-700">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary"></div>
                  <h3 className="text-xl font-bold text-slate-100">{item.institution}</h3>
                  <p className="text-primary font-medium mb-1">{item.degree}</p>
                  <p className="text-slate-400 text-sm">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Column */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-primary" /> Endorsement
            </h2>
            
            <div className="relative bg-gradient-to-br from-surface to-background p-8 rounded-2xl border border-slate-700 shadow-xl">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-background rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                "
              </div>
              
              <p className="text-lg text-slate-300 italic leading-relaxed mb-6">
                {TESTIMONIAL.text}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-primary font-bold">
                  {TESTIMONIAL.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{TESTIMONIAL.author}</h4>
                  <p className="text-sm text-primary">{TESTIMONIAL.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;