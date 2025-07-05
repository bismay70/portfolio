// import { useState, useEffect, useLayoutEffect, useRef } from "react";
// import gsap from "gsap";

// const App = () => {
  
//   const comp = useRef(null);

//   // State to hold the current date and time
//   const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

//   useEffect(() => {
//     // Create an interval that updates the current date every second (1000 ms)
//     const intervalId = setInterval(() => {
//       setCurrentDate(
//         new Date().toLocaleTimeString("en-US", {
//           hour: "2-digit",
//           minute: "2-digit",
//           hour12: false, // Set to false for 24-hour format
//         })
//       );
//     }, 1000);

//     // Cleanup function to clear the interval when the component unmounts
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []); // Empty dependency array ensures this effect runs once when the component mounts

//   useLayoutEffect(() => {
//     // Disable scroll when intro-slider animation starts
//     document.body.style.overflow = "hidden";

//     let ctx = gsap.context(() => {
//       const t1 = gsap.timeline();
//       t1.from("#intro-slider", {
//         duration: 1.3,
//         delay: 0.3,
//       })
//         .from(["#title-1", "#title-2", "#title-3", "#title-4", "#title-5"], {
//           opacity: 0,
//           y: 100,
//           duration: 1,
//           stagger: 0.2,
//         })
//         .to("#intro-slider", {
//           yPercent: "-100",
//           duration: 0.5,
//         });

//       // When the animation is complete, re-enable scroll
//       t1.eventCallback("onComplete", () => {
//         document.body.style.overflow = "auto"; // Re-enable scroll
//       });
//     }, comp);

//     return () => {
//       // Revert the gsap context and ensure scroll is re-enabled if component is unmounted
//       ctx.revert();
//       document.body.style.overflow = "auto"; // Ensure scrolling is enabled if the component unmounts
//     };
//   }, []);

//   return (
//     <div ref={comp} className="relative min-h-screen">
//       <div
//         id="intro-slider"
//         className="h-[100vh] absolute top-0 left-0 bg-customRed w-screen flex justify-center lg:items-center"
//       >
//         <div className="font-youngSerif text-64px xl:text-80px text-customWhite text-center leading-110% mt-36 lg:mt-0">
//           <h1 id="title-1">Hello</h1>
//           <h1 id="title-2">Hola</h1>
//           <h1 id="title-3">Namaste</h1>
//           <h1 id="title-4">Salam</h1>
//           <h1 id="title-5">Hey</h1>
//         </div>
//       </div>
//       <div className="bg-customBackground min-h-screen pt-24px pb-40px lg:pt-0 lg:pb-0 flex justify-center items-center lg:overflow-hidden">
//         <div className="grid grid-cols-1  w-[94vw] lg:grid-cols-3 lg:grid-rows-4 gap-16px lg:h-[94vh] lg:w-[97vw]">
        

//  <div className="bg-customWhite col-span-1 row-span-3 md:hidden p-24px rounded-16px flex flex-col justify-between">
//           <h3 className="text-44px xl:text-52px leading-110% font-youngSerif text-customRed font-400 -tracking-2.08px">
//             Hello, I am Pratyush, an independent frontend web developer ☻
//           </h3>
//           <div className="flex justify-between text-14px font-youngSerif text-black mt-20 lg:mt-0">
//             <p>Available for Freelance</p>
//             <p>My local time -{currentDate} GMT</p>
//           </div>
//         </div>

//         {/* Item 1 */}
//         <div className="bg-customRed col-span-1 row-span-2 p-24px rounded-16px text-customWhite flex flex-col justify-between">
//           <h3 className="text-26px xl:text-32px leading-120% font-youngSerif font-400">
//             Creating websites that pay attention to the details that truly make
//             a difference ☉
//           </h3>
//           <div className="flex justify-between text-14px font-youngSerif mt-16 lg:mt-0">
//             <p>Available for Freelance</p>
//             <p>My local time -{currentDate} GMT</p>
//           </div>
//         </div>

//         {/* Item 2 */}
//         <div className="bg-customWhite col-span-1 row-span-3 p-24px rounded-16px hidden md:flex md:flex-col justify-between">
//           <h3 className="text-44px xl:text-52px leading-110% font-youngSerif text-customRed font-400 -tracking-2.08px">
//             Hello, I am Pratyush, an independent frontend web developer ☻
//           </h3>
//           <div className="flex justify-between text-14px font-youngSerif text-black mt-20 lg:mt-0">
//             <p>Available for Freelance</p>
//             <p>My local time -{currentDate} GMT</p>
//           </div>
//         </div>

//         {/* Item 3 */}
//         <div className="bg-customWhite col-span-1 row-span-1 p-24px rounded-16px text-black flex flex-col gap-2 overflow-auto scrollbar-hide text-18px lg:text-20px">
//           <h3 className="font-youngSerif  border-b-2 border-customBorder pb-2 ">
//             Love for you to check out my works ✦
//           </h3>
//           <a target="_blank" href="https://lemontree-studio.vercel.app/" className="text-customRed font-youngSerif border-b-2 border-customRed pb-2">
//             Lemon Tree Studio (Studio Webpage)
//           </a>
//           <a target="_blank" href="https://mausam-omega.vercel.app/" className="text-customRed font-youngSerif border-b-2 border-customRed pb-2">
//             Mausam (Weather Application with React Query)
//           </a>
//           <a target="_blank" href="https://awwwards-zentry-virid.vercel.app/" className="text-customRed font-youngSerif border-b-2 border-customRed pb-2">
//             Zentry (Awwwards winner)
//           </a>
//           <a target="_blank" href="https://metaverse-ten-plum.vercel.app/" className="text-customRed font-youngSerif ">
//             Metaverse (Abstract UI for AI-based applications)
//           </a>
//         </div>

