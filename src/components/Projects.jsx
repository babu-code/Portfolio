import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <section id="portfolio" className="py-20 bg-darker">
    <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text">My Projects</h2>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Project 1 --> */}
            <Project imageSrc={"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"}
             title={"Ecommerce Website "}
              stack={[{label:"React", bg:"bg-indigo-500"}, {label:"Flask", bg:"bg-green-900"}, {label:"Postgres", bg:"bg-indigo-900"}]}
             description={"A comprehensive e-commerce website complete with payment systems and analytics dashboard for online stores with real-time data visualization."}/>
            

            <Project imageSrc={"https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" }
            title ={"Finance Dashboard"}
            stack = {[{label: "JavaScript", bg:"bg-yellow-600"}, {label:"React", bg:"bg-indigo-500"}, {label:"Flask", bg:"bg-green-900"} ]}
            description = {"An AI-powered tool that generates marketing content based on user prompts."} 
            />

            <Project imageSrc={"https://images.unsplash.com/photo-1681398836231-d0b89bd571d6?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            title={"Jobs Website"}
            stack={[{label:"React", bg:"bg-indigo-500"}, {label:"Flask", bg:"bg-green-900"}]}
            description={"A Platform that allows employers to manage job vacancies "}
            />
            
            <Project imageSrc={"https://plus.unsplash.com/premium_photo-1728412897842-06f0fc4c2ec6?q=80&w=945&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            title = {"Recipe Sharing Platform"}
            stack = {[{label:"React", bg:"bg-indigo-500"}, {label:"Flask", bg:"bg-green-900"}]}
            description={"A recipe sharing platform that enables users to create,update, delete and share recipes"}
            />
            
            
      </section>
    </div>
</section>
  )
}

export default Projects