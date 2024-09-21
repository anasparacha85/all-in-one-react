import React from 'react'

const Text = ({title,dsc}) => {
  return (
    <div className='h-[120px] w-[200px] text-center text-gray-200'>
      <h1 className='text-4xl Font-Nerko'>{title}</h1>
      <p className='text-xl '>{dsc}</p>
    </div>
  )
}

export default Text
