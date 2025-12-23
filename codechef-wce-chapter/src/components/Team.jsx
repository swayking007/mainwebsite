import React from 'react';
import { Linkedin, Github, Hash } from 'lucide-react';
import SectionHeader from './SectionHeader';

const SocialIcon = ({ type, url }) => {
  const iconClass = "w-5 h-5 text-slate-400 hover:text-white transition-colors cursor-pointer";
  if (type === 'linkedin') return <a href={url} target="_blank" rel="noreferrer"><Linkedin className={iconClass} /></a>;
  if (type === 'github') return <a href={url} target="_blank" rel="noreferrer"><Github className={iconClass} /></a>;
  if (type === 'codechef') return <a href={url} target="_blank" rel="noreferrer" title="CodeChef Profile"><Hash className={iconClass} /></a>;
  return null;
};

const MemberCard = ({ name, role, color, image }) => (
  <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center hover:border-teal-500/40 transition-all group hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/5 flex flex-col items-center">
    <div className={`w-24 h-24 mb-6 rounded-full bg-gradient-to-br ${color} p-[2px]`}>
      <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden relative">
        <img 
          src={image || "/api/placeholder/100/100"} 
          alt={name}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E";
          }}
        />
      </div>
    </div>
    <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
    <p className="text-teal-400 text-xs font-bold uppercase tracking-wider mb-4">{role}</p>
    <div className="flex space-x-3 mt-auto">
      <SocialIcon type="linkedin" url="#" />
      <SocialIcon type="github" url="#" />
      <SocialIcon type="codechef" url="#" />
    </div>
  </div>
);

const Team = () => {
  const mainBoard = [
    { name: "Saurabh Doiphode", role: "President", color: "from-amber-400 to-orange-500", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Srushti Garad", role: "Vice President", color: "from-fuchsia-400 to-purple-500", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Swarangi Toraskar", role: "Secretary", color: "from-teal-400 to-emerald-500", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Vishant Sutar", role: "Secretary", color: "from-teal-400 to-emerald-500", image: "https://randomuser.me/api/portraits/men/86.jpg" }
  ];

  const assistantBoard = [
    { name: "Aarav Patel", role: "Tech Lead", color: "from-blue-400 to-indigo-500", image: "https://randomuser.me/api/portraits/men/22.jpg" },
    { name: "Isha Sharma", role: "Event Lead", color: "from-pink-400 to-rose-500", image: "https://randomuser.me/api/portraits/women/28.jpg" },
    { name: "Rohan Deshmukh", role: "Publicity Lead", color: "from-blue-400 to-indigo-500", image: "https://randomuser.me/api/portraits/men/54.jpg" },
    { name: "Ananya Singh", role: "Design Lead", color: "from-pink-400 to-rose-500", image: "https://randomuser.me/api/portraits/women/90.jpg" }
  ];

  const memberBoard = [
    { name: "Member 1", role: "Executive", color: "from-slate-500 to-slate-600", image: "https://randomuser.me/api/portraits/men/11.jpg" },
    { name: "Member 2", role: "Executive", color: "from-slate-500 to-slate-600", image: "https://randomuser.me/api/portraits/women/12.jpg" },
    { name: "Member 3", role: "Executive", color: "from-slate-500 to-slate-600", image: "https://randomuser.me/api/portraits/men/13.jpg" },
    { name: "Member 4", role: "Executive", color: "from-slate-500 to-slate-600", image: "https://randomuser.me/api/portraits/women/14.jpg" },
  ];

  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-950">
      <div className="container mx-auto px-6">
        <SectionHeader title="Meet The Team" subtitle="The dedicated minds behind CodeChef WCE Chapter." />

        {/* Main Board */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="h-px bg-slate-800 flex-1"></div>
            <span className="px-4 text-slate-400 text-sm font-bold uppercase tracking-widest">Main Board</span>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainBoard.map((member, idx) => <MemberCard key={idx} {...member} />)}
          </div>
        </div>

        {/* Assistant Board */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="h-px bg-slate-800 flex-1"></div>
            <span className="px-4 text-slate-400 text-sm font-bold uppercase tracking-widest">Assistant Board</span>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assistantBoard.map((member, idx) => <MemberCard key={idx} {...member} />)}
          </div>
        </div>

        {/* Member Board */}
        <div>
          <div className="flex items-center mb-8">
            <div className="h-px bg-slate-800 flex-1"></div>
            <span className="px-4 text-slate-400 text-sm font-bold uppercase tracking-widest">Member Board</span>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberBoard.map((member, idx) => <MemberCard key={idx} {...member} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
