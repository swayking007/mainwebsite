import React from 'react';
import SectionHeader from './SectionHeader';
import lazyImage from '../assets/lazy.png';

const HallOfFame = () => {
  return (
    <div className="mb-20">
      <SectionHeader 
        title="Hall of Fame" 
        subtitle="Proud inspiration of CWC as well as WCE" 
      />
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm hover:border-teal-500/30 transition-all duration-300">
        <div className="w-full md:w-1/2 max-w-lg">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-fuchsia-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src={lazyImage} 
              alt="Lazy Coders Team" 
              className="relative rounded-xl w-full shadow-2xl transform transition duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-fuchsia-400">
            Lazy Coders
          </h3>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 font-semibold text-sm mb-4">
            Asia West Finalists
          </div>
          <p className="text-slate-300 text-lg leading-relaxed">
            Celebrating the exceptional achievement of our very own team "Lazy Coders" for reaching the Asia West Finals. Their dedication, problem-solving skills, and perseverance serve as a beacon of inspiration for the entire CodeChef WCE Chapter community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;
