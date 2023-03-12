

import React from 'react'
import Movies from "./Movies.json"
import Product from "../Component/Product"
import './Home.css'
const Home = () => {
  console.log("Movies",Movies)
  return (
    <div className='home-container'>
      {Movies?.map((product,index)=>(
        <Product product={product} key={index} showCart={true}/>
      ))}
    </div>
  )
}

export default Home