//         {/* Item 4 */}
//         <div className="bg-customBackground border-2 border-customWhite p-24px col-span-1 row-span-1 rounded-16px text-white flex flex-col justify-between">
//           <h3 className="text-18px xl:text-20px font-youngSerif text-customWhite font-400 leading-150% -tracking-0.32px">
//             I’ve always wanted to create new experiences; web development
//             transformed everything.
//           </h3>
//           <p className="font-youngSerif text-14px text-customWhite mt-6 lg:mt-0">
//            <a target="_blank" href="https://www.google.com/maps/place/National+Institute+of+Technology,+Rourkela/@22.2530559,84.8983679,17z/data=!3m1!4b1!4m6!3m5!1s0x3a201f72bbd561c3:0xab5c70e76a7b5a!8m2!3d22.253051!4d84.9009428!16zL20vMGNnM2xr?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">Meet me at my college!</a>
//           </p>
//         </div>

//         {/* Item 5 */}
//         <div className="bg-customBackground border-2 border-customRed p-24px col-span-1 row-span-2 rounded-16px text-customRed flex flex-col justify-between">
//           <h3 className="text-26px xl:text-32px font-youngSerif leading-120% font-400">
//             Playing around with ReactJS and NextJS, using Framer Motion and GSAP
//             to add some cool animations ★
//           </h3>
//           <div className="flex justify-between text-14px font-youngSerif mt-16 lg:mt-0">
//             <p>Available for Freelance</p>
//             <p id="current-time">My local time -{currentDate} GMT</p>
//           </div>
//         </div>

//         <div className="bg-customBackground border-2 border-customWhite p-24px rounded-16px col-span-1 row-span-1 text-customWhite md:hidden flex flex-col justify-between">
//           <h3 className="font-semibold font-youngSerif text-18px leading-150% xl:text-20px">
//             Hey! Wanna chat about an idea? I’d really like to hear what you
//             think ⚃
//           </h3>
//           <div className="flex text-14px font-youngSerif text-customWhite mt-8 lg:mt-0">
//             <p>Send a mail</p>
//             <p className="ml-24px">Schedule a call</p>
//           </div>
//         </div>

//         {/* Item 6 */}
//         <div className="bg-customRed p-24px col-span-1 row-span-2 rounded-16px text-customWhite flex flex-col justify-between ">
//           <h3 className="text-26px xl:text-32px font-youngSerif leading-120% font-400">
//             Thanks for your visit! You can check out my networks to follow my
//             new adventures ☼
//           </h3>
//           <div className="flex text-14px font-youngSerif font-400 text-black flex-col lg:flex-row gap-24px mt-16 lg:mt-0">
//             <p>
//               <a target="_blank" href="https://github.com/PratyushPanda2005">
//                 Github
//               </a>
//             </p>
//             <p>
//               <a target="_blank" href="https://www.linkedin.com/in/pratyush-panda-830265326/">Linkedln</a>
//             </p>
//             <p>
//               <a target="_blank" href="https://x.com/panda_prat8747">Twitter</a>
//             </p>
//             <p>
//               <a target="_blank" href="">Blog</a>
//             </p>
//           </div>
//         </div>

//         {/* Item 7 */}
//         <div className="bg-customBackground border-2 border-customWhite p-24px rounded-16px col-span-1 row-span-1 text-customWhite hidden md:flex md:flex-col justify-between">
//           <h3 className="font-semibold font-youngSerif text-18px leading-150% xl:text-20px">
//             Hey! Wanna chat about an idea? I’d really like to hear what you
//             think ⚃
//           </h3>
//           <div className="flex text-14px font-youngSerif font-400 text-customWhite mt-8 lg:mt-0">
//             <p>Send a mail</p>
//             <p className="ml-24px">Schedule a call</p>
//           </div>
//         </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;













// import React, { useState, useEffect } from 'react';
// import { Code, Database, Globe, Zap, BookOpen, Trophy } from 'lucide-react';

// const Spline = ({ scene, className, ...props }) => {
//   const [loaded, setLoaded] = useState(false);
  
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'module';
//     script.src = 'https://unpkg.com/@splinetool/viewer@1.0.21/build/spline-viewer.js';
//     script.onload = () => setLoaded(true);
//     document.head.appendChild(script);
    
//     return () => {
//       if (document.head.contains(script)) {
//         document.head.removeChild(script);
//       }
//     };
//   }, []);

//   if (!loaded) {
//     return (
//       <div className={`${className} bg-gray-900/50 rounded-lg flex items-center justify-center`}>
//         <div className="text-white text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
//           <p className="text-sm text-gray-300">Loading 3D Scene...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <spline-viewer
//       url={scene}
//       className={className}
//       {...props}
//     />
//   );
// };

