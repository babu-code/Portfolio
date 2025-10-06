import React from 'react'

const ProjectTech = ({bg, label}) => {
  return (
    <span className={`px-2 py-1 ${bg} bg-opacity-50 text-blue-300 text-xs rounded`}>{label}</span>
  )
}

export default ProjectTech