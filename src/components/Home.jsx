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
        <h4 className=' mt-16 lg:text-xl text-gray-300 md:text-lg sm:text-[12px]' >Welcome to The Clothing Shop</h4>
        <h1 className=' Font-Nerko mt-3 lg:text-4xl  font-extrabold text-white md:text-2xl sm:text-xl'>Wear your confidence like you wear your favorite outfit.</h1>
        <p className='text-gray-300 w-2/4 h-12 lg:ml-80 pl-8 lg:mt-14 lg:text-lg md:text-sm md:ml-32 sm:hidden'>Let the beauty of fresh blooms transform your space into a haven of color and fragrance. Explore exquisite arrangements that bring elegance and joy to every moment of your life</p>
        <button className='lg:pt-4 lg:pb-4 rounded-2xl lg:mt-10 lg:pl-6 lg:pr-6 bg-gray-500 text-white hover:bg-gray-400 md:pl-3 md:pr-3 md:mt-10  md:pt-2 md:pb-2 md:text-sm md:hover:bg-gray-400 sm:text-[10px] sm:pt-2 sm:pb-2 sm:pl-3 sm:pr-3 sm:mt-4'><Link to='/Collections'>Shop Now</Link></button>
      </div>
      <div className="desc flex justify-between lg:h-72 w-screen bg-gray-100  pl-20 pr-20 md:h-40 sm:h-36">
        <Dsc number="01" title="Order Online" description="Share some details here. This is Flexible section where you can share anything you want." />
        <Dsc number="02" title="Free Shipping" description="Share some details here. This is Flexible section where you can share anything you want."/>
        <Dsc number="03" title="More Freshness" description="Share some details here. This is Flexible section where you can share anything you want."/>
        <Dsc number="04" title="Safe Payment" description="Share some details here. This is Flexible section where you can share anything you want."/>
      </div>
      <div className="Arrival  bg-gray-200 w-full pt-20 pb-8 ">
        <h4 className='lg:text-xl text-gray-400 md:text-[10px] sm:text-[9px]'>NEW ARRIVAL</h4>
        <h1 className='lg:text-4xl Font-Nerko  mt-6 md:text-[28px] sm:text-[20px] '>Discover the Latest Additions at Your Top Choice Shopping Centre</h1>
        <p className='lg:text-lg mt-6 md:text-[9px] sm:text-[7px]'>Share some details here. This is Flexible section where you can share anything you want.</p>
        <br />
        <br />
        <div className="cards grid grid-cols-3 gap-5 w-full md:pl-4 md:pr-3  sm:grid-cols-2">
          {data.map((items) => {


            return <Card key={items.id} imageSrc={items.image} heading={items.title} subheading={items.description.slice(0, 76)} price={`$${items.price} dollars`} />

          })}



        </div>
      </div>
      
      <div className="flex lg:h-[600px] bg-gray-800 p-6 md:h-[400px] sm:h-[340px]" >
      {/* Left div with image */}
      <div className="lg:w-2/5 lg:h-[500px] mt-10  md:w-[200px] md:h-[300px] sm:h-[260px] sm:w-[150px]" >
        <img 
          src={imagecamera}
          alt="Placeholder" 
          className="w-full h-full object-cover rounded-lg"
          style={{borderRadius:'31% 69% 0% 100% / 100% 59% 41% 0%'}}
        />
      </div>
      
      {/* Right div with text */}
      <div className="lg:w-1/2 flex flex-col justify-center pl-6 md:w-[400px] sm:w-[340px]">
        <h4 className="lg:text-lg font-medium text-gray-400 md:text-[8px] sm:text-[6px]">SPECIAL OFFER</h4>
        <h2 className="lg:text-4xl font-bold text-gray-100 mt-2 Font-Nerko md:text-[24px] sm:text-[18px]">Your shopping Journey Begins Here: Get 20% Off Your First Order!</h2>
       <button className="mt-6 lg:ml-72 lg:pt-2 lg:w-28 lg:text-[14px] lg:pl-2 lg:pr-2 lg:pb-2 bg-gray-500 text-white  rounded-xl  hover:bg-gray-400 md:ml-32 md:w-20 md:p-1 md:text-[8px] sm:text-[8px] sm:w-16 sm:p-1 sm:ml-[87px] ">
       <Link to='/Collections'>shop Now</Link>
        </button>
      </div>
      </div>
<div className="Stocks  bg-gray-200 w-full pt-20 pb-8">
        <h4 className='lg:text-xl text-gray-400 md-text-lg sm:text-sm'>Our Stocks</h4>
        <h1 className='lg:text-4xl Font-Nerko  mt-6 mb-2 md:text-[30px] sm:text-[24px]'>Discover the Latest Additions at Your Top Choice Shopping Website</h1>
        <p className='lg:text-lg mt-6 mb-7 md:hidden sm:hidden'>Share some details here. This is Flexible section where you can share anything you want.</p>
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
