import React, { useState } from 'react'
import Head from './Head'
import './indexx.css'
import Footer from './Footer'
import Card from './Card'
import {Link,NavLink} from'react-router-dom'
import Homeback from '../../public/Homeback.jpg'


import useCategories from '../hooks/useCategories'

const Collections = () => {
   
    const menbrands=useCategories("men's clothing")
  console.log(menbrands);

  
  
  const womenbrand=useCategories("women's clothing")
  console.log((womenbrand));
  
    
  const jwellarybrands=useCategories("jewelery")
  console.log(jwellarybrands);
  
    
  const electronicsbrands=useCategories("electronics")
    
    
  return (
    <div className='Collection h-screen text-center'>
      <div className=" h-5/6 w-full text-center text-gray-600 " style={{backgroundImage:`url(${Homeback})`,backgroundSize:'cover',backgroundPosition:'center',opacity:'90%'}} >
        <Head/>
        <h4 className=' mt-16 lg:text-xl text-gray-300 md:text-lg sm:text-[10px]' >Our Collections</h4>
        <h1 className='Font-Nerko mt-3 lg:text-4xl  font-extrabold text-white md:text-2xl sm:text-[15px]'>A great collection is more than just a gathering of garments; it<sup>'</sup>s a reflection of the dreams and desires of its creator.</h1>
        <p className='text-gray-300 w-2/4 h-12 lg:ml-80 pl-8 lg:mt-14 lg:text-lg md:text-sm md:ml-32 sm:hidden'>Let the beauty of fresh blooms transform your space into a haven of color and fragrance. Explore exquisite arrangements that bring elegance and joy to every moment of your life</p>
        
      </div>

<div className="Shirts  bg-gray-200 w-full pt-20 pb-8"> 
    <h4 className='lg:text-xl text-gray-400 md:text-[10px] sm:text-[8px]'>Men's Clothing</h4>
    <h1 className='lg:text-4xl Font-Nerko  mt-6 md:text-[28px] sm:text-[18px] '>Discover the Laest Edition of Men's Clothing at Your Top Choice Clothing Shop</h1>
   
    <br />
    <br />
    
    <div className="cards grid grid-cols-3 gap-5 w-full md:pl-4 md:pr-3  sm:grid-cols-2">
        {menbrands.map((items)=>{
            return <Card key={items.id} imageSrc={items.image} heading={items.title} subheading={items.description.slice(0,76)} price={`$${items.price} dollars`}/>
        })}
        
    </div>
</div>

<div className="Jeans  bg-gray-200 w-full pt-20 pb-8"> 
    <h4 className='lg:text-xl text-gray-400 md:text-[10px] sm:text-[8px] '>Womens Collection</h4>
    <h1 className='lg:text-4xl Font-Nerko  mt-6 md:text-[28px] sm:text-[18px] '>Discover the Laest Edition of Jeans at Your Top Choice Clothing Shop</h1>

    <br />
    <br />
    <div className="cards grid grid-cols-3 gap-5 w-full md:pl-4 md:pr-3  sm:grid-cols-2 ">
        {womenbrand.map((items)=>{
            return   <Card key={items.id}  imageSrc={items.image} heading={items.title.slice(0,25)} subheading={items.description.slice(0,76)} price={`$${items.price} dollars`}/>
        })}
        

    </div>
</div>

<div className="Kurta  bg-gray-200 w-full pt-20 pb-8"> 
    <h4 className='lg:text-xl text-gray-400 md:text-[10px] sm:text-[8px] '>Jwellery Collection</h4>
    <h1 className='lg:text-4xl Font-Nerko  mt-6 md:text-[28px] sm:text-[18px]'>Discover the Laest Edition of Jwelery at Your Top Choice Clothing Shop</h1>
  
    <br />
    <br />
    <div className="cards grid grid-cols-3 gap-5 w-full md:pl-4 md:pr-3  sm:grid-cols-2  ">
    {jwellarybrands.map((items)=>{
            return   <Card key={items.id}  imageSrc={items.image} heading={items.title.slice(0,20)} subheading={items.description.slice(0,76)} price={`$${items.price} dollars`}/>
        })}
    </div>
</div>

<div className="Electronics  bg-gray-200 w-full pt-20 pb-8"> 
    <h4 className='lg:text-xl text-gray-400 md:text-[10px] sm:text-[8px]'>Electronics Collection</h4>
    <h1 className='lg:text-4xl Font-Nerko  mt-6 md:text-[28px] sm:text-[18px] '>Discover the Laest Edition of Electronics at Your Top Choice Clothing Shop</h1>
    
    <br />
    <br />
    <div className="cards grid grid-cols-3 gap-5 w-full md:pl-4 md:pr-3  sm:grid-cols-2  ">
    {electronicsbrands.map((items)=>{
            return   <Card key={items.id}  imageSrc={items.image} heading={items.title.slice(0,20)} subheading={items.description.slice(0,76)} price={`$${items.price} dollars`}/>
        })}
    </div>
</div>

<br />
<Footer/>

      
    </div>
  )
}

export default Collections
