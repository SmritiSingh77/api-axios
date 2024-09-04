import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [error , setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  useEffect (()=>{
    const controller = new AbortController()
    ;(
      async ()=>{
       try {
        setLoading(true);
        setError(false)
        const response = await axios.get('/api/products?search=' + search, {signal: controller.signal});
        console.log(response.data)
        setProducts(response.data)  
        setLoading(false)      
       } catch (error) {
        if (axios.isCancel(error)){
          console.log('Request canceled', error.message);
        }
        setLoading(false)
        setError(true)
       }
      }
    ) ()
    // cleanup
    return ()=>{
      controller.abort()
    }
  }, [search])
 
  return (
    <>
    <h1>Hello World</h1> 
    <input 
    type="text" 
    placeholder='search here..' 
    value={search}
    onChange={(e)=> setSearch(e.target.value)}
    />
    {
      loading && (<h1>Loading ...</h1>)
    }
    {
      error && (<h1>Something Went Wrong</h1>)
    }
    <p>Total number of products are: {products.length} </p>    
    </>
  )
}

export default App
