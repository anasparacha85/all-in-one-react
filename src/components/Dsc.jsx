import React from "react"
const Dsc = (probs) => {
    return (
      <div className="   pb-12 pt-12   ">
        <div className="border-l-2 border-gray-400  ">
        <h3 className="lg:text-xl font-bold text-gray-700 font-serif md:text-[8px] sm:text-[7px]">{probs.number}</h3>
        <h3 className="lg:text-xl font-semibold text-gray-800 mt-2 font-serif md:text-[8px] md:mt-0 sm:text-[7px]">{probs.title}</h3>
        <p className="text-gray-600 lg:mt-4 lg:text-lg font-serif md:text-[7px] md:mt-1 sm:text-[6px] sm:mt-[2px]">{probs.description}</p>
        </div>
       
      </div>
    )
  }
  
  export default Dsc
  
