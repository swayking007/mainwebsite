import React from 'react';
import { Code, Users, Cpu } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-teal-400" />,
      title: "Competitive Programming",
      desc: "Dominate the leaderboards on CodeChef, Codeforces, and CodeDrills. We host regular contests to sharpen your logic and speed."
    },
    {
      icon: <Users className="w-8 h-8 text-fuchsia-400" />,
      title: "Peer Learning",
      desc: "Join a strong network of seniors, alumni, and peers. We believe in growing together through mentorship and collaboration."
    },
    {
      icon: <Cpu className="w-8 h-8 text-amber-400" />,
      title: "Technical Excellence",
      desc: "Master C++, STL, Algorithms, and Data Structures through our expert-led bootcamps designed for placements and beyond."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative border-b border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-fuchsia-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-800">
                <div className="inline-flex items-center space-x-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Who We Are</h3>
                <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                  CodeChef WCE Chapter is a vibrant student community at <span className="text-teal-400 font-semibold">Walchand College of Engineering, Sangli</span>.
                  Our mission is to democratize competitive programming and build a community of problem solvers.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  From hosting the prestigious <strong>WCPC (Walchand Collegiate Programming Contest)</strong> to conducting 
                  beginner-friendly bootcamps, we bridge the gap between classroom theory and industry-level coding standards.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid gap-6">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-start p-6 rounded-2xl bg-slate-900/50 hover:bg-slate-800/80 transition-all border border-slate-800 hover:border-teal-500/30 group">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mr-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