// const Landing = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
    
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const techStacks = [
//     { name: 'HTML', icon: '🌐', color: 'bg-orange-500', delay: 0 },
//     { name: 'CSS', icon: '🎨', color: 'bg-blue-500', delay: 0.2 },
//     { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-500', delay: 0.4 },
//     { name: 'React', icon: '⚛️', color: 'bg-cyan-500', delay: 0.6 },
//     { name: 'Node.js', icon: '🟢', color: 'bg-green-500', delay: 0.8 },
//     { name: 'TailwindCSS', icon: '💨', color: 'bg-teal-500', delay: 1.0 },
//     { name: 'Express', icon: '🚀', color: 'bg-gray-700', delay: 1.2 },
//   ];

//   const FloatingTech = ({ tech, index }) => {
//     const [position, setPosition] = useState({ x: 0, y: 0 });
    
//     useEffect(() => {
//       const updatePosition = () => {
//         const time = Date.now() * 0.001;
//         const x = Math.sin(time + index) * 30;
//         const y = Math.cos(time + index * 0.5) * 20;
//         setPosition({ x, y });
//       };
      
//       const interval = setInterval(updatePosition, 50);
//       return () => clearInterval(interval);
//     }, [index]);

//     return (
//       <div
//         className={`absolute ${tech.color} rounded-full p-3 shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer`}
//         style={{
//           transform: `translate(${position.x}px, ${position.y}px)`,
//           animationDelay: `${tech.delay}s`,
//         }}
//       >
//         <div className="flex items-center justify-center text-white font-bold text-sm">
//           <span className="mr-1 text-lg">{tech.icon}</span>
//           <span className="hidden sm:inline">{tech.name}</span>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6 overflow-hidden relative">
//       {/* Background animated particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(50)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 2}s`,
//               animationDuration: `${2 + Math.random() * 2}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Floating Tech Stacks */}
//       <div className="absolute inset-0 pointer-events-none">
//         {techStacks.map((tech, index) => (
//           <div
//             key={tech.name}
//             className="absolute pointer-events-auto"
//             style={{
//               left: `${20 + (index * 12)}%`,
//               top: `${10 + (index % 3) * 20}%`,
//             }}
//           >
//             <FloatingTech tech={tech} index={index} />
//           </div>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header */}
//         <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             About Me
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Passionate developer crafting digital experiences with modern technologies
//           </p>
//         </div>

//         {/* Bento Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          
//           {/* 3D Spline Scene */}
//           <div className={`lg:col-span-2 lg:row-span-2 bg-gradient-to-r from-slate-900/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-4 border border-slate-500/20 hover:border-slate-400/40 transition-all duration-300 hover:scale-[1.02] transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.1s' }}>
//             <div className="h-full min-h-[400px] relative overflow-hidden rounded-xl">
//               <Spline 
//                 scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
//                 className="w-full h-full"
//               />
//               <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
//                 <p className="text-white text-sm font-medium">3D Developer Workspace</p>
//                 <p className="text-gray-300 text-xs">Interactive 3D Scene</p>
//               </div>
//             </div>
//           </div>

//           {/* Project Highlight Box */}
//           <div className={`lg:col-span-2 bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.2s' }}>
//             <div className="flex items-center mb-6">
//               <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
//               <h2 className="text-3xl font-bold text-white">Featured Project</h2>
//             </div>
//             <div className="space-y-4">
//               <h3 className="text-2xl font-semibold text-purple-300">E-Commerce Platform</h3>
//               <p className="text-gray-300 text-lg leading-relaxed">
//                 A full-stack e-commerce solution built with React, Node.js, and Express. 
//                 Features include user authentication, payment integration, real-time inventory management, 
//                 and responsive design optimized for all devices.
//               </p>
//               <div className="flex flex-wrap gap-2 mt-4">
//                 {['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'].map((tech, i) => (
//                   <span key={tech} className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm font-medium border border-purple-500/20">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex items-center mt-6 space-x-4">
//                 <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105">
//                   View Project
//                 </button>
//                 <button className="border border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-200">
//                   <Code className="w-4 h-4 inline mr-2" />
//                   View Code
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* College Box */}
//           <div className={`bg-gradient-to-r from-blue-800/30 to-cyan-800/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.4s' }}>
//             <div className="flex items-center mb-6">
//               <BookOpen className="w-8 h-8 text-blue-400 mr-3" />
//               <h2 className="text-2xl font-bold text-white">Education</h2>
//             </div>
//             <div className="space-y-4">
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-white font-bold text-xl">NIT</span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-blue-300 mb-2">NIT Rourkela</h3>
//                 <p className="text-gray-300 text-sm mb-2">National Institute of Technology</p>
//                 <p className="text-blue-400 font-medium">Computer Science & Engineering</p>
//                 <p className="text-gray-400 text-sm mt-2">2020 - 2024</p>
//               </div>
//               <div className="border-t border-blue-500/20 pt-4">
//                 <p className="text-gray-300 text-sm leading-relaxed">
//                   Gained comprehensive knowledge in software development, algorithms, 
//                   data structures, and modern web technologies. Actively participated 
//                   in coding competitions and technical projects.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Skills Overview */}
//           <div className={`bg-gradient-to-r from-green-800/30 to-teal-800/30 backdrop-blur-lg rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.6s' }}>
//             <div className="flex items-center mb-6">
//               <Zap className="w-8 h-8 text-green-400 mr-3" />
//               <h2 className="text-2xl font-bold text-white">Skills</h2>
//             </div>
//             <div className="space-y-4">
//               {[
//                 { skill: 'Frontend Development', level: 90 },
//                 { skill: 'Backend Development', level: 85 },
//                 { skill: 'Database Management', level: 80 },
//                 { skill: 'UI/UX Design', level: 75 },
//               ].map((item, i) => (
//                 <div key={item.skill} className="space-y-2">
//                   <div className="flex justify-between">
//                     <span className="text-green-300 font-medium">{item.skill}</span>
//                     <span className="text-green-400 text-sm">{item.level}%</span>
//                   </div>
//                   <div className="w-full bg-green-900/30 rounded-full h-2">
//                     <div 
//                       className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
//                       style={{ 
//                         width: isVisible ? `${item.level}%` : '0%',
//                         transitionDelay: `${0.8 + i * 0.2}s`
//                       }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Experience */}
//           <div className={`bg-gradient-to-r from-orange-800/30 to-red-800/30 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.8s' }}>
//             <div className="flex items-center mb-6">
//               <Database className="w-8 h-8 text-orange-400 mr-3" />
//               <h2 className="text-2xl font-bold text-white">Experience</h2>
//             </div>
//             <div className="space-y-4">
//               <div className="border-l-4 border-orange-500 pl-4">
//                 <h3 className="text-lg font-semibold text-orange-300">Full Stack Developer</h3>
//                 <p className="text-gray-300 text-sm">Tech Startup • 2023 - Present</p>
//                 <p className="text-gray-400 text-sm mt-2">
//                   Developed and maintained web applications using React, Node.js, and modern frameworks.
//                 </p>
//               </div>
//               <div className="border-l-4 border-orange-400 pl-4">
//                 <h3 className="text-lg font-semibold text-orange-300">Frontend Intern</h3>
//                 <p className="text-gray-300 text-sm">Software Company • 2022</p>
//                 <p className="text-gray-400 text-sm mt-2">
//                   Built responsive user interfaces and collaborated with design teams.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className={`lg:col-span-2 bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '1.0s' }}>
//             <div className="flex items-center mb-6">
//               <Globe className="w-8 h-8 text-indigo-400 mr-3" />
//               <h2 className="text-2xl font-bold text-white">Let's Connect</h2>
//             </div>
//             <div className="space-y-4">
//               <p className="text-gray-300">
//                 Always excited to collaborate on innovative projects and discuss new opportunities.
//               </p>
//               <div className="flex flex-col space-y-2">
//                 <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
//                   📧 developer@example.com
//                 </a>
//                 <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
//                   🐙 github.com/developer
//                 </a>
//                 <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
//                   💼 linkedin.com/in/developer
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mouse follower effect */}
//       <div 
//         className="fixed pointer-events-none z-50 w-4 h-4 bg-purple-500/30 rounded-full blur-sm"
//         style={{
//           left: mousePosition.x - 8,
//           top: mousePosition.y - 8,
//           transition: 'all 0.1s ease-out'
//         }}
//       />
//     </div>
//   );
// };

