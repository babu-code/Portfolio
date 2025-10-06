import React from 'react'
import ExperienceCard from './ExperienceCard'

const Experience = ({position, from, to, location, responsibilities}) => {
  return (
    <section id="experience" className="py-20 bg-darker">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text">Work Experience</h2>
            
            <div className="max-w-3xl mx-auto">
                <ExperienceCard position={"Senior Full Stack Developer"}
                from={"July 2025"}
                to ={"Present"}
                location= {"NovaNet Technologies, Nairobi"}
                responsibilities={["Led a team of 3 developers to build enterprise web applications",
                "Architected and implemented microservices for scalable backend systems", 
                "Optimized application performance, reducing load times by 40%"]}
                />

                <ExperienceCard 
                position={"Full Stack Web Developer"}
                from ={"Aug 2022"}
                to = {"Aug 2024"}
                location = {"Upwork, Freelance"}
                responsibilities={["Developed and maintained 10+ client websites and web applications",
                "Implemented RESTful APIs for mobile app integrations",
                "Redesigned UI/UX for better user engagement and conversion",
                "Automated deployment processes using CI/CD pipelines"]}
                />

                <ExperienceCard 
                position={"Web Developer Intern"}
                from={"May 2022"}
                to={"Aug 2022"}
                location={"Uasin-Gishu County IT Department"}
                responsibilities={["Built responsive websites using HTML, CSS and JavaScript",
                "Assisted in backend development with PHP and MySQL",
                "Fixed bugs and implemented new features for existing projects",
                "Participated in team meetings and requirement gathering",
                ]}
                />

            </div>
        </div>
    </section>
  )
}

export default Experience