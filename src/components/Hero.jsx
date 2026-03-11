import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Bismay Samal'
  
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 150)
    
    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className='h-screen bg-[url("/bg.png")] bg-cover bg-center bg-fixed flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden' style={{ fontFamily: "'Young Serif', serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Young+Serif&display=swap" rel="stylesheet" />
        
        <div className='z-40 xl:mb-0 mb-[20%]'>
            <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
                duration: 1.5, 
                delay: 0.5,
                type: 'spring',
                stiffness: 40, 
                damping: 25,
                }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6'>
                Hello, I'm <br/> 
                <span className='text-green-700'>{displayedText}</span>
                <span className='animate-pulse'>|</span>
             </motion.h1>

             <motion.p 
              initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
                duration: 1.5, 
                delay: 2,
                type: 'spring',
                stiffness: 40, 
                damping: 25,
                }}
             className='text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl leading-relaxed'>
               <span className='text-yellow-500 font-semibold'>Innovative Full-Stack Developer</span> with a strong foundation in <span className='text-yellow-200'>Data Structures, Algorithms, and Competitive Programming</span>. Experienced in both front-end and back-end development, with expertise in <span className='text-yellow-200'>Machine Learning, Deep Learning, and AI applications</span>. Passionate about emerging technologies like <span className='text-yellow-200'>Web3 and blockchain</span>, creating scalable, user-centric, and high-impact digital solutions.
             </motion.p>
        </div>

                <Spline className='absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0'
                scene="https://prod.spline.design/NCsA-ikyQQqAMQfx/scene.splinecode" />

    </section>
  )
}

export default Hero