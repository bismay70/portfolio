import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className='h-screen bg-gradient-to-b from-blue-600 to-black flex xl:flex-row flex-col-reverse items-center items-center justify-between lg:px-24 px-10 relative overflow-hidden'>
        <div className='z-40 xl:mb-0 mb-[20%]'>
            <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
                duration: 1.5, 
                delay: 1.5,
                type: 'spring',
                stiffness: 40, 
                damping: 25,
                }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold  z-10 mb-6'>
                Hello, I'm <br/> Bismay Samal
                
             </motion.h1>

             <motion.p 
              initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
                duration: 1.5, 
                delay: 1.8,
                type: 'spring',
                stiffness: 40, 
                damping: 25,
                }}
             className='text-xl md:text-2xl lg:text-3xl text-blue-200 max-w-2xl '>
               I'm an aspiring Frontend Engineer and B.Tech student, graduating in 2028, currently exploring the dynamic world of full-stack web development.Creating websites  that to create new experiencestruly make a difference
                 </motion.p>
        </div>

                <Spline className='absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0'
                scene="https://prod.spline.design/NCsA-ikyQQqAMQfx/scene.splinecode" />



    </section>
  )
}

export default Hero