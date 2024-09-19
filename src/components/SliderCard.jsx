import React from 'react'

const SliderCard = ({imageSrc,heading}) => {
  return (
    <div className="w-60 h-52 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden inline-block ml-3">
       <img
        className="w-full h-48 object-cover "
        src={imageSrc}
        alt="No Pic"
      />

      {/* Content Section */}
      <div className="p-4">
        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800">{heading}</h2>
        </div>
        </div>
  )
}

export default SliderCard
