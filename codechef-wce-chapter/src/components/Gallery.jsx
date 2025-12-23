import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import SectionHeader from './SectionHeader';

const GallerySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, title: "WCPC Prize Distribution", color: "from-teal-500 to-cyan-600" },
    { id: 2, title: "Bootcamp Hands-on Session", color: "from-fuchsia-500 to-purple-600" },
    { id: 3, title: "GIM Inauguration", color: "from-amber-500 to-orange-600" },
    { id: 4, title: "Coffee With Chef Speaker", color: "from-emerald-500 to-teal-600" },
    { id: 5, title: "Coding Contest Arena", color: "from-blue-500 to-indigo-600" },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-teal-900/20 group">
      <div className="absolute inset-0 w-full h-full bg-slate-900 transition-all duration-700 ease-in-out">
        <div className={`w-full h-full bg-gradient-to-br ${slides[currentSlide].color} opacity-20`} />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8 bg-slate-950/50 backdrop-blur-md rounded-2xl border border-white/10">
                <BookOpen className="w-12 h-12 text-white mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{slides[currentSlide].title}</h3>
                <p className="text-white/70">Gallery Image Placeholder {currentSlide + 1}</p>
            </div>
        </div>
      </div>
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white backdrop-blur-sm border border-white/10 hover:bg-teal-500 hover:border-teal-500 transition-all"><ChevronLeft size={24} /></button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white backdrop-blur-sm border border-white/10 hover:bg-teal-500 hover:border-teal-500 transition-all"><ChevronRight size={24} /></button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'w-8 bg-teal-400' : 'bg-white/30 hover:bg-white/50'}`} />
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-slate-950 border-b border-slate-900">
      <div className="container mx-auto px-6">
        <SectionHeader title="Event Gallery" subtitle="Capturing the moments of innovation, teamwork, and success." />
        <GallerySlider />
      </div>
    </section>
  );
};

export default Gallery;
