import React, { useState, useEffect } from 'react';
import { Heart, ArrowUp, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: true, 
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
    
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900/40 to-blue-950/60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,78,216,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(30,58,138,0.1),transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
       
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="lg:col-span-2 space-y-6">
            <div>
             <img 
             src="/bismay.jpg" 
             alt="Bismay Samal" 
             className="w-25 h-25 rounded-full object-cover border-4 border-blue-500 shadow-lg"
             />

              <p className="text-blue-200 text-lg leading-relaxed max-w-md">
                Frontend Developer passionate about creating beautiful, functional web experiences that make a difference.
              </p>
            </div>
            
          <div className="flex gap-4">
  <a 
    href="https://github.com/bismay70" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group relative p-3 bg-blue-900/50 rounded-full border border-blue-700/50 hover:border-blue-500 transition-all duration-300 hover:scale-110"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-6 h-6 text-blue-300 group-hover:text-white transition-colors"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.67.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03A9.36 9.36 0 0112 6.8c.85.01 1.7.12 2.5.34 1.9-1.3 2.73-1.03 2.73-1.03.55 1.4.2 2.44.1 2.7.65.73 1.03 1.66 1.03 2.79 0 3.98-2.34 4.85-4.58 5.1.36.32.69.95.69 1.91 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-blue-900 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
      GitHub
    </div>
  </a>

  <a 
    href="https://www.linkedin.com/in/bismay-samal-134b75312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group relative p-3 bg-blue-900/50 rounded-full border border-blue-700/50 hover:border-blue-500 transition-all duration-300 hover:scale-110"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="w-6 h-6 text-blue-300 group-hover:text-blue-400 transition-colors"
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-blue-900 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
      LinkedIn
    </div>
  </a>
</div>

          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-blue-400 mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors">
                <Mail size={16} className="text-blue-400" />
                <span className="text-sm">developer.com</span>
              </div>
              <div className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-sm">Cuttack, Odisha, India</span>
              </div>
              <div className="flex items-center gap-3 text-blue-200">
                <Clock size={16} className="text-blue-400" />
                <span className="text-sm">IST {formatTime(currentTime)}</span>
              </div>
            </div>
          </div>

     
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-blue-400 mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-blue-200 hover:text-white hover:translate-x-2 transition-all duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

   
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-8"></div>

     
        <div className={`flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2 text-blue-300 text-sm">
            <span>© 2025 Bismay. Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>and lots of pizzas</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-blue-300 text-sm">Available for freelance work</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">Online</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      >
        <ArrowUp size={20} className="text-white group-hover:animate-bounce" />
      </button>

      <div className="absolute bottom-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </footer>
  );
};

export default Footer;