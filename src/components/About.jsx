import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
  return (
    <motion.div
    initial={{opacity: 0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    viewport={{once: true}}
    id='about'
    className='py-20 bg-dark-200'>
        <div className='container mx-auto px-6 max-w-5xl'>
            {/* Heading */}
            <h2 className = 'text-3xl font-bold text-center mb-4'>About
                <span className = 'text-purple'> Me</span>
            </h2>
            <p className = 'text-gray-400 text-center max-w-2xl mx-auto mb-10'>Get to know more about my background, technical journey, and core expertise.</p>

            {/* Centered Content Wrapper */}
            <div className='flex flex-col items-center w-full'>

                {/* Text & Cards Content */}
                <motion.div 
                initial={{opacity: 0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 0.9, ease: 'easeOut'}}
                viewport={{once: false, amount: 0.2}}
                className='w-full max-w-4xl'>

                    <div className='rounded-2xl p-0 md:p-8 text-center md:text-left'>
                        <h3 className='text-2xl font-semibold mb-6 text-center md:text-left'>My Journey</h3>
                        <p className = 'text-lg text-gray-300 mb-6 max-w-3xl mx-auto md:mx-0'>I'm a Computer Science graduate from the University of Victoria with a growing passion for data, 
                        analytics, and business intelligence. My journey into the data space began during my first co-op as a Project Coordinator at BC Pension Corporation, where I had the opportunity
                         to work on data-driven projects and gain exposure to reporting and business intelligence in a corporate environment.</p>
                        <p className = 'text-lg text-gray-300 mb-6 max-w-3xl mx-auto md:mx-0'>Since then, I've continued to explore the many facets of the data ecosystem, expanding my
                         skills and gaining experience in areas such as data analytics, business systems analysis, and data engineering. 
                         I enjoy transforming data into meaningful insights that help organizations make informed decisions, and I'm always eager to learn new 
                         technologies and techniques that can drive business value.</p>
                        <p className = 'text-lg text-gray-300 mb-12 max-w-3xl mx-auto md:mx-0'>Outside of work, you'll usually find me reading, staying active at the gym, practicing yoga, 
                         going for leisurely walks, or experimenting with new recipes in the kitchen!</p>
                        

                        <h3 className='text-2xl font-semibold mb-6 text-center md:text-left'>My Core Expertise</h3>
                        {/* Cards Grid - Remapped for 3-column layouts on larger screens */}
                        <div className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left'>
                            {
                                aboutInfo.map((data, index)=>(
                                    <div key = {index} className='bg-dark-300
                                    rounded-2xl p-6 transition-transform 
                                    duration-300 hover:-translate-y-2
                                    cursor-pointer border border-white/5'>
                                        <div className='text-purple text-4xl mb-4'>
                                            <data.icon />
                                        </div>

                                        <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                        <p className='text-gray-400 text-sm md:text-base leading-relaxed font-medium'>{data.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </motion.div>

            </div>

        </div>

    </motion.div>
  )
}

export default About