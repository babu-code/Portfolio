import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {
    const linkClass = ({IsActive})=>{
        {IsActive ? "" : "nav-link text-white"}
    }

    const [showMenu,setShowMenu] = useState(false)

    const showMenuFunction = (e)=>{
        e.preventDefault();

    }
  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg">
    <div className="container mx-auto px-1 py-1" >
        <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold gradient-text md:whitespace-nowrap">My Portfolio</Link>
            <div className={`
                    absolute top-16 left-0 w-full flex flex-col items-center space-y-6 py-6 transition-all duration-300 ease-in-out
                    
                    // Mobile Styles: Hide/Show based on state
                    ${ showMenu
                        ? "translate-y-0 opacity-100 visible"
                        : "-translate-y-4 opacity-0 invisible"
                    } 
                    
                    // Desktop Styles: Override mobile hiding and force display/layout
                    md:static md:translate-y-0 md:opacity-100 md:visible md:flex md:flex-row md:justify-end md:space-y-0 md:space-x-8 md:bg-transparent md:bg-opacity-0 md:pointer-events-auto
                    
                    bg-black md:bg-transparent // Apply bg for mobile menu only
                    
                `}>
                <NavLink to="/" className="nav-link text-white">Home</NavLink>
                <NavLink to="/about" className="nav-link text-white">About</NavLink>
                <NavLink to="/skills" className="nav-link text-white">Skills</NavLink>
                <NavLink to="/portfolio" className="nav-link text-white">Portfolio</NavLink>
                <NavLink to="/experience" className="nav-link text-white">Experience</NavLink>
                <NavLink to="/contact" className="nav-link text-white">Contact</NavLink>
            </div>
            <button className="md:hidden text-white focus:outline-none"
            onClick={()=>setShowMenu((prev)=>!prev)}>
                <i className="fas fa-bars text-xl"></i>
               {showMenu ? <FaTimes className='text-xl'/>: <FaBars className='text-xl' />}
            </button>
        </div>
    </div>
</nav>
  )
}
    
export default Navbar