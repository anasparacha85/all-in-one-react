import React from 'react'
import { useForm } from 'react-hook-form'


const ConfirmCart = ({product,handleprodChange,prodprice,handlepriceChange,prodquantity,handlequanChange,ConvertedCurrency,handleoptionChange,options=[],convertedprice,handleconvertedChange}) => {
    const{register,setError,handleSubmit,formState:{errors,isSubmitting}}=useForm()
    const onsubmit=(data)=>{
        console.log((data));
        
    }
    if(product!='' && prodprice!=null && prodquantity!=null ){
    return (
     
    <div className="w-5/6 mt-10 mr-7 p-6 h-4/5  rounded-lg  ">
  
  <form onSubmit={handleSubmit(onsubmit)}>
        <div className="mb-4 flex gap-8">
            <label htmlFor="product" className="block text-sm font-medium text-gray-700 mt-3">Product:</label>
            <input
                type="text"
                id="product"
                name="product"
                readOnly
                 value={product}
                 onChange={handleprodChange}
                 {...register('Product', { required: { value: true, message: 'This field is required' } })}
                className="mt-1 block w-96 px-3 py-2 border-transparent rounded-md  focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            />
            {errors.Product&&<span className='text-red-600'>{errors.Product.message}</span>}
        </div>
        <div className="mb-4 flex gap-8">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mt-3">Price:$</label>
            <input
                type="number"
                id="price"
                name="price"
                readOnly
                 value={Number(prodprice)}
                 onChange={handlepriceChange}
                 {...register('Price', { required: { value: true, message: 'This field is required' } })}
                className="mt-1 block w-96 ml-5  px-3 py-2 border-transparent rounded-md  focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            />
             {errors.Price&&<span className='text-red-600'>{errors.Price.message}</span>}
        </div>
        <div className="mb-4 flex gap-8">
            <label htmlFor="quantity"  className="block text-sm font-medium text-gray-700 mt-3">Quantity:</label>
            <input
                type="number"
                id="quantity"
                name="quantity"
                readOnly
                 value={prodquantity}
                 onChange={handlequanChange}
                 {...register('quantity', { required: { value: true, message: 'This field is required' } })}
            className="mt-1 block   -ml-1 px-4 py-2 border-transparent rounded-md  focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            />
              {errors.quantity&&<span className='text-red-600'>{errors.quantity.message}</span>}
        </div>
        <div className="mb-4 flex gap-8">
            <label htmlFor="option" className="block text-sm font-medium text-gray-700 mt-3">Convert Price in your Currency:</label>
            <select
                id="option"
                name="option"
                  value={ConvertedCurrency}
                  onChange={handleoptionChange}
                className="mt-1 block w-20  px-3 py-2 border-2 border-gray-100 rounded-md  focus:outline-none focus:ring-1 focus:ring-gray-500 sm:text-sm"
            >
               {options.map((items)=>{
               return <option value={items} key={items}>{items}</option>
               }
               )} 
               
            </select>
           
        </div>
        <div className="mb-4 flex gap-8">
           
            <input
                type="number"
                id="convertedprice"
                
                readOnly
                 value={convertedprice}
                 onChange={handleconvertedChange}
            className="mt-1 block  w-full -ml-1 px-4 py-2 border-2 border-gray-100 rounded-md  focus:outline-none focus:ring-1 focus:ring-gray-500 sm:text-sm"
        />
        </div>
            <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
            Confirm Order
        </button>
        
  </form>
</div>

  )
}
else{
    return (
    <div className='mt-56 mr-36'>No Records To Display</div>
)
}
}

export default ConfirmCart
