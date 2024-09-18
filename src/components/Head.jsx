import React , { useState } from 'react';
import { NavLink ,Link} from 'react-router-dom';
import ConfirmCart from './ConfirmCart';



const Head = ({ onCartButtonClick,count }) => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className="relative">
      <nav className='flex items-center justify-between h-16 px-4 md:px-8 text-white'>
        {/* Logo */}
        <div className="logo">
          <h1 className='text-2xl md:text-3xl Font-Nerko font-bold'>The All In One</h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className='md:hidden flex items-center'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`md:flex md:items-center md:gap-5 md:static absolute top-16 left-0 w-full bg-gray-900 md:bg-transparent transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 justify-center`}>
          <li><NavLink to="/" className={({ isActive }) => `block py-2 px-4 ${isActive ? "text-gray-400" : "text-white"} hover:text-gray-400 transition-all`}>Home</NavLink></li>
          <li><NavLink to="/About" className={({ isActive }) => `block py-2 px-4 ${isActive ? "text-gray-400" : "text-white"} hover:text-gray-400 transition-all`}>About</NavLink></li>
          <li><NavLink to="/Collections" className={({ isActive }) => `block py-2 px-4 ${isActive ? "text-gray-400" : "text-white"} hover:text-gray-400 transition-all`}>Collections</NavLink></li>
          <li><NavLink to="/Contact" className={({ isActive }) => `block py-2 px-4 ${isActive ? "text-gray-400" : "text-white"} hover:text-gray-400 transition-all`}>Contact</NavLink></li>
        </ul>

        {/* Cart Button */}
        <div className='flex items-center'>
       <button onClick={onCartButtonClick} className='mr-4 cursor-pointer'
      >
        {count}
       <NavLink to="/AddToCart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"} className={`hover:text-gray-300`}>
              <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            </NavLink>
          </button>
        
        </div>
      </nav>
    </div>
  );
};

export default Head;
