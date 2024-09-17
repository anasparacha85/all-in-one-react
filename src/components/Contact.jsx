import React from 'react'
import Head from './Head'
import Footer from './Footer'
import Collections from './Collections'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Contact = () => {
    const {register,formState:{errors,isSubmitting},setError,handleSubmit}=useForm()
    const onSubmit=(data)=>{
console.log(data)
    }
  return (
    <div >
     <div className='Contact h-screen '>
      <div className=" h-5/6 w-screen text-center text-gray-600 bg-[url('bigbackk.jpg')] bg-cover bg-center"  >
        <Head/>
        <h4 className=' mt-16 text-xl text-gray-300' >Contact Us</h4>
        <h1 className=' Font-Nerko mt-3 text-4xl  font-extrabold text-white'>Get in Touch with Our Experts Team</h1>
        <p className='text-gray-300 w-2/4 h-12 ml-96 pl-8 mt-14 text-lg text-center'>Share some details here. This is Flexible section where you can share anything you want. It could be details or some information.</p>
        <button className='pt-4 pb-4 rounded-2xl mt-10 pl-6 pr-6 bg-gray-500 text-white hover:bg-gray-400 '><Link to='/Collections'>Shop Now</Link></button>
      </div>
        <div className="contact w-screen flex justify-between mt-8 ">
        <div className="left w-2/5 ">
<h1 className='text-black Font-Nerko text-5xl ml-10'>Get In Touch With Us</h1>
<br />

<p className='text-gray-500 text-lg ml-10'>Share some details here. This is Flexible section where you can share anything you want. It could be details or some information.</p>
<br />
<h4 className='text-black text-lg font-bold ml-10'>Address</h4>
<br />
<p className='text-gray-500 text-lg ml-10'>A-536 block I North Naziamabd Karachi</p>

<hr />
<br />
<div className='flex justify-between w-full'>
    <div className="phone"><h4 className='ext-black text-lg font-bold ml-10 '>Phone Number</h4>
    <p className='text-gray-500 text-lg ml-10'>+923212167055</p></div>
    <div className="Email pb-20">
    <h4 className='ext-black text-lg font-bold ml-10 '>Email:</h4>
    <p className='text-gray-500 text-lg ml-10'>amiranas761@gmail.com</p>
    </div>
    <br />
    <br />
    <hr />

</div>

        </div>
        <div className="right  w-2/5  mr-5">
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <h4 className='text-lg Font-bold mb-3 '>Name <sup className='text-red-800'>*</sup></h4>
              <div className="name flex justify-between mb-4">
                <div className="first grid grid-cols-1">
                <input  type="text" className='h-10 w-64 rounded-sm border-b-2  hover:border-gray-600 ease-in-out duration-75  border-solid' {...register("FirstName",{required:{value:true,message:'Required Field'},minLength:{value:1,message:'atleast 1 characters'},maxLength:{value:16,message:'Not more than 16 characters'}})} />
                <label htmlFor="First" className='text-gray-400'>First</label>
                {errors.FirstName&& <span className='text-red-600'>{errors.FirstName.message}</span>}
                </div>
                <div className="last grid grid-cols-1">
                <input type="text"className='h-10 w-64 rounded-sm border-b-2 hover:border-gray-600 ease-in-out duration-75 border-solid' {...register("LastName",{required:{value:true,message:'Required Field' },minLength:{value:1,message:'alteast 1 character'},maxLength:{value:16,message:'Not More than 16 charaters'}})}/>
                <label htmlFor="last" className='text-gray-400'>Last</label>
                {errors.LastName&& <span className='text-red-600'>{errors.LastName.message}</span>}
                </div>
                <br />
                </div>
                <h4 className='text-lg Font-bold mb-3 '>Email <sup className='text-red-800'>*</sup></h4>
                <input  type="text" className='h-10 w-11/12 rounded-sm border-b-2 hover:border-gray-600 ease-in-out duration-75 border-solid mb-3 ' {...register("Email",{required:{value:true,message:'Required Field'  },minLength:{value:12,message:'invalid Email Address'},maxLength:{value:30,message:'invalid Email Address'}})} />
                {errors.Email&&<span className='text-red-600'>{errors.Email.message}</span>}
<br />
                <h4 className='text-lg Font-bold mb-3 '>Comment or Message <sup className='text-red-800'>*</sup></h4>
                <textarea className='h-32 w-11/12 rounded-sm border-b-2 border-l-2 border-r-2  hover:border-gray-600 ease-in-out duration-75 border-solid mb-3'></textarea>

                <input type="submit" value="SUBMIT" className='bg-gray-600 cursor-pointer text-white pl-4 pr-4 pb-2 pt-2 rounded-xl ml-2 hover:bg-gray-400'   />
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
