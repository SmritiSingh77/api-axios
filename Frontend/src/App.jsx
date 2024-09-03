import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [error , setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect (()=>{
    (
      async ()=>{
       try {
        setError(false)
        const response = await axios.get('/api/products');
        console.log(response.data)
        setProducts(response.data)        
       } catch (error) {
        setError(true)
       }
      }
    ) ()
  }, [])

  if (error){
    return (
      <h1>Something went wrong</h1>
    )
  }
  return (
    <>
    <h1>Hello World</h1> 
    <p>Total number of products are: {products.length} </p>    
    </>
  )
}

export default App
