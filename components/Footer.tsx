
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t-8 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <span className="text-3xl font-bold text-white tracking-tight">
            TechConnect <span className="text-orange-500">OT</span>
          </span>
          <p className="mt-2 text-lg">Mastering Technology, Enhancing Life.</p>
        </div>
        
        <div className="flex space-x-8 text-2xl">
          <a href="#" className="hover:text-blue-400" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-blue-400" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-blue-400" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Accessibility First</p>
          <p className="text-sm">Licensed Occupational Therapy Services</p>
          <p className="text-sm mt-4">&copy; {new Date().getFullYear()} TechConnect OT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
