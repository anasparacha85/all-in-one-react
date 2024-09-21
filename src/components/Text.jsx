import React from 'react'

const Text = ({title,dsc}) => {
  return (
    <div className='lg:h-[120px] lg:w-[200px] md:h-[80px] md:w-[140px] sm:h-60px w-[120px] text-center text-gray-200'>
      <h1 className='lg:text-4xl Font-Nerko md:text-[35px] sm:text-[20px]'>{title}</h1>
      <p className='lg:text-xl md:text-[15px] sm:text-[8px] '>{dsc}</p>
    </div>
  )
}

export default Text
