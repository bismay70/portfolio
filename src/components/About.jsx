import React, { useState, useEffect } from 'react';
import { Code, BookOpen, Trophy, Calendar, MapPin, User } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
    { name: 'Figma', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', color: 'bg-pink-500/20 hover:bg-pink-500/40 border-pink-500/30', url: 'https://www.figma.com/' },
    { 
  name: 'TypeScript',
  icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  color: 'bg-blue-600/20 hover:bg-blue-600/40 border-blue-600/30',
  url: 'https://www.typescriptlang.org/docs/'
},

{ 
  name: 'MongoDB',
  icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
  color: 'bg-green-500/20 hover:bg-green-500/40 border-green-500/30',
  url: 'https://www.mongodb.com/docs/'
},

{ 
  name: 'Firebase',
  icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg',
  color: 'bg-yellow-500/20 hover:bg-yellow-500/40 border-yellow-500/30',
  url: 'https://firebase.google.com/docs'
},

{ 
  name: 'Solidity',
  icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg',
  color: 'bg-gray-600/20 hover:bg-gray-600/40 border-gray-600/30',
  url: 'https://docs.soliditylang.org/'
}
  ];

  const projects = [
    {
      name: 'Pokiverse',
  description: 'A Pokémon-themed mini-game hub featuring PokeLudo, PokeCrush, Hangman, and Memorite with modular React architecture, smooth animations, and dynamic Pokémon data integration.',
  techStack: ['React.js', 'Vite', 'TailwindCSS', 'react-router-dom', 'GSAP', 'Lucide React', 'PokéAPI'],
      url: 'https://pokiverse.vercel.app/',
      image: '/pokiverse.png'
    },
     {
      name: 'Campus Complaint Portal',
      description: 'A modern, production-ready web application for managing campus complaints and maintenance requests. Enables students to submit, track, and filter issues with real-time updates and image uploads.  Features role-based access and an admin dashboard for streamlined complaint management.',
      techStack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'Firebase Auth', 'TailwindCSS', 'shadcn/ui', 'UploadThing', 'Recharts', 'react-hook-form', 'Zod'],
      url: 'https://campus-complaint-portal-q8q7.vercel.app/',
      image: '/campus.png'
    },
    {
      name: 'ML4E Official Website',
      description: 'The official website for ML4E, a student-run Machine Learning Club at NIT Rourkela, showcasing projects, events, and resources.',
      techStack: ['TypeScript', 'Next.js', 'TailwindCSS', 'Framer Motion', 'Three.js'],
      url: 'https://ml-4-e-web1.vercel.app/',
      image: '/ml4e.png'
    },
    {
       name: 'Weather App',
       description: 'A sleek web application that provides real-time weather updates, forecasts, and atmospheric details for any location worldwide.',
       techStack: ['JavaScript', 'CSS', 'weather API'],
       url: 'https://mausam-liard.vercel.app/',
       image: '/weather.png'
    },
    {
      name: 'Dictionary App',
      description: 'An elegant dictionary application with word definitions, pronunciations, and examples from multiple sources.',
      techStack: ['JavaScript', 'CSS', 'Dictionary API'],
      url: 'https://dictionary-app-sigma-ecru.vercel.app/',
      image: '/dictionary.png'
    }
  ];

 
  const duplicatedTechs = [...techStacks, ...techStacks, ...techStacks];

  return (
    <div id="about" className="min-h-screen bg-[url('/bg.png')] bg-cover bg-center bg-fixed p-6 lg:p-12 overflow-hidden relative" style={{ fontFamily: "'Young Serif', sans-serif" }}>
     
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(209,255,102,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(163,255,204,0.15),transparent_50%)]"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d1ff66]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#cce0ff]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 w-full mx-auto">
        
        <div className="bg-[url('/bg.png')] bg-cover bg-center bg-fixed backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 lg:p-16 mb-16 shadow-2xl relative w-full flex flex-col justify-center items-center" style={{ fontFamily: "'Young Serif', sans-serif", minHeight: "80vh" }}>
          
          <div className="flex justify-center items-center mb-12 relative w-fit mx-auto">
            <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="absolute -left-12 -bottom-2 w-16 h-16 md:-left-20 md:-bottom-4 md:w-24 md:h-24">
              <path d="M80,20 C95,5 105,30 90,40 C70,55 60,30 75,20 C90,8 65,30 50,55 C40,70 30,85 20,95" />
              <path d="M20,95 L20,75 M20,95 L40,90" />
            </svg>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-widest text-white uppercase">
              ABOUT ME
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center md:items-start max-w-5xl mx-auto w-full">
            
            <div className="bg-[#FAF7ED] text-[#1681a5] p-5 lg:p-6 w-72 md:w-80 flex-shrink-0 shadow-xl rounded-[20px] transform -rotate-2">
              <div className="rounded-[10px] overflow-hidden mb-4 shadow-sm" style={{ padding: "4px", backgroundColor: "#FAF7ED" }}>
                <img src="/bismay.jpg" alt="Bismay" className="w-[95%] mx-auto h-auto aspect-square object-cover rounded-md" />
              </div>
              <div className="text-left font-bold text-xl md:text-2xl leading-tight px-1">
                Bismay<br />
                <span className="font-medium text-[1.1rem]">Aspiring Software Engineer</span><br />
                <span className="font-medium text-[1.1rem]">Full-Stack Developer</span>
              </div>
            </div>

            <div className="flex-1 text-white text-lg lg:text-xl font-medium leading-relaxed space-y-6 pt-2 text-justify md:text-left">
              <p>
                Hello, I am Bismay, an aspiring Software Engineer with expertise in full-stack development. I have a strong foundation in software development, data structures, algorithms, and competitive programming. 
              </p>
              <p>
                I'm skilled in modern technologies like Next.js for both frontend and backend development. Currently, I am exploring Machine Learning, Deep Learning, and Web3 technologies to expand my skill set and stay updated with industry trends.
              </p>
              <p>
                Passionate about solving challenging problems through projects and collaborative initiatives. My goal is to create scalable digital experiences, delivering innovative and impactful solutions while growing.
              </p>
            </div>
          </div>
        </div>

        <section className={`mb-8 bg-[url('/bg.png')] bg-cover bg-center bg-fixed backdrop-blur-xl rounded-3xl p-6 transition-all duration-500 transform shadow-2xl hover:shadow-indigo-500/20 overflow-hidden mt-16 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center mb-6">
           
            <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
          </div>
          
          <div 
            className="relative overflow-hidden"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', 
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
            }}
          >
            <div className="flex animate-scroll w-max">
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

       
        <section id="projects" className={`relative overflow-hidden rounded-3xl p-6 bg-[url('/bg.png')] bg-cover bg-center bg-fixed backdrop-blur-xl transition-all duration-500 transform shadow-2xl hover:shadow-blue-500/20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center mb-6">
           
            <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="relative rounded-2xl overflow-hidden transition-all duration-300 bg-[url('/bg.png')] bg-cover bg-center bg-fixed p-5 group hover:scale-[1.02]"
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
                    className="inline-block w-fit px-5 py-2 text-sm rounded-xl bg-[#2c6f99] text-white font-semibold hover:scale-105 hover:bg-[#1f506e] transition shadow-lg"
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
