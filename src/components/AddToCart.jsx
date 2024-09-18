import React, { useRef } from 'react'
import Head from './Head'
import Footer from './Footer'
import { useForm } from 'react-hook-form'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect,useCallback } from 'react'
import useCategories from '../hooks/useCategories'
import ConfirmCart from './ConfirmCart'
import useFetch from '../hooks/useFetch'

const AddToCart = () => {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm();
  const [count, setCount] = useState(0);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [headcount, setheadcount] = useState(0)
  const styleref = useRef()
  const onCartButtonClick=()=>{
styleref.current.style.opacity="100"
  }
 
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  useEffect(() => {
    const selected = categories.find(item => item.title === selectedCategory);
    if (selected) {
      setProductName(selected.title);
      setPrice(selected.price);
      setValue('Product', selected.title); // Sync with react-hook-form
      setValue('Price', selected.price);   // Sync with react-hook-form
    }
  }, [selectedCategory, categories, setValue]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const increaseCount = useCallback(() => {
    
    setCount(prevCount => prevCount + 1);
    
   
  const  selected=categories.find((item)=>item.title==selectedCategory);
    
    
    if(count===1 || count>1){

      setPrice(selected.price*(count+1))
     

      setValue('quantity',count+1)
      setValue('Price',selected.price*(count+1))
      
    }
   
  },[setValue,count,setPrice]);

  const decreaseCount = () => {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
   
  };

 
  const [product, setproduct] = useState('')
  const [prodprice, setprodprice] = useState(null)
  const [prodquantity, setprodquantity] = useState(null)
  const [currency, setcurrency] = useState('pkr')
  const [convertedcurrency,setconvertedcurrency]=useState('usd')
  const [convertedprice, setconvertedprice] = useState(null)
  
  
  
  const onconvertedchange=(e)=>{
    setconvertedprice(e.target.value)
  }
 
  const onpricechange=(e)=>{
setprodprice(e.target.value)
  }
  const onquantitychange=(e)=>{
    setprodquantity(e.target.value)  }

  const onsecondsubmit=()=>{

  
alert('Your order has been proceeded')
  }
    
  const onSubmit = (data) => {

    console.log(data);
    setproduct(productName)
    setprodprice(Number(price))
    if(count!=0){
    setprodquantity(count)
    setheadcount(count)
    
    }
    
  };
  const fetcheddata=useFetch(currency)
    console.log(fetcheddata);
    
  const curencyoptions=Object.keys(fetcheddata)
  console.log(curencyoptions);
  
  const oncurrencychange=(e)=>{
    setconvertedcurrency(e.target.value)
    setconvertedprice(prodprice*fetcheddata[convertedcurrency])
      }
      const onprodchange=(e)=>{
    setproduct(e.target.value)
    
      }
      console.log(300*fetcheddata[convertedcurrency]);
      
  
        
    return (
        <div>
            <div className="header w-screen bg-gray-500">
                <Head onCartButtonClick={onCartButtonClick} count={headcount}  />
               </div>
               <div className="forms flex justify-between w-screen ">
               <form   onSubmit={handleSubmit(onSubmit)}>
      <div className="p-6 w-3/5 ml-6 bg-white rounded-xl shadow-md space-y-4 mt-10 mb-10">
        
        {/* Category Select */}
        <div>
          <select
            {...register('category', { required: { value: true, message: 'This field is required' } })}
            onChange={handleCategoryChange}
            className="border rounded-md p-2 w-full"
            value={selectedCategory}
          >
            {categories.map((item) => (
              <option key={item.id} value={item.title}>{item.title}</option>
            ))}
          </select>
          {errors.category && <span className='text-red-600'>{errors.category.message}</span>}
        </div>

        {/* Product Name Input */}
        <div>
          <label htmlFor="product-name" className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            {...register('Product', { required: { value: true, message: 'This field is required' } })}
            className="mt-1 block w-full rounded-md p-2 border-transparent"
          />
          {errors.Product && <span className='text-red-600'>{errors.Product.message}</span>}
        </div>

        {/* Price Input */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            value={price || ''}
            onChange={(e) => {setPrice(Number(e.target.value))
             }
            }
            {...register('Price', { required: { value: true, message: 'This field is required' } })}
            className="mt-1 block w-full rounded-md p-2 bg-transparent border-transparent"
          />
          {errors.Price && <span className='text-red-600'>{errors.Price.message}</span>}
        </div>

        {/* Quantity Counter */}
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={increaseCount}
            className="p-2 bg-gray-300 rounded-md hover:bg-gray-400"
            
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="none">
              <path d="M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="text-xl font-semibold w-5">
            <input
              type="number"
              className="w-16"
              onChange={(e) => {setCount(Number(e.target.value))
               
              }}
              value={count}
              {...register('quantity')}
            />
          </span>
          <button
            type="button"
            onClick={decreaseCount}
            className="p-2 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="none">
              <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Add to Cart Button */}
        <input
          type="submit"
          value="Add to Cart"
          className="mt-4 w-full bg-gray-400 text-white p-3 rounded-md hover:bg-gray-500 transition-colors cursor-pointer"
        />
      </div>
    </form>
    <div ref={styleref} className='h-screen w-2/6 bg-gray-100 border-2 text-center    opacity-0 mr-4'>
    <div className="heading flex justify-between h-14 bg-gray-100 text-gray-600">
      <div className="shopp text-xl font-serif ">Shopping Cart</div>
      <button className='pt-1 pb-1 pl-1 pr-1 ' onClick={()=>styleref.current.style.opacity="0"}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg></button>
    </div>
    <form action="" onSubmit={handleSubmit(onsecondsubmit)}>
    <ConfirmCart prodprice={prodprice} prodquantity={prodquantity } product={product} handleprodChange={onprodchange} handlepriceChange={onpricechange} handlequanChange={onquantitychange} options={curencyoptions} ConvertedCurrency={convertedcurrency} handleoptionChange={oncurrencychange} convertedprice={convertedprice} handleconvertedChange={onconvertedchange}/>
    
    </form>
    </div>
    </div>
   
            
            <Footer />
        </div>
    )
}

export default AddToCart
