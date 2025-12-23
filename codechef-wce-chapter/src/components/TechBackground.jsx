import React from 'react';

const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-slate-950 -z-10">
      <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-teal-500/20 blur-[120px] animate-pulse" />
      <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-fuchsia-500/20 blur-[100px] animate-pulse delay-1000" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#14b8a610_1px,transparent_1px),linear-gradient(to_bottom,#14b8a610_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-ping" />
        <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-ping delay-700" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping delay-300" />
      </div>
    </div>
  );
};

export default TechBackground;
