 import React from 'react'
 
 const Language = ({Icon, color, label}) => {
   return (
    <div className="skill-item card p-4 rounded-lg flex flex-col items-center justify-center">
        <i className="fab fa-html5 text-4xl text-orange-500 mb-2"></i>
        {<Icon className={`text-4xl ${color} mb-2`} />}
        <span className="text-sm">{label}</span>
    </div>
   )
 }
 
 export default Language