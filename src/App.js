import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import Favorites from './pages/products/Favorites'
import ProductList from './pages/products/ProductList'

function App() {


  let favorites = useSelector(state => state.favoriteReducer);


  return (<>
  <h1>Total Favorites Item: {favorites.length}</h1>
  <ul style={{display:'flex', justifyContent:'space-around'}}>
    <Link to='/'>Product List</Link>
    <Link to='/favorites'>Favorites</Link>
  </ul>
  <Routes>
    <Route path='/' element={<ProductList/>}></Route>
    <Route path='/favorites' element={<Favorites/>}></Route>
  </Routes>
    {/* <SiteHeader />
    <SiteFooter /> */}
  </>
  )
}

export default App