// export default Landing;






// import React, { useState, useEffect } from 'react';
// import { Github, Linkedin, Twitter, Star, Sun, Mail, Phone } from 'lucide-react';

// const Landing = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());
  
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
    
//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (date) => {
//     return date.toLocaleTimeString('en-US', { 
//       hour12: false, 
//       timeZone: 'Asia/Kolkata',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   const TechIcon = ({ name, bgColor, textColor }) => (
//     <div className={`${bgColor} ${textColor} px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1`}>
//       {name === 'React' && <span>⚛️</span>}
//       {name === 'HTML' && <span>🌐</span>}
//       {name === 'JavaScript' && <span>⚡</span>}
//       {name === 'Node.js' && <span>🟢</span>}
//       {name === 'Express' && <span>🚀</span>}
//       {name}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-neutral-900 p-4 md:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Bento Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          
//           {/* Hero Introduction Card */}
//           <div className="bg-red-500 text-white p-6 md:p-8 rounded-3xl flex flex-col justify-between min-h-[300px] hover:scale-[1.02] transition-transform duration-300">
//             <div>
//               <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
//                 Creating websites that pay attention to the details that truly make a difference ☺
//               </h1>
//             </div>
//             <div className="flex justify-between items-end text-sm">
//               <span>Available for Freelance</span>
//               <span>My local time -{formatTime(currentTime)} IST</span>
//             </div>
//           </div>

//           {/* Main Introduction */}
//           <div className="bg-amber-50 text-red-500 p-6 md:p-8 rounded-3xl flex flex-col justify-between min-h-[300px] hover:scale-[1.02] transition-transform duration-300">
//             <div>
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
//                 Hello, I am Bismay, an independent frontend web developer ☺
//               </h2>
//             </div>
//             <div className="flex justify-between items-end text-sm text-gray-800">
//               <span>Available for Freelance</span>
//               <span>My local time -{formatTime(currentTime)} IST</span>
//             </div>
//           </div>

//           {/* Projects Showcase */}
//           <div className="bg-amber-50 text-gray-900 p-6 md:p-8 rounded-3xl hover:scale-[1.02] transition-transform duration-300">
//             <h3 className="text-xl font-bold mb-4 text-gray-800">Love for you to check out my works ✨</h3>
//             <div className="space-y-3">
//               <div className="text-red-500 font-semibold hover:text-red-600 cursor-pointer transition-colors">
//                 Pokiverse (Pokemon Discovery App)
//               </div>
//               <div className="text-red-500 font-semibold hover:text-red-600 cursor-pointer transition-colors">
//                 Dictinor App (Smart Dictionary)
//               </div>
//             </div>
//           </div>

//           {/* Tech Stack with Icons */}
//           <div className="bg-gray-800 text-red-400 p-6 md:p-8 rounded-3xl border-2 border-red-500/30 hover:scale-[1.02] transition-transform duration-300">
//             <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
//               Building with modern tech stack, using frameworks and libraries ⭐
//             </h3>
//             <div className="flex flex-wrap gap-3 mb-6">
//               <TechIcon name="React" bgColor="bg-cyan-500/20" textColor="text-cyan-400" />
//               <TechIcon name="HTML" bgColor="bg-orange-500/20" textColor="text-orange-400" />
//               <TechIcon name="JavaScript" bgColor="bg-yellow-500/20" textColor="text-yellow-400" />
//               <TechIcon name="Node.js" bgColor="bg-green-500/20" textColor="text-green-400" />
//               <TechIcon name="Express" bgColor="bg-gray-500/20" textColor="text-gray-400" />
//             </div>
//             <div className="flex justify-between items-end text-sm">
//               <span>Available for Freelance</span>
//               <span>My local time -{formatTime(currentTime)} IST</span>
//             </div>
//           </div>

//           {/* Personal Story */}
//           <div className="bg-gray-800 text-white p-6 md:p-8 rounded-3xl hover:scale-[1.02] transition-transform duration-300">
//             <div className="mb-6">
//               <h3 className="text-xl font-bold mb-4">
//                 I've always wanted to create new experiences; web development transformed everything.
//               </h3>
//               <p className="text-gray-300">
//                 Meet me at my college!
//               </p>
//             </div>
//           </div>

//           {/* Contact Card */}
//           <div className="bg-gray-800 text-white p-6 md:p-8 rounded-3xl hover:scale-[1.02] transition-transform duration-300">
//             <div className="mb-6">
//               <h3 className="text-xl font-bold mb-4">
//                 Hey! Wanna chat about an idea? I'd really like to hear what you think 💬
//               </h3>
//               <div className="flex gap-4 mb-4">
//                 <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
//                   <Mail size={16} />
//                   Send a mail
//                 </button>
//                 <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
//                   <Phone size={16} />
//                   Schedule a call
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Social Links & Thank You */}
//           <div className="bg-red-500 text-white p-6 md:p-8 rounded-3xl flex flex-col justify-between min-h-[300px] hover:scale-[1.02] transition-transform duration-300">
//             <div>
//               <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
//                 Thanks for your visit! You can check out my networks to follow my new adventures ☀️
//               </h3>
//             </div>
//             <div className="flex justify-between items-end">
//               <div className="flex gap-4">
//                 <button className="hover:scale-110 transition-transform">
//                   <Github size={24} />
//                 </button>
//                 <button className="hover:scale-110 transition-transform">
//                   <Linkedin size={24} />
//                 </button>
//                 <button className="hover:scale-110 transition-transform">
//                   <Twitter size={24} />
//                 </button>
//                 <button className="hover:scale-110 transition-transform">
//                   <span className="text-xl">📝</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Additional Skills Card */}
//           <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 md:p-8 rounded-3xl hover:scale-[1.02] transition-transform duration-300">
//             <h3 className="text-2xl font-bold mb-4">Skills & Expertise</h3>
//             <div className="space-y-3">
//               <div className="flex items-center gap-2">
//                 <Star size={16} className="text-yellow-400" />
//                 <span>Frontend Development</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Star size={16} className="text-yellow-400" />
//                 <span>Responsive Design</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Star size={16} className="text-yellow-400" />
//                 <span>UI/UX Implementation</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Star size={16} className="text-yellow-400" />
//                 <span>Performance Optimization</span>
//               </div>
//             </div>
//           </div>

