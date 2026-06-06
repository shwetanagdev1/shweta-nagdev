import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <motion.div
    initial={{opacity: 0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    viewport={{once: true}}
    id='home'
    className='min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-dark-100 via-dark-300 to-dark-100'
    >
        <div className='container mx-auto px-6 flex flex-col md:flex-row 
        items-center justify-between'>
            {/* left side content */}
            <div className='md:w-1/2 mb-10 md:mb-0'>
                <h1 className= 'text-4xl md:text-6xl font-bold mb-4'>
                    Hi, I'm <span className='text-purple'>Shweta Nagdev</span>
                </h1>
                <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>
                    Business Systems and Data Analyst
                </h2>
                <p className= 'text-lg text-gray-300 mb-8'>An aspiring data professional driven by a passion for business intelligence, exploring modern technologies to 
                build analytical solutions, optimize workflows, and grow within the data ecosystem.</p>

                <div className='flex space-x-4'>
                    <a href="#projects" className='px-6 py-3 bg-purple 
                    rounded-lg font-medium hover:bg-purple-700 transition
                    duration-300'>View Work</a>
                    <a href="#contact" className='px-6 py-3 border border-purple 
                    rounded-lg font-medium hover:bg-purple/20 transition
                    decoration-purple-300'>Contact Me</a>
                </div>
            </div>
            {/* right side image */}
            {/* 
            <div className = 'md:w-1/2 flex justify-center'>
                <div className = 'relative w-64 h-64 md:w-80 md:h-80'>
                    <div className='absolute inset-0 rounded-full
                    bg-linear-to-r from-purple to-pink opacity-70'>
                        <motion.img
                        animate={{y:[0, -20, 0]}}
                        transition={{
                            duration: 4,
                            repeat: Infinity, 
                            repeatType: "loop",
                            ease: "easeInOut"
                        }}
                        className='relative rounded-full w-64 h-64 md:w-80
                        md:h-80 object-cover z-10 animate-float'
                        src={assets.profilePicture} alt= "Profile" />
                    </div>

                </div>

            </div> */}

            {/* right side image */}
            <div className='md:w-1/2 flex justify-center items-center'>
                <div className='relative w-64 h-64 md:w-80 md:h-80'>
                    
                    {/* Decorative background glow accent */}
                    <div className='absolute -inset-2 rounded-2xl bg-linear-to-r from-purple to-pink opacity-40 blur-md' />
                    
                    {/* Static Square Image */}
                    <img
                        className='w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white/10 relative z-10'
                        src={assets.profilePicture} 
                        alt="Profile" 
                    />
                    
                </div>
            </div>

        </div>


    </motion.div>
  )
}

export default Hero