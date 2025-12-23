import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Team from './components/Team';

// New Global Background Component
const GlobalBackground = () => (
  <div className="fixed inset-0 -z-10 bg-slate-950 overflow-hidden">
    {/* Subtle Gradient Base */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
    
    {/* Tech Grid Pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#14b8a60a_1px,transparent_1px),linear-gradient(to_bottom,#14b8a60a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

    {/* Floating Glowing Orbs */}
    <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] animate-pulse" />
    <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
    <div className="absolute bottom-[-10%] left-[20%] w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] animate-pulse delay-700" />
  </div>
);

const Home = () => (
  <>
    <Hero />
    <About />
    <Events />
    <Gallery />
  </>
);

const App = () => {
  return (
    <Router>
      {/* Added relative positioning to ntain the fixed background */}
      <div className="relative min-h-screen text-slate-200 selection:bg-teal-500/30 font-sans">
        <GlobalBackground />
        
        {/* Content Wrapper */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;