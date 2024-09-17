import React from 'react'
import { useState,useEffect,useMemo } from 'react'

const useFetch=(Currency)=> {
    const [data, setdata] = useState({})
    useEffect(() => {
        let url='https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/'
        let promise=fetch(url+Currency+'.json');
        promise.then((response)=>{
          return response.json()
        }).then((result)=>{
      setdata(result[Currency])
     
      
        })
      },[Currency])
      return data

    
  
}
export default useFetch