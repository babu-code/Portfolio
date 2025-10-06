import React from 'react'
import { FadeLoader } from 'react-spinners'
import Skill from './Skill'
import Languages from './Languages'

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark">
    <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text">Technical Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Skill props={{title:"Frontend", listings:["HTML", "CSS3", "Javascript (ES6+)", "React.js", "Tailwind CSS"]}}  />
            <Skill props={{title:"Backend", listings:["Python (Flask)","RESTful APIs", "Database (Postgres)", "Microservices"]}} />
            <Skill props={{title:"DevOps Skills", listings:["Git & GitHub", "CI/CD Pipelines"]}} />
            <Skill props = {{title:"Other", listings:["Agile Methodologies", "UI/UX Principles", "Project Management", "Problem Solving"]}} />
        </div>
        <Languages />
    </div>
</section>
  )
}

export default Skills