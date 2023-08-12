import React, { useState } from 'react'
import Haeder from './componant/Haeder'
import Home from './page/home/Home'
import Footer from './componant/Footer'
import { Route, Routes } from 'react-router-dom'
import Cart from './page/cart/Cart'
import CategoriesDetails from './page/details/CategoriesDetails'
import ProductDetails from './page/details/ProductDetails'
import Search from './page/search/Search'


const App = () => {

  const [cart,setCart]=useState([])

  const pluse = ()=>{
    
  }

  return (
    <div  className=' bg-black bg-opacity-10'>
      <Haeder/>

      <Routes>
       <Route  path='/' element={<Home/>}/> 
       <Route  path='/cart' element={<Cart/>}/> 
       <Route  path='/categories/:type' element={<CategoriesDetails/>}/> 
       <Route  path='/product/:id' element={<ProductDetails/>}/> 
       <Route  path='/products/search/:product' element={<Search/>}/> 
      </Routes>
      
      <Footer/>
      </div>



  )
}

export default App