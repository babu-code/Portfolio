import React from 'react'

const HeroBtn = ({text, bg}) => {
  return (
    <a href="#contact" className={`px-8 py-3 rounded-full border-2 border-primary bg-${bg} text-white font-bold hover:bg-black hover:bg-opacity-10 transition-all duration-300`}>
                    {text}
    </a>
  )
}

export default HeroBtn