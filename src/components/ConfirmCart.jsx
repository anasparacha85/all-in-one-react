import React from 'react'


const ConfirmCart = ({product,handleprodChange,prodprice,handlepriceChange,prodquantity,handlequanChange,option,handleoptionChange}) => {
    if(product!='' && prodprice!=null && prodquantity!=null ){
    return (
        
    <div className="w-1/3 mt-10 mr-7 p-6 h-2/4  rounded-lg  bg-transparent">
  
  
        <div className="mb-4 flex gap-8">
            <label htmlFor="product" className="block text-sm font-medium text-gray-700 mt-3">Product:</label>
            <input
                type="text"
                id="product"
                name="product"
                readOnly
                 value={product}
                 onChange={handleprodChange}
                className="mt-1 block w-96 px-3 py-2 border-transparent rounded-md  focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            />
        </div>
        <div className="mb-4 flex gap-8">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mt-3">Price:</label>
            <input
                type="number"
                id="price"
                name="price"
                readOnly
                 value={prodprice}
                 onChange={handlepriceChange}
                className="mt-1 block w-96 ml-5  px-3 py-2 border-transparent rounded-md  focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            />
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
            className="mt-1 block w-96  -ml-1 px-4 py-2 border-transparent rounded-md  focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            />
        </div>
        <div className="mb-4 flex gap-8">
            <label htmlFor="option" className="block text-sm font-medium text-gray-700 mt-3">Options:</label>
            <select
                id="option"
                name="option"
                //  value={option}
                //  onChange={handleoptionChange}
                className="mt-1 block w-96  px-3 py-2 border-transparent rounded-md  focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            >
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </div>
        <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
            Confirm Order
        </button>
        
  
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
