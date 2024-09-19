import React from 'react'
import Head from './Head'
import aboutbackground from '../../public/aboutbackground.jpg'
import { Link } from 'react-router-dom'
import Shopees from './Shopees'
import mancamera from '../../public/mancamera.jpg'
const About = () => {
  return (
    <div>
       <div className='home h-screen text-center'>
      <div className=" h-5/6 w-full text-center text-gray-600"
        style={{ backgroundImage: `url(${aboutbackground})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: '90%' }}>
        <Head />
        <h4 className=' mt-16 text-xl text-gray-300' >About Us</h4>
        <h1 className=' Font-Nerko mt-3 text-4xl  font-extrabold text-white'>Embarking on the Path to Our Dreams.</h1>
        <p className='text-gray-300 w-2/4 h-12 ml-80 pl-8 mt-14 text-lg'>Share some details here. This is Flexible section where you can share anything you want. It could be details or some information.</p>
       
      </div>
    </div>
    <br />
    <Shopees imagsrc={mancamera} paragraph="Explore Our Exquisite clothing Collections & Shop Now for the Perfect cloths" title="Call to Action"/>
      
    </div>
  )
}

export default About
