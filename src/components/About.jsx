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

   
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@300;400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

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
      image: './public/pokiverse.png'
    },
    {
      name: 'Dictionary App',
      description: 'An elegant dictionary application with word definitions, pronunciations, and examples from multiple sources.',
      techStack: ['JavaScript', 'CSS', 'Dictionary API'],
      url: 'https://dictionary-app-sigma-ecru.vercel.app/',
      image: './public/dictionary.png'
    },
    {
      name: 'Weather App',
      description: 'An elegant dictionary application with word definitions, pronunciations, and examples from multiple sources.',
      techStack: ['JavaScript', 'CSS', 'weather API'],
      url: 'https://mausam-liard.vercel.app/',
      image: './public/weather.png'
    },
    {
      name: 'ML4E Official Website',
      description: 'The official website for ML4E, a student-run Machine Learning Club at NIT Rourkela, showcasing projects, events, and resources.',
      techStack: ['TypeScript', 'Next.js', 'TailwindCSS', 'Framer Motion', 'Three.js'],
      url: 'https://ml-4-e-web1.vercel.app/',
      image: './public/ml4e.png'
    },
    {
      name: 'Weather App',
      description: 'An elegant dictionary application with word definitions, pronunciations, and examples from multiple sources.',
      techStack: ['JavaScript', 'CSS', 'weather API'],
      url: 'https://mausam-liard.vercel.app/',
      image: './public/weather.png'
    }
  ];

 
  const duplicatedTechs = [...techStacks, ...techStacks, ...techStacks];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6 overflow-hidden relative" style={{ fontFamily: "'Shantell Sans', cursive" }}>
     
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900/40 to-blue-950/60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(30,58,138,0.15),transparent_50%)]"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto">
       
        <section className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            About Me
          </h1>
        </section>

      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
         
          <section className={`bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 transform shadow-2xl hover:shadow-blue-500/20 flex items-center ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div>
              <p className="text-lg text-blue-100 leading-relaxed">
                I'm an aspiring Frontend Engineer and B.Tech student, graduating in 2028, currently exploring the dynamic world of full-stack web development. I've built a solid foundation in software development, data structures, and modern frontend technologies like React, Tailwind CSS, and GSAP. I'm actively expanding my skills through projects and problem-solving, with a strong interest in participating in hackathons and collaborative tech challenges. Eager to learn, build, and grow, I'm passionate about crafting intuitive and engaging user experiences while continuously exploring the ever-evolving web ecosystem.
              </p>
            </div>
          </section>

        
        <section
  className={`bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 transform shadow-2xl hover:shadow-blue-500/20 ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
  }`}
  style={{ animationDelay: '0.3s' }}
>
  <div className="flex items-center justify-center h-full">
    <div className="relative w-72 h-72">

    
      <div
        className="absolute top-50 left-60 w-44 h-44 overflow-hidden shadow-2xl group transition-transform duration-300"
        style={{ transform: 'translate(-50%, -50%) rotate(45deg)' }}
      >
        <div
          className="w-full h-full scale-150"
          style={{ transform: 'rotate(-45deg)' }}
        >
          <img
            src="./public/me.jpeg"
            alt="Back Diamond"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
      </div>

     
      <div
        className="absolute top-30 left-10 w-44 h-44 overflow-hidden shadow-2xl group z-20 transition-transform duration-300 hover:scale-105"
        style={{ transform: 'translate(-40%, -40%) rotate(45deg)' }}
      >
        <div
          className="w-full h-full scale-150"
          style={{ transform: 'rotate(-45deg)' }}
        >
          <img
            src="./public/bismay.jpg"
            alt="Front Diamond"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent"></div>
      </div>

    </div>
  </div>
</section>
        </div>

       
        <section className={`mb-8 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-slate-900/80 backdrop-blur-xl rounded-3xl p-6 transition-all duration-500 transform shadow-2xl hover:shadow-indigo-500/20 overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center mb-6">
           
            <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedTechs.map((tech, index) => (
                <a
                  key={`${tech.name}-${index}`}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${tech.color} rounded-2xl p-4 border hover:border-white/30 transition-all duration-300 hover:scale-110 cursor-pointer group shadow-lg hover:shadow-xl flex-shrink-0 mx-3`}
                  style={{ width: '140px' }}
                >
                  <div className="flex flex-col items-center text-center">
                    <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-200"/>
                    <span className="text-white text-sm font-medium">{tech.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

       
        <section id="projects" className={`relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-slate-900/80 backdrop-blur-xl transition-all duration-500 transform shadow-2xl hover:shadow-blue-500/20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center mb-6">
           
            <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="relative rounded-2xl overflow-hidden transition-all duration-300 bg-gradient-to-br from-slate-800/50 to-blue-900/50 p-5 group hover:scale-[1.02]"
              >
               
                <div className="mb-4">
                  <div className="rounded-xl overflow-hidden shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-300">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-blue-200 mb-2">
                    {project.name}
                  </h3>

                  <p className="text-blue-100 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-blue-600/40 text-blue-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-fit px-5 py-2 text-sm rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:scale-105 transition shadow-lg hover:shadow-blue-500/50"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;