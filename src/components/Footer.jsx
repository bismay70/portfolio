import React, { useState, useEffect } from 'react';
import { Heart, ArrowUp, Mail, MapPin, Clock, X } from 'lucide-react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    profile: false,
    contact: false,
    form: false,
    links: false
  });

  useEffect(() => {
    setIsVisible(true);
    
   
    setTimeout(() => setVisibleSections(prev => ({ ...prev, profile: true })), 100);
    setTimeout(() => setVisibleSections(prev => ({ ...prev, contact: true })), 1100);
    setTimeout(() => setVisibleSections(prev => ({ ...prev, form: true })), 2100);
    setTimeout(() => setVisibleSections(prev => ({ ...prev, links: true })), 3100);
    
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

  const closeContactForm = () => {
    setShowContact(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted');
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white" style={{ fontFamily: "'Shantell Sans', cursive" }}>
      <link href="https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
       
          <div className={`space-y-6 text-center md:text-left transition-all duration-1000 ${visibleSections.profile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img 
              src="/bismay.jpg" 
              alt="Bismay Samal" 
              className="w-32 h-32 rounded-full mx-auto md:mx-0 border-4 border-blue-500 shadow-lg object-cover"
            />
            <p className="text-blue-200 text-base leading-relaxed max-w-md mx-auto md:mx-0">
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

         
          <div className={`space-y-4 transition-all duration-1000 ${visibleSections.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h4 className="text-xl font-semibold text-blue-400 mb-4">Contact Info</h4>
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

         
          <div className={`transition-all duration-1000 ${visibleSections.form ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {!showContact ? (
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Get in Touch</h4>
                <p className="text-blue-200 text-sm mb-4">
                  Although I'm always open for any new opportunities. Have a question or want to say hi? 
                </p>
                <button 
                  onClick={() => setShowContact(true)}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg text-white font-bold hover:from-blue-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </button>
              </div>
            ) : (
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/30">
                <div className='flex items-center justify-between mb-4'>
                  <h4 className='text-xl font-bold text-gray-300'>Get in Touch</h4>
                  <button onClick={closeContactForm}>
                    <X className='h-6 w-6 text-gray-300 font-extrabold hover:text-white transition' />
                  </button>
                </div>
                <div className='space-y-4'>
                  <div>
                    <label htmlFor="name" className='block text-sm font-medium text-gray-300 mb-1'>Name</label>
                    <input 
                      type='text' 
                      placeholder='Your Name' 
                      id='name'
                      className='w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-600 text-white outline-none' 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className='block text-sm font-medium text-gray-300 mb-1'>Email</label>
                    <input 
                      type='email' 
                      placeholder='Your Email' 
                      id='email'
                      className='w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-600 text-white outline-none' 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className='block text-sm font-medium text-gray-300 mb-1'>Message</label>
                    <textarea 
                      rows={4}    
                      placeholder='How can I help you?' 
                      id='message'
                      className='w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-600 text-white outline-none resize-none' 
                    />
                  </div>
                  <button 
                    onClick={handleSubmit}
                    className='w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold hover:from-blue-700 hover:to-blue-700 transition-all duration-300 hover:scale-105'
                  >
                    Send Message
                  </button>
                </div>
              </div>
            )}
          </div>

        
          <div className={`transition-all duration-1000 ${visibleSections.links ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h4 className="text-xl font-semibold text-blue-400 mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <a 
                href="#about"
                className="flex items-center gap-2 text-blue-200 hover:text-white hover:underline transition-all group"
              >
                <span className="group-hover:animate-bounce">😊</span>
                <span>About</span>
              </a>
              <a 
                href="#projects"
                className="flex items-center gap-2 text-blue-200 hover:text-white hover:underline transition-all group"
              >
                <span className="group-hover:animate-bounce">💻</span>
                <span>Projects</span>
              </a>
              <a 
                href="#skills"
                className="flex items-center gap-2 text-blue-200 hover:text-white hover:underline transition-all group"
              >
                <span className="group-hover:animate-bounce">🤔</span>
                <span>Skills</span>
              </a>
              <a 
                href="#contact"
                className="flex items-center gap-2 text-blue-200 hover:text-white hover:underline transition-all group"
              >
                <span className="group-hover:animate-bounce">📧</span>
                <span>Contact</span>
              </a>
            </nav>
          </div>
        </div>

       
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-8"></div>

     
        <div className={`flex flex-col md:flex-row justify-between items-center gap-4 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-2 text-blue-300 text-sm">
            <span>© 2025 Bismay. Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
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
        className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg transition-all hover:scale-110 group z-50"
      >
        <ArrowUp size={20} className="text-white group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;