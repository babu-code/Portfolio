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
    <div className="container mx-auto px-6 py-4" >
        <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold gradient-text">My Portfolio</Link>
            <div className={`absolute bg-black top-16 left-0 w-full bg-dark/95 flex flex-col items-center space-y-6 py-6 transition-all duration-300 ease-in-out transform 
            ${ showMenu
      ? "translate-y-0 opacity-100"
      : "-translate-y-4 opacity-0 pointer-events-none"
  } md:static md:flex md:flex-row md:space-y-0 md:space-x-8 md:bg-transparent`} >
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