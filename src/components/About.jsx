import React, { useState, useEffect } from 'react';
import { Code, BookOpen, Trophy, Calendar, MapPin, User } from 'lucide-react';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techStacks = [
    { name: 'C', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg', color: 'bg-slate-500/20 hover:bg-slate-500/40 border-slate-500/30', url: 'https://en.cppreference.com/w/c' },
    { name: 'C++', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg', color: 'bg-blue-700/20 hover:bg-blue-700/40 border-blue-700/30', url: 'https://en.cppreference.com/w/cpp' },
    { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', color: 'bg-yellow-600/20 hover:bg-yellow-600/40 border-yellow-600/30', url: 'https://www.python.org/doc/' },
    { name: 'HTML', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg', color: 'bg-orange-500/20 hover:bg-orange-500/40 border-orange-500/30', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg', color: 'bg-blue-500/20 hover:bg-blue-500/40 border-blue-500/30', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', color: 'bg-teal-500/20 hover:bg-teal-500/40 border-teal-500/30', url: 'https://tailwindcss.com/docs' },
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', color: 'bg-yellow-500/20 hover:bg-yellow-500/40 border-yellow-500/30', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg', color: 'bg-cyan-500/20 hover:bg-cyan-500/40 border-cyan-500/30', url: 'https://react.dev/' },
    { name: 'Next.js', icon: 'https://imgs.search.brave.com/P77vz8f_CSDPRp_02Y9kyUC1lz8r_FePsp7pa7fY7AU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdo/ZHByby5jb20vd3At/Y29udGVudC90aGVt/ZXMvcG5naGRwcm8v/ZG93bmxvYWQvc29j/aWFsLW1lZGlhLWFu/ZC1icmFuZHMvbmV4/dC1qcy1sb2dvLWlj/b24ucG5n', color: 'bg-gray-500/20 hover:bg-gray-500/40 border-gray-500/30', url: 'https://nextjs.org/docs' },
    { name: 'Express', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png', color: 'bg-neutral-500/20 hover:bg-neutral-500/40 border-neutral-500/30', url: 'https://expressjs.com/' },
    { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg', color: 'bg-green-600/20 hover:bg-green-600/40 border-green-600/30', url: 'https://nodejs.org/en/docs/' },
    { name: 'Figma', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', color: 'bg-pink-500/20 hover:bg-pink-500/40 border-pink-500/30', url: 'https://www.figma.com/' }
  ];

  const projects = [
    {
      name: 'Pokiverse',
      description: 'A comprehensive Pokemon gameverse consisting classic Hangman and PokeCrush, interactive features, and modern UI design.',
      techStack: ['React', 'JavaScript', 'TailwindCSS', 'Pokemon API'],
      url: 'https://pokiverse.vercel.app/',
      image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=800&q=80'
    },
    {
      name: 'Dictionary App',
      description: 'An elegant dictionary application with word definitions, pronunciations, and examples from multiple sources.',
      techStack: ['JavaScript', 'CSS', 'Dictionary API'],
      url: 'https://dictionary-app-sigma-ecru.vercel.app/',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6 overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900/40 to-blue-950/60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(30,58,138,0.15),transparent_50%)]"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* About Me Title */}
        <section className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            About Me
          </h1>
        </section>

        {/* Profile and Description Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left - Description Paragraph */}
          <section className={`bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 hover:border-blue-300/40 transition-all duration-500 transform shadow-2xl hover:shadow-blue-500/20 flex items-center ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div>
              <p className="text-lg text-blue-100 leading-relaxed">
                I'm an aspiring Frontend Engineer and B.Tech student, graduating in 2028, currently exploring the dynamic world of full-stack web development. I've built a solid foundation in software development, data structures, and modern frontend technologies like React, Tailwind CSS, and GSAP. I'm actively expanding my skills through projects and problem-solving, with a strong interest in participating in hackathons and collaborative tech challenges. Eager to learn, build, and grow, I'm passionate about crafting intuitive and engaging user experiences while continuously exploring the ever-evolving web ecosystem.
              </p>
            </div>
          </section>

          {/* Right - Profile Photo */}
          <section className={`bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 hover:border-blue-300/40 transition-all duration-500 transform shadow-2xl hover:shadow-blue-500/20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col items-center justify-center h-full">
              {/* Circular Photo Placeholder */}
              <div className="relative w-56 h-56 mb-6 group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-400/50 shadow-2xl">
                  {/* Replace this src with your actual photo */}
                  <img 
                    src="./public/bismay.jpg"
                    alt="Bismay Samal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-2">Bismay Samal</h3>
              <p className="text-blue-300 text-lg mb-4">Full Stack Developer</p>
              
            
            </div>
          </section>
        </div>

        {/* Projects and Tech Stack Side by Side (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Tech Stack */}
          <section id="portfolio" className={`bg-gradient-to-br from-indigo-900/60 via-blue-800/40 to-indigo-900/60 backdrop-blur-xl rounded-3xl p-6 border border-indigo-400/20 hover:border-indigo-300/40 transition-all duration-500 hover:scale-[1.01] transform shadow-2xl hover:shadow-indigo-500/20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mr-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Technologies</h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {techStacks.map((tech) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${tech.color} rounded-2xl p-3 border hover:border-white/30 transition-all duration-300 hover:scale-110 cursor-pointer group shadow-lg hover:shadow-xl`}
                >
                  <div className="flex flex-col items-center text-center">
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform duration-300"/>
                    <span className="text-white text-xs font-medium">{tech.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Right - Projects */}
          <section id="projects" className={`relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-slate-900/80 backdrop-blur-xl border border-blue-400/20 hover:border-blue-300/40 transition-all duration-500 hover:scale-[1.01] transform shadow-2xl hover:shadow-blue-500/20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl mr-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
            </div>
            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="relative rounded-2xl overflow-hidden border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group"
                >
                  {/* Image Background */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-indigo-900/80"></div>

                  {/* Content */}
                  <div className="relative z-10 p-4">
                    <h3 className="text-xl font-bold text-blue-200 mb-2">
                      {project.name}
                    </h3>

                    <p className="text-blue-100 text-sm mb-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-blue-600/40 text-blue-200 border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-sm rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:scale-105 transition"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Custom Mouse Effects */}
      {/* <div 
        className="fixed pointer-events-none z-50 w-6 h-6 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded-full blur-sm"
        style={{ left: mousePosition.x - 12, top: mousePosition.y - 12, transition: 'all 0.1s ease-out' }}
      />
      <div 
        className="fixed pointer-events-none z-40 w-12 h-12 bg-blue-500/10 rounded-full blur-md"
        style={{ left: mousePosition.x - 24, top: mousePosition.y - 24, transition: 'all 0.2s ease-out' }}
      /> */}
    </div>
  );
};

export default About;