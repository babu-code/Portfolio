import React from 'react'
import { Link } from 'react-router-dom'

const FooterQuickLinks = () => {
  return (
    <div>
    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
    <ul className="space-y-2 text-gray-300">
        <li><Link to="/" className="hover:text-earth-300 transition-colors">Home</Link></li>
        <li><Link to="/About" className="hover:text-earth-300 transition-colors">About Me</Link></li>
        <li><Link to="/skills" className="hover:text-earth-300 transition-colors">Skills</Link></li>
        <li><a to="/portfolio" className="hover:text-earth-300 transition-colors">Portfolio</a></li>
        <li><a to="/contact" className="hover:text-earth-300 transition-colors">Contact</a></li>
    </ul>
</div>

  )
}

export default FooterQuickLinks