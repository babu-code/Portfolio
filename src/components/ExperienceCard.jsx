import React from 'react'
import { FaMapMarker } from 'react-icons/fa'

const ExperienceCard = ({position, from, to, location, responsibilities}) => {
  return (
    <div className="timeline-item relative pl-10 pb-10 border-l-2 border-primary">
        <div className="absolute w-4 h-4 rounded-full bg-primary left-[-8px] top-0"></div>
        <div className="card p-6 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">{position}</h3>
                <span className="text-primary">{from} - {to}</span>
            </div>
            <div className='inline flex flex-row'>
                <FaMapMarker className='mr-2 inline' />
                <h4 className="text-gray-400 mb-4">{location}</h4>
            </div>
            
            <ul className="text-gray-300 space-y-2 list-disc pl-5">
                {responsibilities.map((responsibility)=>(
                    <li>{responsibility}</li>
                ))}
                                
            </ul>
        </div>
    </div>
  )
}

export default ExperienceCard