//           {/* Current Status */}
//           <div className="bg-emerald-500 text-white p-6 md:p-8 rounded-3xl hover:scale-[1.02] transition-transform duration-300">
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
//               <span className="text-sm font-medium">Currently Available</span>
//             </div>
//             <h3 className="text-xl font-bold mb-2">Ready for New Projects</h3>
//             <p className="text-emerald-100 text-sm">
//               Open to collaborating on exciting web development projects and bringing creative ideas to life.
//             </p>
//             <div className="mt-4 text-sm text-emerald-200">
//               Local time: {formatTime(currentTime)} IST
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landing;











// import React, { useState, useEffect } from 'react';
// import { Code, Database, Globe, Zap, BookOpen, Trophy } from 'lucide-react';

// const Spline = ({ scene, className, ...props }) => {
//   const [loaded, setLoaded] = useState(false);
  
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'module';
//     script.src = 'https://unpkg.com/@splinetool/viewer@1.0.21/build/spline-viewer.js';
//     script.onload = () => setLoaded(true);
//     document.head.appendChild(script);
    
//     return () => {
//       if (document.head.contains(script)) {
//         document.head.removeChild(script);
//       }
//     };
//   }, []);

//   if (!loaded) {
//     return (
//       <div className={`${className} bg-gray-900/50 rounded-lg flex items-center justify-center`}>
//         <div className="text-white text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
//           <p className="text-sm text-gray-300">Loading 3D Scene...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <spline-viewer
//       url={scene}
//       className={className}
//       {...props}
//     />
//   );
// };

