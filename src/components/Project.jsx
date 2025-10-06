import React from 'react'
import ProjectTech from './ProjectTech'

const Project = ({imageSrc, title, description ,stack}) => {
  return (
<div className="project-card card p-6 rounded-lg cursor-pointer" data-project="1">
    <div className="h-48 mb-4 rounded-lg overflow-hidden">
        <img src= {imageSrc}
             alt="E-commerce Dashboard" 
             className="w-full h-full object-cover" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
        {stack.map((tech)=>(
            <ProjectTech bg={tech.bg} label={tech.label} />
        ))}
        
    </div>
</div>

  )
}

export default Project