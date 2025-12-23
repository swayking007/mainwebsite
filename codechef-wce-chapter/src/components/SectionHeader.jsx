import React from 'react';

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{title}</h2>
    <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-fuchsia-500 mx-auto rounded-full mb-6"></div>
    <p className="text-slate-400 max-w-2xl mx-auto text-lg">{subtitle}</p>
  </div>
);

export default SectionHeader;
