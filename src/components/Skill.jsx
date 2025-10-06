import React from 'react'
import SkillListing from './SkillListing'

const Skill = ({props}) => {
  return (
    <div className="skill-item card p-6 rounded-lg">
    <div className="text-center">
        <i className="fas fa-code text-4xl mb-4 gradient-text"></i>
        <h3 className="text-xl font-bold mb-2">{props.title}</h3>
        <ul className="text-gray-300 space-y-1">
            { props.listings.map((listing, index)=>(
               <SkillListing title={listing} key={index}/> 
            ))}
            
           
            
        </ul>
    </div>
</div>
  )
}

export default Skill