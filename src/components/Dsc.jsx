import React from "react"
const Dsc = (probs) => {
    return (
      <div className="   pb-12 pt-12   ">
        <div className="border-l-2 border-gray-400  ">
        <h3 className="text-xl font-bold text-gray-700 font-serif ">{probs.number}</h3>
        <h3 className="text-xl font-semibold text-gray-800 mt-2 font-serif ">{probs.title}</h3>
        <p className="text-gray-600 mt-4 font-serif ">{probs.description}</p>
        </div>
       
      </div>
    )
  }
  
  export default Dsc
  
