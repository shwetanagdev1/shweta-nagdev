import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { FaDribbble, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_rwmfm6q', 
            'template_iz8maan', 
            formRef.current, 
            'dS-3Y3UmX5m9BpiPM'
        )
        .then((result) => {
            alert('Message sent successfully!');
            formRef.current.reset(); // Clears form fields after success
        }, (error) => {
            alert('Something went wrong. Please try again.');
        });
    };

  return (
    <motion.div
    initial={{opacity: 0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 1, ease: 'easeOut'}}
    viewport={{once: false, amount: 0.2}}
    id='contact'
    className='py-20 bg-dark-200'>

        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>
                Get In 
                <span className='text-purple'> Touch</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk!</p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                {/* Contact Form */}
                <div>
                    <form ref={formRef} onSubmit={sendEmail} className='space-y-6'>
                        <div>
                            <label htmlFor='name' className='block text-gray-300 mb-2'>Your Name</label>
                            <input 
                            name="user_name"
                            required 
                            className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4
                            py-3 outline-none'
                            type="text" />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-gray-300 mb-2'>Email Address</label>
                            <input 
                            name="user_email"
                            required 
                            className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4
                            py-3 outline-none'
                            type="email" />
                        </div>
                        <div>
                            <label htmlFor='message' className='block text-gray-300 mb-2'>Your Message</label>
                            <textarea 
                            name="message"
                            required 
                            className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4
                            py-3 outline-none'
                            type="text" />
                        </div>
                        <button type='submit' className='w-full px-6 py-3
                        bg-purple rounded-lg font-medium hover:bg-purple-700
                        transition duration-300 cursor-pointer'>
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className='space-y-8'>
                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Location</h3>
                            <p className='text-gray-400'>Victoria, BC</p>
                        </div>

                    </div>

                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Email</h3>
                            <p className='text-gray-400'>
                                <a href='mailto:nagdevshweta28@gmail.com'
                                    className='hover:text-purple transition duration-300'         
                                >
                                    nagdevshweta28@gmail.com

                                </a>
                            </p>
                        </div>

                    </div>

                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaPhone />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                            <p className='text-gray-400'>+1 (250) 884-4518</p>
                        </div>

                    </div>

                    <div className='pt-4'>
                        <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                        <div className='flex space-x-4'>
                            <a href='https://github.com/shwetanagdev1'
                            target= '_blank'
                            rel='noopener noreferrer'
                            className='w-12 h-12 rounded-full
                            bg-dark-300 flex items-center justify-center
                            text-white hover:bg-purple hover:text-white
                            transition duration-300'>
                                <FaGithub />
                            </a>

                            <a href='https://www.linkedin.com/in/shwetanagdev2801' 
                            target= '_blank'
                            rel='noopener noreferrer'
                            className='w-12 h-12 rounded-full
                            bg-dark-300 flex items-center justify-center
                            text-white hover:bg-blue-500 hover:text-white
                            transition duration-300'>
                                <FaLinkedin />
                            </a>


                        </div>

                    </div>

                </div>




            </div>
        </div>








    </motion.div>
  )
}

export default Contact