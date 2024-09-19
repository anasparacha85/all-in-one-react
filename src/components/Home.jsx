import React,{useState,useEffect} from 'react'
import Head from './Head'
import './indexx.css'
import Footer from './Footer'
import Card from './Card'
import { Link, NavLink } from 'react-router-dom'
import useCategories from '../hooks/useCategories'
import { useLoaderData } from 'react-router-dom'
import AboutBack from '../../public/AboutBack.jpg'
import Dsc from './Dsc'
import imagecamera from '../../public/imagecamera.jpg'
import mancamera from '../../public/mancamera.jpg'
import SliderCard from './SliderCard'
import Shopees from './Shopees'

const Home = () => {
  const data = useLoaderData();
  console.log(data)
  const [bigdata, setbigdata] = useState([])
  useEffect(() => {
   let p=fetch('https://fakestoreapi.com/products')
   p.then((response)=>{
    return response.json()
   }).then((data)=>{
    setbigdata(data)
   })
  }, [])
  console.log(bigdata);
  
  
  return (
    <div className='home h-screen text-center'>
      <div className=" h-5/6 w-full text-center text-gray-600"
        style={{ backgroundImage: `url(${AboutBack})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: '90%' }}>
        <Head />
        <h4 className=' mt-16 text-xl text-gray-300' >Welcome to The Clothing Shop</h4>
        <h1 className=' Font-Nerko mt-3 text-4xl  font-extrabold text-white'>Wear your confidence like you wear your favorite outfit.</h1>
        <p className='text-gray-300 w-2/4 h-12 ml-80 pl-8 mt-14 text-lg'>Let the beauty of fresh blooms transform your space into a haven of color and fragrance. Explore exquisite arrangements that bring elegance and joy to every moment of your life</p>
        <button className='pt-4 pb-4 rounded-2xl mt-10 pl-6 pr-6 bg-gray-500 text-white hover:bg-gray-400 '><Link to='/Collections'>Shop Now</Link></button>
      </div>
      <div className="desc flex justify-between h-72 w-screen bg-gray-100  pl-20 pr-20">
        <Dsc number="01" title="Order Online" description="Share some details here. This is Flexible section where you can share anything you want." />
        <Dsc number="02" title="Free Shipping" description="Share some details here. This is Flexible section where you can share anything you want."/>
        <Dsc number="03" title="More Freshness" description="Share some details here. This is Flexible section where you can share anything you want."/>
        <Dsc number="04" title="Safe Payment" description="Share some details here. This is Flexible section where you can share anything you want."/>
      </div>
      <div className="Arrival  bg-gray-200 w-full pt-20 pb-8">
        <h4 className='text-xl text-gray-400 '>NEW ARRIVAL</h4>
        <h1 className='text-4xl Font-Nerko  mt-6 '>Discover the Latest Additions at Your Top Choice Shopping Centre</h1>
        <p className='text-lg mt-6'>Share some details here. This is Flexible section where you can share anything you want.</p>
        <br />
        <br />
        <div className="cards grid grid-cols-3 gap-5 w-full  ">
          {data.map((items) => {


            return <Card key={items.id} imageSrc={items.image} heading={items.title} subheading={items.description.slice(0, 76)} price={`$${items.price} dollars`} />

          })}



        </div>
      </div>
      
      <div className="flex h-[600px] bg-gray-800 p-6">
      {/* Left div with image */}
      <div className="w-2/5 h-[500px] mt-10 " >
        <img 
          src={imagecamera}
          alt="Placeholder" 
          className="w-full h-full object-cover rounded-lg"
          style={{borderRadius:'31% 69% 0% 100% / 100% 59% 41% 0%'}}
        />
      </div>
      
      {/* Right div with text */}
      <div className="w-1/2 flex flex-col justify-center pl-6">
        <h4 className="text-lg font-medium text-gray-400">SPECIAL OFFER</h4>
        <h2 className="text-4xl font-bold text-gray-100 mt-2 Font-Nerko">Your shopping Journey Begins Here: Get 20% Off Your First Order!</h2>
       <button className="mt-6 ml-72 p-2 w-28 h-14 pl-2 pr-2 pb-2 bg-gray-500 text-white  rounded-xl  hover:bg-gray-400">
       <Link to='/Collections'>shop Now</Link>
        </button>
      </div>
      </div>
<div className="Arrival  bg-gray-200 w-full pt-20 pb-8">
        <h4 className='text-xl text-gray-400 '>Our Stocks</h4>
        <h1 className='text-4xl Font-Nerko  mt-6 mb-2 '>Discover the Latest Additions at Your Top Choice Shopping Website</h1>
        <p className='text-lg mt-6 mb-7'>Share some details here. This is Flexible section where you can share anything you want.</p>
<marquee  direction="right">
<div className="cards   w-screen  ">
          {bigdata.map((items) => {


            return <SliderCard key={items.id} imageSrc={items.image} heading={items.title}  />

          })}
          </div>
</marquee>
</div>


<Shopees imagsrc={mancamera} paragraph="Explore Our Exquisite clothing Collections & Shop Now for the Perfect cloths" title="Call to Action"/>
      
<br /><br />
      <Footer />

    </div>
  )
}

export default Home

export const brandLoader = async () => {
  const response = await fetch("https://fakestoreapi.com/products/category/women's clothing")
  return response.json()
}
