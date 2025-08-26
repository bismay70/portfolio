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
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
        
      
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
         
          <div className="lg:col-span-2 space-y-6 text-center md:text-left">
            <img 
              src="/bismay.jpg" 
              alt="Bismay Samal" 
              className="w-32 h-32 rounded-full mx-auto md:mx-0 border-4 border-blue-500 shadow-lg object-cover"
            />
            <p className="text-blue-200 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Frontend Developer passionate about creating beautiful, functional web experiences that make a difference.
            </p>
         
            <div className="flex justify-center md:justify-start gap-5 mt-4">
              <a 
                href="https://github.com/bismay70" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-transform transform hover:scale-125"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/bismay-samal-134b75312"
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-transform transform hover:scale-125"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>

        
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-blue-400 mb-4">Get In Touch</h4>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-center gap-3 hover:text-white transition">
                <Mail size={18} className="text-blue-400" />
                <span>developer.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition">
                <MapPin size={18} className="text-blue-400" />
                <span>Cuttack, Odisha, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-blue-400" />
                <span>IST {formatTime(currentTime)}</span>
              </div>
            </div>
          </div>

         
          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-4">Quick Links</h4>
            <nav className="space-y-3">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-blue-200 hover:text-white hover:underline transition-all"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

      
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-8"></div>

      
        <div className={`flex flex-col md:flex-row justify-between items-center gap-4 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-2 text-blue-300 text-sm">
            <span>© 2025 Bismay. Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>and lots of pizzas</span>
          </div>
          <div className="flex items-center gap-3">
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
        className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg transition-all hover:scale-110 group"
      >
        <ArrowUp size={20} className="text-white group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;
