import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (!isHome) return; 
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg py-3 border-b border-white/5' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 font-bold text-2xl text-white group cursor-pointer">
          <div className="p-1.5 rounded-lg bg-teal-500/10 group-hover:bg-teal-500/20 transition-colors">
            <Terminal className="text-teal-500" />
          </div>
          <span>CodeChef <span className="text-teal-400">WCE</span></span>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          {isHome ? (
            <>
              <button onClick={() => scrollToSection('about')} className="hover:text-teal-400 transition-all">About</button>
              <button onClick={() => scrollToSection('events')} className="hover:text-teal-400 transition-all">Events</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-teal-400 transition-all">Gallery</button>
            </>
          ) : (
            <Link to="/" className="hover:text-teal-400 transition-all">Home</Link>
          )}
          <Link to="/team" className="hover:text-teal-400 transition-all">Team</Link>
        </div>
        <button className="px-6 py-2.5 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transform hover:-translate-y-0.5">
          Join Community
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
