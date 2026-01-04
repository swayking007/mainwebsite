import React, { useState, useEffect } from 'react';
import { Menu, X, UserPlus } from 'lucide-react'; 
import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/logo.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToSection = (id) => {
    if (!isHome) return; 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); 
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-slate-950/90 backdrop-blur-md shadow-lg py-3 border-b border-white/5' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO AREA */}
        <Link to="/" className="flex items-center space-x-2 font-bold text-2xl text-white group cursor-pointer z-50">
            <img src={Logo} alt="CodeChef WCE Logo" className="w-10 h-10 rounded-full object-cover" />
            
            {/* MOBILE TEXT: Shows "CWC" only */}
            <span className="sm:hidden">CWC</span>
            
            {/* DESKTOP TEXT: Shows "CodeChef WCE Chapter" only on larger screens */}
            <span className="hidden sm:inline">
              CodeChef <span className="text-teal-400">WCE Chapter</span>
            </span>
        </Link>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300 items-center">
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
          
          <a 
            href="https://chat.whatsapp.com/DGAc2WiYg6l73plsa1cPNL" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2.5 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transform hover:-translate-y-0.5">
              Join Community
            </button>
          </a>
        </div>

        {/* MOBILE ACTIONS (Visible on Mobile) */}
        <div className="flex md:hidden items-center space-x-4">
          
          {/* Mobile Join Button (Icon Only) */}
          <a 
            href="https://chat.whatsapp.com/DGAc2WiYg6l73plsa1cPNL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-all shadow-lg shadow-teal-500/25"
            aria-label="Join Community"
          >
            <UserPlus size={20} />
          </a>

          {/* Hamburger Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white hover:text-teal-400 transition-colors focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/5 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col px-6 py-4 space-y-4 text-center">
          {isHome ? (
            <>
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-teal-400 py-2 transition-all">About</button>
              <button onClick={() => scrollToSection('events')} className="text-slate-300 hover:text-teal-400 py-2 transition-all">Events</button>
              <button onClick={() => scrollToSection('gallery')} className="text-slate-300 hover:text-teal-400 py-2 transition-all">Gallery</button>
            </>
          ) : (
            <Link to="/" className="text-slate-300 hover:text-teal-400 py-2 transition-all">Home</Link>
          )}
          <Link to="/team" className="text-slate-300 hover:text-teal-400 py-2 transition-all">Team</Link>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;