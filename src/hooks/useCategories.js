import React from 'react'
import { useState,useEffect } from 'react'

function useCategories(categories) {
    const [data, setdata] = useState([])
    useEffect(() => {
      let p=  fetch(`https://fakestoreapi.com/products/category/${categories}`)
       p.then((response)=>{
        return response.json()
       }) .then((data)=>{
        setdata(data)
       })
    }, [categories])
    
    return data
    
}

export default useCategories
