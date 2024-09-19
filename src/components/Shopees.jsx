import React from 'react'
import { Link } from 'react-router-dom'

const Shopees = ({imagsrc,title,paragraph}) => {
  return (
    <div className="flex h-[600px] bg-gray-800 p-6">
    {/* Left div with image */}
    <div className="w-2/5 h-[500px] mt-10 " >
      <img 
        src={imagsrc}
        alt="Placeholder" 
        className="w-full h-full object-cover rounded-lg"
        style={{borderRadius:' 0% 100% 0% 100% / 100% 100% 0% 0%', mixBlendMode:'color-dodge'}}
      />
    </div>
    
    {/* Right div with text */}
    <div className="w-1/2 flex flex-col justify-center pl-6">
      <h4 className="text-lg font-medium text-gray-400">{title}</h4>
      <h2 className="text-4xl font-bold text-gray-100 mt-2 Font-Nerko">{paragraph}</h2>
     <button className="mt-6 ml-72 p-2 w-28 h-14 pl-2 pr-2 pb-2 bg-gray-500 text-white  rounded-xl  hover:bg-gray-400">
     <Link to='/Collections'>shop Now</Link>
      </button>
    </div>
    </div>
  )
}

export default Shopees
