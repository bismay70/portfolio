import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Journey() {
  const journeyData = [
    {
      title: "National Institute Of Technology, Rourkela",
      details: ["B.Tech in Computer Science & Engineering", "(2024 - Present)"],
      grade: ["CGPA - 8.48"],
      image: "https://imgs.search.brave.com/cU7E3iUfIhl16OrufTXkljRL7B8scYUL81cyidgCZ7Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGltZXNub3du/ZXdzLmNvbS90aHVt/Yi9tc2lkLTkyNTM5/NzM1LHRodW1ic2l6/ZS04MjY1OTYsd2lk/dGgtMTI4MCxoZWln/aHQtNzIwLHJlc2l6/ZW1vZGUtNzUvOTI1/Mzk3MzUuanBn",
    },
    {
      title: "LR DAV Public School, Cuttack",
      details: ["12th Boards", "(2021 - 2023)"],
      grade: ["Grade: 96%"],
      image: "https://imgs.search.brave.com/2jy_jEPHJcM6-deGbB5cWxvskIK-QOMKEKhwhop-ytU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9scmRh/dmN0Yy5vcmcvRmls/ZS8zNDgwLy9TbGlk/ZXJfNmU2N2RhMjgt/ZTE4Zi00ZGVlLTgy/YjItY2NkM2JmMjhh/MTFlX3Jlc2l6ZS0x/NjU5OTQwMTM5MTEx/MTgwOTQ4N0xSLmpw/ZWc",
    },
    {
      title: "LR DAV Public School, Cuttack",
      details: ["10th Boards", "(2020 - 2021)"],
      grade: ["Grade: 98.2%"],
      image: "https://imgs.search.brave.com/2jy_jEPHJcM6-deGbB5cWxvskIK-QOMKEKhwhop-ytU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9scmRh/dmN0Yy5vcmcvRmls/ZS8zNDgwLy9TbGlk/ZXJfNmU2N2RhMjgt/ZTE4Zi00ZGVlLTgy/YjItY2NkM2JmMjhh/MTFlX3Jlc2l6ZS0x/NjU5OTQwMTM5MTEx/MTgwOTQ4N0xSLmpw/ZWc",
    },
  ];

  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const timelineRef = useRef(null);

  const cardVariants = (index) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      y: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        opacity: { duration: 0.8, ease: "easeInOut" },
      },
    },
  });

  return (
    <section id="journey" className="py-20 px-6 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-slate-900/80 min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@400;600;700&display=swap');
      `}</style>
      
      <motion.h2
        ref={headingRef}
        initial={{ opacity: 0, y: 80 }}
        animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="text-5xl md:text-6xl font-bold text-center mb-20 text-white"
        style={{ fontFamily: "'Shantell Sans', cursive" }}
      >
        My Journey
      </motion.h2>

      <div className="max-w-6xl mx-auto relative" ref={timelineRef}>
        
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 hidden md:block"></div>

        {journeyData.map((journey, index) => {
          const cardRef = useRef(null);
          const isCardInView = useInView(cardRef, {
            once: true,
            margin: "-30% 0px",
          });

          return (
            <div key={index} className="relative mb-16 md:mb-20">
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
               
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <motion.div
                    ref={cardRef}
                    className="bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-slate-900/80 backdrop-blur-sm rounded-xl shadow-2xl border border-blue-500/30 hover:border-blue-400/50 hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden"
                    variants={cardVariants(index)}
                    initial="hidden"
                    animate={isCardInView ? "visible" : "hidden"}
                  >
                  
                    <div className="w-full h-48 overflow-hidden">
                      <img 
                        src={journey.image} 
                        alt={journey.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    
                    <div className="p-6 md:p-8">
                      <h3 
                        className="text-2xl md:text-3xl font-bold text-blue-300 mb-3"
                        style={{ fontFamily: "'Shantell Sans', cursive" }}
                      >
                        {journey.title}
                      </h3>
                      {journey.details.map((line, i) => (
                        <p
                          className="text-gray-400 mb-1 text-base md:text-lg"
                          key={i}
                          style={{ fontFamily: "'Shantell Sans', cursive" }}
                        >
                          {line}
                        </p>
                      ))}
                      {journey.grade.map((line, i) => (
                        <p 
                          className="text-cyan-400 font-semibold mt-3 text-lg md:text-xl" 
                          key={i}
                          style={{ fontFamily: "'Shantell Sans', cursive" }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </div>

              
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-950 shadow-lg shadow-blue-500/50 z-10 animate-pulse"></div>

               
                <div className="hidden md:block w-1/2"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}