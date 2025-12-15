import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-surface/30 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-secondary mb-12 text-lg">
            I am currently open to new opportunities and collaborations. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex flex-col items-center p-6 bg-surface rounded-xl border border-slate-700 hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail size={20} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Email Me</h3>
              <p className="text-slate-400 text-sm break-all">{PERSONAL_INFO.email}</p>
            </a>

            <a href={`tel:${PERSONAL_INFO.phone}`} className="flex flex-col items-center p-6 bg-surface rounded-xl border border-slate-700 hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Phone size={20} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Call Me</h3>
              <p className="text-slate-400 text-sm">{PERSONAL_INFO.phone}</p>
            </a>

            <div className="flex flex-col items-center p-6 bg-surface rounded-xl border border-slate-700 group">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <MapPin size={20} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Location</h3>
              <p className="text-slate-400 text-sm">{PERSONAL_INFO.location}</p>
            </div>
          </div>

          <div className="text-slate-500 text-sm border-t border-slate-800 pt-8">
            <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
            <p className="mt-2">Built with React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;