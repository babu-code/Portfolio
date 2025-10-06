import React from 'react'
import HeroBtn from './HeroBtn'

const Hero = ({title="Antony Kiplimo", subtitle = "Full Stack Developer", content
= "Building digital experiences that bridge innovation and functionality with cutting-edge web technologies."}) => {
  return (
        
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden ">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10 text-center">
            <h1 id= "title "  data-text= "Antony Kiplimo" className="glitch text-5xl md:text-7xl font-bold mb-4">{title}</h1>
            <div className="text-2xl md:text-4xl font-light mb-8">
                <span className="typewriter inline-block">{subtitle}</span>
            </div>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-12">
                {content}
            </p>
            <div className="flex justify-center space-x-6">
                <HeroBtn text= {"View Projects"} bg={"white"} />
                <HeroBtn text={"Contact Me"} bg={"white"} />
            </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-white">
                <i className="fas fa-chevron-down text-2xl"></i>
            </a>
        </div>
    </section>
  )
}

export default Hero