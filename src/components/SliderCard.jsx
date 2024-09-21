import React from 'react'

const SliderCard = ({imageSrc}) => {
  return (
    <div className="lg:w-60 lg:h-52 md:w-40 md:h-36 sm:w-32 sm:h-28 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden inline-block ml-3">
       <img
        className="w-full h-48 object-cover "
        src={imageSrc}
        alt="No Pic"
      />

      {/* Content Section */}
     
        </div>
  )
}

export default SliderCard
