import React, { useEffect } from 'react'
import { useState } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])

    async function fetchProductData(){
        setLoading(true)

        try{
            const res = await fetch(API_URL)
            const data = await res.json();

            setPosts(data); //array of objects is received
        }
        catch(error){
          <p>No products here</p>
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchProductData();
    }, [])

  return (
    <div>
      {
        loading? <Spinner/> :
        posts.length > 0? 
        (<div>
          {
            posts.map((post) => (
              <Product key = {post.id} post={post}/>
            ))
          }
        </div>): 
        <div>
          <p>No post here</p>
        </div>
      }
    </div>
  )

}

export default Home