// const Landing = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
    
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const techStacks = [
//     { 
//       name: 'HTML', 
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 
//       color: 'bg-orange-500/20 hover:bg-orange-500/40',
//       url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
//     },
//     { 
//       name: 'CSS', 
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 
//       color: 'bg-blue-500/20 hover:bg-blue-500/40',
//       url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
//     },
//     { 
//       name: 'JavaScript', 
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
//       color: 'bg-yellow-500/20 hover:bg-yellow-500/40',
//       url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
//     },
//     { 
//       name: 'React', 
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
//       color: 'bg-cyan-500/20 hover:bg-cyan-500/40',
//       url: 'https://react.dev/'
//     },
//     { 
//       name: 'Node.js', 
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 
//       color: 'bg-green-500/20 hover:bg-green-500/40',
//       url: 'https://nodejs.org/en/docs/'
//     },
//     { 
//       name: 'TailwindCSS', 
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', 
//       color: 'bg-teal-500/20 hover:bg-teal-500/40',
//       url: 'https://tailwindcss.com/docs'
//     },
//     { 
//       name: 'MongoDB', 
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', 
//       color: 'bg-green-600/20 hover:bg-green-600/40',
//       url: 'https://www.mongodb.com/docs/'
//     },
//     { 
//       name: 'Express', 
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', 
//       color: 'bg-gray-700/20 hover:bg-gray-700/40',
//       url: 'https://expressjs.com/'
//     },
//   ];

//   const projects = [
//     {
//       name: 'Pokiverse',
//       description: 'A comprehensive Pokemon encyclopedia with detailed information, interactive features, and modern UI design.',
//       techStack: ['React', 'TypeScript', 'TailwindCSS', 'Pokemon API'],
//       url: 'YOUR_POKIVERSE_VERCEL_URL_HERE'
//     },
//     {
//       name: 'Dictionary App',
//       description: 'An elegant dictionary application with word definitions, pronunciations, and examples from multiple sources.',
//       techStack: ['React', 'JavaScript', 'CSS', 'Dictionary API'],
//       url: 'YOUR_DICTIONARY_APP_VERCEL_URL_HERE'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6 overflow-hidden relative">
//       {/* Background animated particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(50)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 2}s`,
//               animationDuration: `${2 + Math.random() * 2}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header */}
//         <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             About Me
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Passionate developer crafting digital experiences with modern technologies
//           </p>
//         </div>

//         {/* Bento Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          
//           {/* 3D Spline Scene */}
//           <div className={`lg:col-span-2 lg:row-span-2 bg-gradient-to-r from-slate-900/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-4 border border-slate-500/20 hover:border-slate-400/40 transition-all duration-300 hover:scale-[1.02] transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.1s' }}>
//             <div className="h-full min-h-[400px] relative overflow-hidden rounded-xl">
//               <Spline 
//                 scene="https://prod.spline.design/relaxing-room/scene.splinecode"
//                 className="w-full h-full"
//               />
//               <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
//                 <p className="text-white text-sm font-medium">Relaxing Room</p>
//                 <p className="text-gray-300 text-xs">Interactive 3D Scene</p>
//               </div>
//             </div>
//           </div>

//           {/* Featured Projects */}
//           <div className={`lg:col-span-2 bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.2s' }}>
//             <div className="flex items-center mb-6">
//               <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
//               <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
//             </div>
//             <div className="space-y-6">
//               {projects.map((project, index) => (
//                 <div key={project.name} className="border-b border-purple-500/20 last:border-b-0 pb-6 last:pb-0">
//                   <h3 className="text-2xl font-semibold text-purple-300 mb-3">{project.name}</h3>
//                   <p className="text-gray-300 text-base leading-relaxed mb-4">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.techStack.map((tech) => (
//                       <span key={tech} className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm font-medium border border-purple-500/20">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <a 
//                       href={project.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
//                     >
//                       View Project
//                     </a>
//                     <button className="border border-purple-400 text-purple-300 px-6 py-2 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-200">
//                       <Code className="w-4 h-4 inline mr-2" />
//                       View Code
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* College Box */}
//           <div className={`lg:col-span-2 bg-gradient-to-r from-blue-800/30 to-cyan-800/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.4s' }}>
//             <div className="flex items-center mb-6">
//               <BookOpen className="w-8 h-8 text-blue-400 mr-3" />
//               <h2 className="text-2xl font-bold text-white">Education</h2>
//             </div>
//             <div className="flex items-center space-x-6">
//               <div className="flex-shrink-0">
//                 <div className="w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
//                   <img 
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CpQV8rgD-tIUDa2cTrWf4DMe2MIK-MFprA&s" 
//                     alt="NIT Rourkela" 
//                     className="w-[300px] h-[300px] object-contain"
//                   />
//                 </div>
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-2xl font-semibold text-blue-300 mb-2">NIT Rourkela</h3>
//                 <p className="text-gray-300 text-base mb-2">National Institute of Technology</p>
//                 <p className="text-blue-400 font-medium text-lg">Computer Science & Engineering</p>
//                 <p className="text-gray-400 text-sm mt-2">2020 - 2024</p>
//                 <div className="border-t border-blue-500/20 pt-4 mt-4">
//                   <p className="text-gray-300 text-sm leading-relaxed">
//                     Gained comprehensive knowledge in software development, algorithms, 
//                     data structures, and modern web technologies. Actively participated 
//                     in coding competitions and technical projects.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Skills Overview */}
//           <div className={`bg-gradient-to-r from-green-800/30 to-teal-800/30 backdrop-blur-lg rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.6s' }}>
//             <div className="flex items-center mb-6">
//               <Zap className="w-8 h-8 text-green-400 mr-3" />
//               <h2 className="text-2xl font-bold text-white">Skills</h2>
//             </div>
//             <div className="space-y-4">
//               {[
//                 { skill: 'Frontend Development', level: 90 },
//                 { skill: 'Backend Development', level: 85 },
//                 { skill: 'Database Management', level: 80 },
//                 { skill: 'UI/UX Design', level: 75 },
//               ].map((item, i) => (
//                 <div key={item.skill} className="space-y-2">
//                   <div className="flex justify-between">
//                     <span className="text-green-300 font-medium">{item.skill}</span>
//                     <span className="text-green-400 text-sm">{item.level}%</span>
//                   </div>
//                   <div className="w-full bg-green-900/30 rounded-full h-2">
//                     <div 
//                       className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
//                       style={{ 
//                         width: isVisible ? `${item.level}%` : '0%',
//                         transitionDelay: `${0.8 + i * 0.2}s`
//                       }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Tech Stack Icons */}
//           <div className={`lg:col-span-2 bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.8s' }}>
//             <div className="flex items-center mb-6">
//               <Code className="w-8 h-8 text-indigo-400 mr-3" />
//               <h2 className="text-2xl font-bold text-white">Technologies</h2>
//             </div>
//             <div className="grid grid-cols-4 gap-4">
//               {techStacks.map((tech, index) => (
//                 <a
//                   key={tech.name}
//                   href={tech.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`${tech.color} rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 cursor-pointer group`}
//                   title={tech.name}
//                 >
//                   <div className="flex flex-col items-center text-center">
//                     <img 
//                       src={tech.icon} 
//                       alt={tech.name} 
//                       className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform duration-300"
//                     />
//                     <span className="text-white text-xs font-medium">{tech.name}</span>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className={`lg:col-span-1 bg-gradient-to-r from-pink-800/30 to-red-800/30 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '1.0s' }}>
//             <div className="flex items-center mb-6">
//               <Globe className="w-8 h-8 text-pink-400 mr-3" />
//               <h2 className="text-2xl font-bold text-white">Let's Connect</h2>
//             </div>
//             <div className="space-y-4">
//               <p className="text-gray-300">
//                 Always excited to collaborate on innovative projects and discuss new opportunities.
//               </p>
//               <div className="flex flex-col space-y-2">
//                 <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
//                   📧 developer@example.com
//                 </a>
//                 <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
//                   🐙 github.com/developer
//                 </a>
//                 <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
//                   💼 linkedin.com/in/developer
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mouse follower effect */}
//       <div 
//         className="fixed pointer-events-none z-50 w-4 h-4 bg-purple-500/30 rounded-full blur-sm"
//         style={{
//           left: mousePosition.x - 8,
//           top: mousePosition.y - 8,
//           transition: 'all 0.1s ease-out'
//         }}
//       />
//     </div>
//   );
// };

// export default Landing;





















// import React, { useState, useEffect } from 'react';
// import { Code, Database, Globe, Zap, BookOpen, Trophy } from 'lucide-react';

// const Spline = ({ scene, className, ...props }) => {
//   const [loaded, setLoaded] = useState(false);
  
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'module';
//     script.src = 'https://unpkg.com/@splinetool/viewer@1.0.21/build/spline-viewer.js';
//     script.onload = () => setLoaded(true);
//     document.head.appendChild(script);
    
//     return () => {
//       if (document.head.contains(script)) {
//         document.head.removeChild(script);
//       }
//     };
//   }, []);

//   if (!loaded) {
//     return (
//       <div className={`${className} bg-gray-900/50 rounded-lg flex items-center justify-center`}>
//         <div className="text-white text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
//           <p className="text-sm text-gray-300">Loading 3D Scene...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <spline-viewer
//       url={scene}
//       className={className}
//       {...props}
//     />
//   );
// };

