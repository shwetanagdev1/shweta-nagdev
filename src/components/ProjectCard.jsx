import React from 'react'

const ProjectCard = ({title, description, image, tech, githubUrl}) => {
  return (
    <div className= 'bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
        <img src={image} alt={title} className='w-full h-60 object-cover' />
        <div className='p-6'>
            <h3 className='text-xl font-semibold mb-2'>{title}</h3>
            <p className='text-gray-400 mb-4'>{description}</p>
            <div className='flex flex-wrap gap-2 mb-4'>
                {tech.map((item, index)=>(
                    <span key={index} className='px-3 py-1 bg-dark-400
                    rounded-full text-sm'>
                        {item}
                    </span>
                    
                ))}
            </div>

            <div className='flex mt-4'>
                {githubUrl && githubUrl !== '#' ? (
                    /* Active Link for Public Projects */
                    <a 
                        href={githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className='w-full text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'
                    >
                        View GitHub Repository
                    </a>
                ) : (
                    /* Disabled Button for Confidential Corporate Projects */
                    <span className='w-full text-center px-4 py-2 bg-dark-400 text-gray-500 rounded-lg font-medium border border-dark-500 select-none'>
                        Internal Corporate Project
                    </span>
                )}
            </div>

        </div>

        
    </div>
  )
}

export default ProjectCard