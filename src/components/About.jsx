import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Zap, BookOpen, Trophy, Calendar, MapPin, Star } from 'lucide-react';

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
    { 
      name: 'HTML', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 
      color: 'bg-orange-500/20 hover:bg-orange-500/40 border-orange-500/30',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    { 
      name: 'CSS', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 
      color: 'bg-blue-500/20 hover:bg-blue-500/40 border-blue-500/30',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    { 
      name: 'JavaScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
      color: 'bg-yellow-500/20 hover:bg-yellow-500/40 border-yellow-500/30',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    { 
      name: 'React', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
      color: 'bg-cyan-500/20 hover:bg-cyan-500/40 border-cyan-500/30',
      url: 'https://react.dev/'
    },
    { 
      name: 'Node.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 
      color: 'bg-green-500/20 hover:bg-green-500/40 border-green-500/30',
      url: 'https://nodejs.org/en/docs/'
    },
    { 
      name: 'Python', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 
      color: 'bg-blue-600/20 hover:bg-blue-600/40 border-blue-600/30',
      url: 'https://www.python.org/doc/'
    },
    { 
      name: 'TailwindCSS', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', 
      color: 'bg-teal-500/20 hover:bg-teal-500/40 border-teal-500/30',
      url: 'https://tailwindcss.com/docs'
    },
    { 
      name: 'MongoDB', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', 
      color: 'bg-green-600/20 hover:bg-green-600/40 border-green-600/30',
      url: 'https://www.mongodb.com/docs/'
    },
    { 
      name: 'Express', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', 
      color: 'bg-gray-500/20 hover:bg-gray-500/40 border-gray-500/30',
      url: 'https://expressjs.com/'
    },
    { 
      name: 'GSAP', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gsap/gsap-original.svg', 
      color: 'bg-green-400/20 hover:bg-green-400/40 border-green-400/30',
      url: 'https://greensock.com/gsap/'
    },
  ];

  const projects = [
    {
      name: 'Pokiverse',
      description: 'A comprehensive Pokemon gameverse consisting classic Hangman and PokeCrush ,interactive features, and modern UI design.',
      techStack: ['React', 'JavaScript', 'TailwindCSS', 'Pokemon API'],
      url: 'https://pokiverse.vercel.app/'
    },
    {
      name: 'Dictionary App',
      description: 'An elegant dictionary application with word definitions, pronunciations, and examples from multiple sources.',
      techStack: ['JavaScript', 'CSS', 'Dictionary API'],
      url: 'https://dictionary-app-sigma-ecru.vercel.app/'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6 overflow-hidden relative">
   
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900/40 to-blue-950/60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(30,58,138,0.15),transparent_50%)]"></div>
      
      
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

    
      <div className="relative z-10 max-w-7xl mx-auto">
      
        <section id="about" className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting innovative digital experiences with cutting-edge technologies
          </p>
        </section>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         
          <section id="projects" className={`bg-gradient-to-br from-blue-900/60 via-blue-800/40 to-indigo-900/60 backdrop-blur-xl rounded-3xl p-6 border border-blue-400/20 hover:border-blue-300/40 transition-all duration-500 hover:scale-[1.02] transform shadow-2xl hover:shadow-blue-500/20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl mr-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
            </div>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={project.name} className="bg-gradient-to-r from-blue-800/30 to-indigo-800/30 rounded-2xl p-4 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold text-blue-200 mb-2">{project.name}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-600/40 text-blue-200 rounded-full text-xs font-medium border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-3">
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 text-sm"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

         
          <section id="portfolio" className={`bg-gradient-to-br from-indigo-900/60 via-blue-800/40 to-indigo-900/60 backdrop-blur-xl rounded-3xl p-6 border border-indigo-400/20 hover:border-indigo-300/40 transition-all duration-500 hover:scale-[1.02] transform shadow-2xl hover:shadow-indigo-500/20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mr-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Technologies</h2>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {techStacks.map((tech, index) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${tech.color} rounded-2xl p-3 border hover:border-white/30 transition-all duration-300 hover:scale-110 cursor-pointer group shadow-lg hover:shadow-xl`}
                  title={tech.name}
                >
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-white text-xs font-medium">{tech.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>

         
         <section id="education"  className={`lg:col-span-2 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 hover:border-blue-300/40 transition-all duration-500 hover:scale-[1.01] transform shadow-2xl hover:shadow-blue-500/20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-6">
            
              <div className="w-full max-w-xl mb-4">
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl p-6 border border-blue-400/30 shadow-2xl hover:shadow-blue-500/30 transition-all duration-300">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CpQV8rgD-tIUDa2cTrWf4DMe2MIK-MFprA&s" 
                    alt="NIT Rourkela Logo" 
                    className="w-full h-auto max-h-48 object-contain mx-auto"
                  />
                </div>
              </div>
              
             
              <div className="text-center space-y-3">
                <h3 className="text-4xl font-bold text-blue-200 mb-2">NIT Rourkela</h3>
                <p className="text-blue-300 text-xl mb-2">National Institute of Technology</p>
                <p className="text-cyan-400 font-semibold text-2xl mb-4">Computer Science & Engineering</p>
                
             
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-green-400 font-bold text-xl">Graduating: 2028</span>
                </div>
                
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-blue-400 font-semibold text-lg">Rourkela, Odisha</span>
                </div>
                
                <div className="border-t border-blue-500/30 pt-6">
                  <p className="text-blue-100 text-base leading-relaxed max-w-3xl mx-auto">
                  I'm an aspiring Frontend Engineer and B.Tech student, graduating in 2028, currently exploring the dynamic world of full-stack web development. I've built a solid foundation in software development, data structures, and modern frontend technologies like React, Tailwind CSS, and GSAP. I'm actively expanding my skills through projects and problem-solving, with a strong interest in participating in hackathons and collaborative tech challenges. Eager to learn, build, and grow, I'm passionate about crafting intuitive and engaging user experiences while continuously exploring the ever-evolving web ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

     
      <div 
        className="fixed pointer-events-none z-50 w-6 h-6 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded-full blur-sm"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transition: 'all 0.1s ease-out'
        }}
      />
      
     
      <div 
        className="fixed pointer-events-none z-40 w-12 h-12 bg-blue-500/10 rounded-full blur-md"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
          transition: 'all 0.2s ease-out'
        }}
      />
    </div>
  );
};

export default About;