// const Landing = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
    
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const techStacks = [
//     { 
//       name: 'HTML', 
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 
//       color: 'bg-orange-500/20 hover:bg-orange-500/40',
//       url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
//     },
//     { 
//       name: 'CSS', 
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 
//       color: 'bg-blue-500/20 hover:bg-blue-500/40',
//       url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
//     },
//     { 
//       name: 'JavaScript', 
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
//       color: 'bg-yellow-500/20 hover:bg-yellow-500/40',
//       url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
//     },
//     { 
//       name: 'React', 
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
//       color: 'bg-cyan-500/20 hover:bg-cyan-500/40',
//       url: 'https://react.dev/'
//     },
//     { 
//       name: 'Node.js', 
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 
//       color: 'bg-green-500/20 hover:bg-green-500/40',
//       url: 'https://nodejs.org/en/docs/'
//     },
//     { 
//       name: 'TailwindCSS', 
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', 
//       color: 'bg-teal-500/20 hover:bg-teal-500/40',
//       url: 'https://tailwindcss.com/docs'
//     },
//     { 
//       name: 'MongoDB', 
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', 
//       color: 'bg-green-600/20 hover:bg-green-600/40',
//       url: 'https://www.mongodb.com/docs/'
//     },
//     { 
//       name: 'Express', 
//       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', 
//       color: 'bg-gray-700/20 hover:bg-gray-700/40',
//       url: 'https://expressjs.com/'
//     },
//   ];

//   const projects = [
//     {
//       name: 'Pokiverse',
//       description: 'A comprehensive Pokemon encyclopedia with detailed information, interactive features, and modern UI design.',
//       techStack: ['React', 'TypeScript', 'TailwindCSS', 'Pokemon API'],
//       url: 'YOUR_POKIVERSE_VERCEL_URL_HERE'
//     },
//     {
//       name: 'Dictionary App',
//       description: 'An elegant dictionary application with word definitions, pronunciations, and examples from multiple sources.',
//       techStack: ['React', 'JavaScript', 'CSS', 'Dictionary API'],
//       url: 'YOUR_DICTIONARY_APP_VERCEL_URL_HERE'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-950 to-black p-6 overflow-hidden relative">

//       {/* Main Content */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header */}
//         <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             About Me
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Passionate developer crafting digital experiences with modern technologies
//           </p>
//         </div>

//         {/* Bento Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
//           {/* Featured Projects */}
//           <div className={`lg:col-span-2 bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.2s' }}>
//             <div className="flex items-center mb-4">
//               <Trophy className="w-6 h-6 text-yellow-400 mr-3" />
//               <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
//             </div>
//             <div className="space-y-4">
//               {projects.map((project, index) => (
//                 <div key={project.name} className="border-b border-purple-500/20 last:border-b-0 pb-4 last:pb-0">
//                   <h3 className="text-xl font-semibold text-purple-300 mb-2">{project.name}</h3>
//                   <p className="text-gray-300 text-sm leading-relaxed mb-3">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-3">
//                     {project.techStack.map((tech) => (
//                       <span key={tech} className="px-2 py-1 bg-purple-600/30 text-purple-200 rounded-full text-xs font-medium border border-purple-500/20">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <a 
//                       href={project.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 text-sm"
//                     >
//                       View Project
//                     </a>
//                     <button className="border border-purple-400 text-purple-300 px-4 py-2 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-200 text-sm">
//                       <Code className="w-3 h-3 inline mr-1" />
//                       View Code
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* College Box */}
//           <div className={`lg:col-span-4 lg:row-span-2 bg-gradient-to-r from-blue-800/30 to-cyan-800/30 backdrop-blur-lg rounded-2xl p-10 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.4s' }}>
//             <div className="flex items-center mb-8">
//               <BookOpen className="w-8 h-8 text-blue-400 mr-3" />
//               <h2 className="text-3xl font-bold text-white">Education</h2>
//             </div>
//             <div className="flex items-center justify-center space-x-12">
//               <div className="flex-shrink-0">
//                 <div className="w-40 h-40 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-2xl">
//                   <img 
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CpQV8rgD-tIUDa2cTrWf4DMe2MIK-MFprA&s" 
//                     alt="NIT Rourkela" 
//                     className="w-32 h-32 object-contain"
//                   />
//                 </div>
//               </div>
//               <div className="flex-1 text-center lg:text-left">
//                 <h3 className="text-4xl font-bold text-blue-300 mb-4">NIT Rourkela</h3>
//                 <p className="text-gray-300 text-xl mb-4">National Institute of Technology</p>
//                 <p className="text-blue-400 font-semibold text-2xl mb-4">Computer Science & Engineering</p>
//                 <p className="text-gray-400 text-lg mb-6">2020 - 2024</p>
//                 <div className="border-t border-blue-500/20 pt-6">
//                   <p className="text-gray-300 text-lg leading-relaxed">
//                     Gained comprehensive knowledge in software development, algorithms, 
//                     data structures, and modern web technologies. Actively participated 
//                     in coding competitions and technical projects. Developed strong 
//                     problem-solving skills and collaborated on various team projects.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Skills Overview */}
//           <div className={`bg-gradient-to-r from-green-800/30 to-teal-800/30 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.6s' }}>
//             <div className="flex items-center mb-4">
//               <Zap className="w-6 h-6 text-green-400 mr-3" />
//               <h2 className="text-xl font-bold text-white">Skills</h2>
//             </div>
//             <div className="space-y-3">
//               {[
//                 { skill: 'Frontend Development', level: 90 },
//                 { skill: 'Backend Development', level: 85 },
//                 { skill: 'Database Management', level: 80 },
//                 { skill: 'UI/UX Design', level: 75 },
//               ].map((item, i) => (
//                 <div key={item.skill} className="space-y-2">
//                   <div className="flex justify-between">
//                     <span className="text-green-300 font-medium text-sm">{item.skill}</span>
//                     <span className="text-green-400 text-xs">{item.level}%</span>
//                   </div>
//                   <div className="w-full bg-green-900/30 rounded-full h-2">
//                     <div 
//                       className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
//                       style={{ 
//                         width: isVisible ? `${item.level}%` : '0%',
//                         transitionDelay: `${0.8 + i * 0.2}s`
//                       }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Tech Stack Icons */}
//           <div className={`lg:col-span-2 bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.8s' }}>
//             <div className="flex items-center mb-6">
//               <Code className="w-8 h-8 text-indigo-400 mr-3" />
//               <h2 className="text-2xl font-bold text-white">Technologies</h2>
//             </div>
//             <div className="grid grid-cols-4 gap-4">
//               {techStacks.map((tech, index) => (
//                 <a
//                   key={tech.name}
//                   href={tech.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`${tech.color} rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 cursor-pointer group`}
//                   title={tech.name}
//                 >
//                   <div className="flex flex-col items-center text-center">
//                     <img 
//                       src={tech.icon} 
//                       alt={tech.name} 
//                       className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform duration-300"
//                     />
//                     <span className="text-white text-xs font-medium">{tech.name}</span>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className={`lg:col-span-1 bg-gradient-to-r from-pink-800/30 to-red-800/30 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '1.0s' }}>
//             <div className="flex items-center mb-6">
//               <Globe className="w-8 h-8 text-pink-400 mr-3" />
//               <h2 className="text-2xl font-bold text-white">Let's Connect</h2>
//             </div>
//             <div className="space-y-4">
//               <p className="text-gray-300">
//                 Always excited to collaborate on innovative projects and discuss new opportunities.
//               </p>
//               <div className="flex flex-col space-y-2">
//                 <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
//                   📧 developer@example.com
//                 </a>
//                 <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
//                   🐙 github.com/developer
//                 </a>
//                 <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
//                   💼 linkedin.com/in/developer
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mouse follower effect */}
//       <div 
//         className="fixed pointer-events-none z-50 w-4 h-4 bg-purple-500/30 rounded-full blur-sm"
//         style={{
//           left: mousePosition.x - 8,
//           top: mousePosition.y - 8,
//           transition: 'all 0.1s ease-out'
//         }}
//       />
//     </div>
//   );
// };

