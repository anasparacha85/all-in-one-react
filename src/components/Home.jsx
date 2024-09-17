import React from 'react'
import Head from './Head'
import './indexx.css'
import Footer from './Footer'
import Card from './Card'
import { Link, NavLink } from 'react-router-dom'
import useCategories from '../hooks/useCategories'
import { useLoaderData } from 'react-router-dom'
import AboutBack from '../../public/AboutBack.jpg'

const Home = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div className='home h-screen text-center'>
      <div className=" h-5/6 w-full text-center text-gray-600"
        style={{ backgroundImage: `url(${AboutBack})`, backgroundSize: 'cover', backgroundPosition: 'center' ,opacity:'90%'}}>
        <Head />
        <h4 className=' mt-16 text-xl text-gray-300' >Welcome to The Clothing Shop</h4>
        <h1 className=' Font-Nerko mt-3 text-4xl  font-extrabold text-white'>Wear your confidence like you wear your favorite outfit.</h1>
        <p className='text-gray-300 w-2/4 h-12 ml-80 pl-8 mt-14 text-lg'>Let the beauty of fresh blooms transform your space into a haven of color and fragrance. Explore exquisite arrangements that bring elegance and joy to every moment of your life</p>
        <button className='pt-4 pb-4 rounded-2xl mt-10 pl-6 pr-6 bg-gray-500 text-white hover:bg-gray-400 '><Link to='/Collections'>Shop Now</Link></button>
      </div>

      <div className="Arrival  bg-gray-200 w-full pt-20 pb-8">
        <h4 className='text-xl text-gray-400 '>NEW ARRIVAL</h4>
        <h1 className='text-4xl Font-Nerko  mt-6 '>Discover the Latest Additions at Your Top Choice Clothing Shop</h1>
        <p className='text-lg mt-6'>Share some details here. This is Flexible section where you can share anything you want.</p>
        <br />
        <br />
        <div className="cards grid grid-cols-3 gap-5 w-full  ">
          {data.map((items) => {


            return <Card key={items.id} imageSrc={items.image} heading={items.title} subheading={items.description.slice(0, 76)} price={`$${items.price} dollars`} />

          })}



        </div>
      </div>
      <br />

      <Footer />

    </div>
  )
}

export default Home

export const brandLoader = async () => {
  const response = await fetch("https://fakestoreapi.com/products/category/women's clothing")
  return response.json()
}
