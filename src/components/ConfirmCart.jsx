import React from 'react'
import { useForm } from 'react-hook-form'


const ConfirmCart = ({product,handleprodChange,prodprice,handlepriceChange,prodquantity,handlequanChange,ConvertedCurrency,handleoptionChange,options=[],convertedprice,handleconvertedChange,handleclick ,styleref}) => {
    const{register,setError,handleSubmit,formState:{errors,isSubmitting}}=useForm()
    const onsubmit=(data)=>{
        alert('Your Order Has been Proceed')
        console.log((data));
        
    }
    if(product!='' && prodprice!=null && prodquantity!=null ){
    return (
        <div ref={styleref} className='lg:h-screen lg:w-2/6 sm:w-[280px] bg-gray-100 border-2 text-center  lg:-translate-y-[84px]  sm:block  sm:-translate-y-0 sm:mt-5 sm:ml-4 lg:ml-0 lg:hidden lg:mr-3  sm:h-[300px]'>
        <div className="heading flex justify-between h-14 bg-gray-100 text-gray-600">
          <div className="shopp lg:text-xl font-serif mt-4 lg:block sm:hidden">Shopping Cart</div>
          <button className='pt-1 pb-1 pl-1 pr-1 lg:block sm:hidden' onClick={()=>{styleref.current.style.display="none"
          styleref.current.style.transform=" transform: translateX(500px)"
    
          }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
        <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg></button>
        </div>
    <div className="w-5/6 lg: mt-10 mr-7 p-6 h-4/5  rounded-lg sm:mt-0 ">
  
  <form onSubmit={handleSubmit(onsubmit)}>
        <div className="lg:mb-4 sm:mb-1 flex gap-8">
            <label htmlFor="product" className="block lg:text-sm sm:text-[8px] font-medium text-gray-700 mt-3">Product:</label>
            <input
                type="text"
                id="product"
                name="product"
                readOnly
                 value={product}
                 onChange={handleprodChange}
                 {...register('Product', { required: { value: true, message: 'This field is required' } })}
                className="mt-1 block lg:w-96 px-3 py-2 border-transparent rounded-md  focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-[9px] lg:text-sm sm:w-[180px] "
            />
            {errors.Product&&<span className='text-red-600 lg:text-sm sm:text-[7px]'>{errors.Product.message}</span>}
        </div>
        <div className="lg:mb-4 sm:mb-1 flex gap-8">
            <label htmlFor="price" className="block lg:text-sm sm:text-[8px] font-medium text-gray-700 mt-3">Price:$</label>
            <input
                type="number"
                id="price"
                name="price"
                readOnly
                 value={Number(prodprice)}
                 onChange={handlepriceChange}
                 {...register('Price', { required: { value: true, message: 'This field is required' } })}
                className="mt-1 block lg:w-96 sm:w-[120px] sm:ml-2 lg:ml-3  px-3 py-2 border-transparent rounded-md  focus:outline-none focus:ring-1 focus:ring-blue-500 lg:text-sm sm:text-[9px]"
            />
             {errors.Price&&<span className='text-red-600'>{errors.Price.message}</span>}
        </div>
        <div className="lg:mb-4 sm:mb-1 flex gap-8">
            <label htmlFor="quantity"  className="block lg:text-sm sm:text-[8px] font-medium text-gray-700 mt-3">Quantity:</label>
            <input
                type="number"
                id="quantity"
                name="quantity"
                readOnly
                 value={prodquantity}
                 onChange={handlequanChange}
                 {...register('quantity', { required: { value: true, message: 'This field is required' } })}
            className="mt-1 block   lg:-ml-1 px-4 py-2 lg:w-96 sm:w-[120px] border-transparent rounded-md  focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-[10px] lg:text-sm"
            />
              {errors.quantity&&<span className='text-red-600'>{errors.quantity.message}</span>}
        </div>
        <div className="lg:mb-4 sm:mb-1 flex lg:gap-8 sm:gap-3">
            <label htmlFor="option" className="block lg:text-sm sm:text-[8px] font-medium text-gray-700 mt-3 sm:-ml-4 lg:ml-[5px]">Convert Price in your Currency:</label>
            <select
                id="option"
                name="option"
                  value={ConvertedCurrency}
                  onChange={handleoptionChange}
                className="mt-1 block w-20  px-3 py-2 border-2 border-gray-100 rounded-md  focus:outline-none focus:ring-1 focus:ring-gray-500 sm:text-[9px] lg:text-sm"
            >
                
               {options.map((items)=>{
               return <option value={items} key={items}>{items}</option>
               }
               )} 
               
            </select>
           
        </div>
        <div className="lg:mb-4 sm:mb-[2px] flex gap-8 justify-between">
           
            <input
                type="number"
                id="convertedprice"
                
                readOnly
                 value={convertedprice}
                 onChange={handleconvertedChange}
            className="mt-1 block  lg:w-64 sm:w-32 -ml-1 lg:px-4 lg:py-2 sm:py-1 sm:px-2 border-2 border-gray-100 rounded-md  focus:outline-none focus:ring-1 focus:ring-gray-500 lg:text-sm sm:text-[8px] "
        />
        <button type='button' className=' lg:py-2 lg:px-4 sm:py-1 sm:px-2 bg-gray-500 text-white lg:text-sm sm:text-[8px] sm:mt-2 font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 lg:mt-0' onClick={handleclick}>convert</button>
        </div>
            <button
            type="submit"
            className="w-full  lg:py-2 lg:px-4 sm:py-1 sm:px-[7px] lg:text-sm sm:text-[8px] bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
            Confirm Order
        </button>
        
  </form>
  </div>
</div>

  )
}
else{
    return (
        <div ref={styleref} className='lg:h-screen lg:w-2/6 sm:w-[280px] bg-gray-100 border-2 text-center  lg:-translate-y-[84px]  sm:block  sm:-translate-y-0 sm:mt-5 sm:ml-4 lg:ml-0 lg:hidden lg:mr-3  sm:h-[300px]'>
    <div className="heading flex justify-between h-14 bg-gray-100 text-gray-600">
      <div className="shopp lg:text-xl font-serif mt-4 lg:block sm:hidden">Shopping Cart</div>
      <button className='pt-1 pb-1 pl-1 pr-1 lg:block sm:hidden ' onClick={()=>{styleref.current.style.display="none"
      styleref.current.style.transform=" transform: translateX(500px)"

      }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg></button>
    </div>
    <div className='lg:mt-56 lg:mr-36 sm:mt-[96px] lg:text-sm sm:text-[8px]'>No products in the cart</div>
    </div>
)
}
}

export default ConfirmCart
