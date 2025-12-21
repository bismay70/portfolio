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
    <section className='h-screen bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-slate-900/80 flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden'>
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
                className='text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6'
                style={{ fontFamily: 'Shantell Sans, cursive' }}>
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
               <span className='text-yellow-500 font-semibold'>Full Stack Software Developer</span> with strong problem-solving skills, specializing in creating exceptional digital experiences. With expertise in both <span className='text-yellow-200'>front-end</span> and <span className='text-yellow-200'>back-end development</span>, I work with diverse technologies including <span className='text-yellow-200'>Machine Learning</span> and traditional web applications. I thrive on solving challenging projects that drive innovation and deliver high-quality results.
                 </motion.p>
        </div>

                <Spline className='absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0'
                scene="https://prod.spline.design/NCsA-ikyQQqAMQfx/scene.splinecode" />

    </section>
  )
}

export default Hero