// export default Landing;














import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Zap, BookOpen, Trophy } from 'lucide-react';

const Spline = ({ scene, className, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.0.21/build/spline-viewer.js';
    script.onload = () => setLoaded(true);
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  if (!loaded) {
    return (
      <div className={`${className} bg-gray-900/50 rounded-lg flex items-center justify-center`}>
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p className="text-sm text-gray-300">Loading 3D Scene...</p>
        </div>
      </div>
    );
  }

  return (
    <spline-viewer
      url={scene}
      className={className}
      {...props}
    />
  );
};

const Landing = () => {
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
      color: 'bg-orange-500/20 hover:bg-orange-500/40',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    { 
      name: 'CSS', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 
      color: 'bg-blue-500/20 hover:bg-blue-500/40',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    { 
      name: 'JavaScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
      color: 'bg-yellow-500/20 hover:bg-yellow-500/40',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    { 
      name: 'React', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
      color: 'bg-cyan-500/20 hover:bg-cyan-500/40',
      url: 'https://react.dev/'
    },
    { 
      name: 'Node.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 
      color: 'bg-green-500/20 hover:bg-green-500/40',
      url: 'https://nodejs.org/en/docs/'
    },
    { 
      name: 'Python', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 
      color: 'bg-blue-600/20 hover:bg-blue-600/40',
      url: 'https://www.python.org/doc/'
    },
    { 
      name: 'TailwindCSS', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', 
      color: 'bg-teal-500/20 hover:bg-teal-500/40',
      url: 'https://tailwindcss.com/docs'
    },
    { 
      name: 'MongoDB', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', 
      color: 'bg-green-600/20 hover:bg-green-600/40',
      url: 'https://www.mongodb.com/docs/'
    },
    { 
      name: 'Express', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', 
      color: 'bg-gray-700/20 hover:bg-gray-700/40',
      url: 'https://expressjs.com/'
    },
    { 
      name: 'GSAP', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gsap/gsap-original.svg', 
      color: 'bg-green-400/20 hover:bg-green-400/40',
      url: 'https://greensock.com/gsap/'
    },
  ];

  const projects = [
    {
      name: 'Pokiverse',
      description: 'A comprehensive Pokemon encyclopedia with detailed information, interactive features, and modern UI design.',
      techStack: ['React', 'TypeScript', 'TailwindCSS', 'Pokemon API'],
      url: 'YOUR_POKIVERSE_VERCEL_URL_HERE'
    },
    {
      name: 'Dictionary App',
      description: 'An elegant dictionary application with word definitions, pronunciations, and examples from multiple sources.',
      techStack: ['React', 'JavaScript', 'CSS', 'Dictionary API'],
      url: 'YOUR_DICTIONARY_APP_VERCEL_URL_HERE'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-950 to-black p-6 overflow-hidden relative">

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {/* Featured Projects */}
          <div className={`lg:col-span-2 bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-4">
              <Trophy className="w-6 h-6 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
            </div>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={project.name} className="border-b border-purple-500/20 last:border-b-0 pb-4 last:pb-0">
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">{project.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-purple-600/30 text-purple-200 rounded-full text-xs font-medium border border-purple-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-3">
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 text-sm"
                    >
                      View Project
                    </a>
                    <button className="border border-purple-400 text-purple-300 px-4 py-2 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-200 text-sm">
                      <Code className="w-3 h-3 inline mr-1" />
                      View Code
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* College Box */}
          <div className={`lg:col-span-4 lg:row-span-2 bg-gradient-to-r from-blue-800/30 to-cyan-800/30 backdrop-blur-lg rounded-2xl p-10 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-8">
              <BookOpen className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
              <div className="flex-shrink-0 text-center">
                <div className="w-64 h-64 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-2xl">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CpQV8rgD-tIUDa2cTrWf4DMe2MIK-MFprA&s" 
                    alt="NIT Rourkela" 
                    className="w-64 h-64 object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-4xl font-bold text-blue-300 mb-4">NIT Rourkela</h3>
                <p className="text-gray-300 text-xl mb-4">National Institute of Technology</p>
                <p className="text-blue-400 font-semibold text-2xl mb-4">Computer Science & Engineering</p>
                <p className="text-gray-400 text-lg mb-6">2020 - 2024</p>
                <div className="border-t border-blue-500/20 pt-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Gained comprehensive knowledge in software development, algorithms, 
                    data structures, and modern web technologies. Actively participated 
                    in coding competitions and technical projects. Developed strong 
                    problem-solving skills and collaborated on various team projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          {/* Tech Stack Icons */}
          <div className={`lg:col-span-2 bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 text-indigo-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Technologies</h2>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {techStacks.map((tech, index) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${tech.color} rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 cursor-pointer group`}
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
          </div>

         
        </div>
      </div>

      {/* Mouse follower effect */}
      <div 
        className="fixed pointer-events-none z-50 w-4 h-4 bg-purple-500/30 rounded-full blur-sm"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: 'all 0.1s ease-out'
        }}
      />
    </div>
  );
};

export default Landing;