import React from 'react'
import Head from './Head'
import Footer from './Footer'
import Collections from './Collections'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import bigbackk from '../../public/bigbackk.jpg'


const Contact = () => {
    const {register,formState:{errors,isSubmitting},setError,handleSubmit}=useForm()
    const onSubmit=(data)=>{
console.log(data)
    }
  return (
    <div >
     <div className='Contact h-screen '>
      <div className=" lg:h-5/6 w-screen text-center text-gray-600  sm:h-[350px]" style={{backgroundImage:`url(${bigbackk})`,backgroundSize:'cover',backgroundPositionY:'center'}} >
        <Head/>
        <h4 className='  mt-16 lg:text-xl text-gray-300 md:text-lg sm:text-[10px]' >Contact Us</h4>
        <h1 className=' Font-Nerko mt-3 lg:text-4xl  font-extrabold text-white md:text-2xl sm:text-[15px]'>Get in Touch with Our Experts Team</h1>
        <p className='text-gray-300 lg:w-2/4 lg:h-12 lg:ml-80 pl-8 lg:mt-14 lg:text-lg lg:block md:block sm:block sm:text-[8px] sm:w-[250px] sm:ml-7 sm:mt-5 md:text-sm md:ml-36 md:w-[400px] md:mt-8'>Share some details here. This is Flexible section where you can share anything you want. It could be details or some information.</p>
        <button className='g:pt-4 lg:pb-4 rounded-2xl lg:mt-10 lg:pl-6 lg:pr-6 bg-gray-500 text-white hover:bg-gray-400 md:pl-3 md:pr-3 md:mt-10  md:pt-2 md:pb-2 md:text-sm md:hover:bg-gray-400 sm:text-[10px] sm:pt-2 sm:pb-2 sm:pl-3 sm:pr-3 sm:mt-4 '><Link to='/Collections'>Shop Now</Link></button>
      </div>
        <div className="contact w-screen lg:flex lg:justify-between mt-8 sm:grid sm:grid-cols-1 sm:justify-center" >
        <div className="left lg:w-2/5 sm:w-full">
<h1 className='text-black Font-Nerko lg:text-5xl ml-10 sm:text-3xl '>Get In Touch With Us</h1>
<br />

<p className='text-gray-500 lg:text-lg ml-10'>Share some details here. This is Flexible section where you can share anything you want. It could be details or some information.</p>
<br />
<h4 className='text-black lg:text-lg font-bold ml-10 sm:text-[11px]'>Address</h4>
<br />
<p className='text-gray-500 lg:text-lg ml-10 sm:text-[11px]'>A-536 block I North Naziamabd Karachi</p>

<hr />
<br />
<div className='flex justify-between w-full'>
    <div className="phone"><h4 className='text-black lg:text-lg font-bold ml-10 '>Phone Number</h4>
    <p className='text-gray-500 lg:text-lg ml-10 sm:text-[11px]'>+923212167055</p></div>
    <div className="Email pb-20">
    <h4 className='ext-black lg:text-lg font-bold ml-10 sm:text-[11px]'>Email:</h4>
    <p className='text-gray-500 lg:text-lg ml-10 sm:text-[11px]'>amiranas761@gmail.com</p>
    </div>
    <br />
    <br />
    <hr />

</div>

        </div>
        <div className="right  lg:w-2/5  mr-5  sm:w-full">
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <h4 className='lg:text-lg Font-bold mb-3 sm:text-[11px]  sm:ml-3 lg:ml-0 '>Name <sup className='text-red-800'>*</sup></h4>
              <div className="name flex justify-between mb-4">
                <div className="first grid grid-cols-1 ml-3">
                <input  type="text" className='h-10 lg:w-64 sm:w-32 rounded-sm border-b-2  hover:border-gray-600 ease-in-out duration-75  border-solid' {...register("FirstName",{required:{value:true,message:'Required Field'},minLength:{value:1,message:'atleast 1 characters'},maxLength:{value:16,message:'Not more than 16 characters'}})} />
                <label htmlFor="First" className='text-gray-400 lg:text-lg sm:text-[11px]'>First</label>
                {errors.FirstName&& <span className='text-red-600'>{errors.FirstName.message}</span>}
                </div>
                <div className="last grid grid-cols-1 ml-3">
                <input type="text"className='h-10 lg:w-64 sm:w-32 rounded-sm border-b-2 hover:border-gray-600 ease-in-out duration-75 border-solid' {...register("LastName",{required:{value:true,message:'Required Field' },minLength:{value:1,message:'alteast 1 character'},maxLength:{value:16,message:'Not More than 16 charaters'}})}/>
                <label htmlFor="last" className='text-gray-400 lg:text-lg sm:text-[11px] '>Last</label>
                {errors.LastName&& <span className='text-red-600'>{errors.LastName.message}</span>}
                </div>
                <br />
                </div>
                <h4 className='lg:text-lg Font-bold mb-3 sm:text-[11px]  sm:ml-3 lg:ml-0 '>Email <sup className='text-red-800'>*</sup></h4>
                <input  type="text" className='h-10 lg:w-11/12 sm:w-[300px] rounded-sm border-b-2 hover:border-gray-600 ease-in-out duration-75 border-solid mb-3 ml-3' {...register("Email",{required:{value:true,message:'Required Field'  },minLength:{value:12,message:'invalid Email Address'},maxLength:{value:30,message:'invalid Email Address'}})} />
                {errors.Email&&<span className='text-red-600'>{errors.Email.message}</span>}
<br />
                <h4 className='lg:text-lg Font-bold mb-3 sm:text-[11px] sm:ml-3 lg:ml-0'>Comment or Message <sup className='text-red-800'>*</sup></h4>
                <textarea className='lg:h-32 sm:h-20 w-11/12 rounded-sm border-b-2 border-l-2 border-r-2  hover:border-gray-600 ease-in-out duration-75 border-solid mb-3 ml-3'></textarea>

                <input type="submit" value="SUBMIT" className='bg-gray-600 cursor-pointer text-white lg:pl-4 lg:pr-4 lg:pb-2 lg:pt-2 sm:pl-2 sm:pr-2 sm:pt-1 sm:pb-1 rounded-xl ml-2 hover:bg-gray-400 sm:text-[11px] lg:text-lg'   />
            </form>
        </div>
      </div>
      <br />
      <Footer/>
      </div>
    
    </div>
  )
}

export default Contact
