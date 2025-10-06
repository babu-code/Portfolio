import React from 'react'
import profile from '../assets/images/all white.png'
import { FaMapMarker, FaEnvelope, FaPhone} from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="py-20 bg-darker">
    <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
                <div className="avatar w-64 h-64 rounded-full overflow-hidden relative floating" >
                    <img src={profile} 
                         alt="Antony Kiplimo" 
                         className="w-full h-full object-cover" />
                    <div className="absolute inset-0 border-4 border-transparent rounded-full"></div>
                </div>
            </div>
            
            <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Innovative Full Stack Developer</h3>
                <p className="text-gray-300 mb-6">
                    I'm Antony Kiplimo, a passionate Full Stack Developer with expertise in building modern web applications. 
                    With a strong foundation in both frontend and backend technologies, I create seamless digital experiences 
                    that are performant, scalable, and user-friendly.
                </p>
                <p className="text-gray-300 mb-6">
                    My journey in web development began 5 years ago, and since then I've worked with various technologies 
                    across the stack. I specialize in JavaScript ecosystems (React, Node.js) and Python frameworks (Flask), 
                    with a keen eye for clean code and efficient architecture.
                </p>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                        <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                        <FaMapMarker color='' className='text-indigo-500 mr-2'/>
                        <span className="text-gray-300 italic">Nairobi, Kenya</span>
                    </div>
                    <div className="flex items-center">
                        <i className="fas fa-envelope text-primary mr-2"></i>
                        <FaEnvelope className='mr-2 text-indigo-500'/>
                        <span className="text-gray-300 italic">tonnieblair12@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                        <i className="fas fa-phone text-primary mr-2"></i>
                        <FaPhone className='mr-2 text-indigo-500' rotate={160} />
                        <span className="text-gray-300 italic">+254 716 241 697</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default About