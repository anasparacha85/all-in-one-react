import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Footer = () => {
    return (
      <footer className="bg-gray-300 text-white py-6 w-screen" >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-2xl font-bold mb-2 text-gray-400 Font-Nerko">The All In One</h1>
            <nav className="mb-4 flex justify-between w-full">
              <ul >
                <li> <NavLink to='/' className={(isActive)=>`hover:text-gray-600 ${isActive?"text-gray-600":"text-gray-500"}`}>Home</NavLink></li>
                <li> <NavLink to='/About' className={(isActive)=>`hover:text-gray-600 ${isActive?"text-gray-600":"text-gray-500"}`}>About</NavLink></li>
               
              </ul>
            
            <div className="text-sm mb-4">
              <p className='text-gray-500'>Email: <Link to="mailto:contact@mywebsite.com" className="hover:underline text-gray-500">contact@mywebsite.com</Link></p>
              <p className='text-gray-500'>Phone: (123) 456-7890</p>
            </div>
            </nav>
          </div>
          <div className="text-sm text-center">
            <p className='text-gray-500'>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;