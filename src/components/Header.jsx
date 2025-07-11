import React from 'react'
import { motion ,AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'


function Header() {

const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
   <header className='absolute w-full z-50 transition-all duration-300'>
        <div className='container mx:auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20'>
            <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                type: 'spring',
                stiffness: 100, 
                damping: 25,
                delay: 0.5,
                duration: 1.3,

            }}
            className='flex items-center'>
                <div className='h-15 w-15 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-blue-700 font-bold text-xl mr-3'>
                    B
                </div>
                <span className='text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent'>
                    Bsamay
                </span>
            </motion.div>

            <nav className='lg:flex hidden space-x-8 '>
                {['Home', 'About', 'Portfolio','Projects','Education'].map((item, index) => (
                    <motion.a 
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}  
                    transition={{
                        type: 'spring',
                        stiffness: 100, 
                        damping: 20,
                        delay:0.7 + index * 0.2,
                    }}
                    className='relative text-gray-800 dark:text-gray-200 hover:blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 group'
                    href={`#${item.toLowerCase()}`}>
                        {item}
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group hover:w-full transition-all duration-300'></span>
                    </motion.a>
                ))}
            </nav>

                <div className='md:flex hidden items-center space-x-4'>
                    <motion.a
                    initial={{ opacity: 0, scale:0.5 }}
                    animate={{ opacity: 1, scale: 1 }}  
                    transition={{
                        duration: 0.8,
                        delay: 1.3,}}
                     className='text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'
                    href="https://github.com/bismay70">
                        <FiGithub className='h-5 w-5'/>
                    </motion.a>
                    <motion.a
                    initial={{ opacity: 0, scale:0.5 }}
                    animate={{ opacity: 1, scale: 1 }}  
                    transition={{
                        duration: 0.8,
                        delay: 1.3,}}
                     className='text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'
                    href="https://www.linkedin.com/in/bismay-samal-134b75312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <FiLinkedin className='h-5 w-5'/>
                    </motion.a>

                             
                <motion.button
                onClick={openContactForm}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}  
                transition={{
                    type: 'spring',
                    stiffness: 100, 
                    damping: 15,
                    delay: 1.6,
                    duration: 0.8,
                }}
                className='ml-4 px-8 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 bg-blue-600 text-blue font-bold hover:from-blue-700 hover:to-blue-700 hover:text-white transition-all duration-500 '>
                    Contact
                </motion.button>
                </div>
               

                <div className="md:hidden flex items-center">
                    <motion.button 
                        whileTap={{ scale: 0.7 }}
                        onClick={toggleMenu}
                       className="text-gray-300">
                        { isOpen ? <FiX className='h-6 w-6'/> : <FiMenu className='h-6 w-6 '/> }
                    </motion.button>
                </div>
            </div>

             <motion.div
                initial={{ opacity: 0,height:0 }}
                animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
                transition={{duration: 0.5}}
              className="md:hidden overflow-hodden bg-white dark:bg-gray-800 shadow-lg px-4 py-5 space-y-5">
             <nav className="flex flex-col space-y-3">
                {["Home", "About", "Portfolio","Projects", "Education"].map((item) => (
                  <a onClick={toggleMenu} className="text-gray-300 font-medium py-2"
                    href={`#${item.toLowerCase()}`}
                    key={item}>
                    {item}
                    </a>
                ))}
             </nav>

                <div className='pt-4 border-t border-gray-200'>
                    <div className='flex space-x-5'>
                        <a href="https://github.com/bismay70">
                            <FiGithub className='h-6 w-6 text-gray-300 '/>
                        </a>
                        <a href="https://www.linkedin.com/in/bismay-samal-134b75312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <FiLinkedin className='h-6 w-6 text-gray-300 '/>
                        </a>
                    </div>
                    <button
                    onClick={()=>{
                        toggleMenu()
                        openContactForm()
                    }}
                     className='mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 font-bold'>Contact</button>
                </div>

             </motion.div>

            <AnimatePresence>
            {contactFormOpen && ( 
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}        
                exit={{ opacity: 0 }}
                className='fixed inset-0 bg-black/50 background-blur-sm p-4 flex items-center justify-center z-50' >

                <motion.div 
                    initial={{ y: 30, opacity: 0,scale:0.8 }}
                    animate={{ y: 0, opacity: 1 , scale: 1 }}  
                    exit={{ y: 30, opacity: 0, scale: 0.8 }}
                    className='bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-md w-full'>
                        <div className='flex items-center justify-between mb-4'>
                            <h1 className='text-2xl font-bold text-gray-300'>
                                Get in Touch
                                </h1>
                                <button onClick={closeContactForm}>
                                    <FiX className='h-6 w-6 text-gray-300 font-extrabold' />
                                </button>
                        </div>
                        <form className='space-y-4'>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium text-gray-300 mb-1'>Name</label>
                                 <input 
                            type='text' 
                            placeholder='Your Name' 
                            id='name'
                            className='w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-600 ' 
                            />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium text-gray-300 mb-1'>Email</label>
                          <input 
                            type='email' 
                            placeholder='Your Email' 
                            id='email'
                            className='w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-600 ' 
                            />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-sm font-medium text-gray-300 mb-1'>Message</label>
                             <textarea 
                            rows='4'    
                           
                            placeholder='How can I help you?' 
                            id='message'
                            className='w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-600 ' 
                            />
                          
                            </div>
                           
                             <motion.button 
                             whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                             type='submit' className='w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold hover:from-blue-700 hover:to-blue-700 transition-all duration-300'>
                                Send Message
                             </motion.button>
                            
                        </form>
                    </motion.div>
                </motion.div>
            )}
            </AnimatePresence>

   </header>
  )
}

export default Header