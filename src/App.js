import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import Favorites from './pages/products/Favorites'
import ProductList from './pages/products/ProductList'
import AddToDo from './pages/todos/AddToDo'
import TodoList from './pages/todos/TodoList'
import { todoAction } from './store/actions/todo.action'

function App() {


  let favorites = useSelector(state => state.favoriteReducer);

  let dispatch = useDispatch();

  useEffect(() => {

    dispatch(todoAction.getAll())
    
  }, [])
  


  return (<>
  <h1>Total Favorites Item: {favorites.length}</h1>
  <ul style={{display:'flex', justifyContent:'space-around'}}>
    <Link to='/'>Product List</Link>
    <Link to='/favorites'>Favorites</Link>
    <Link to='/todos'>Todos</Link>
    <Link to='/addtodo'>Add Todo</Link>

  </ul>
  <Routes>
    <Route path='/' element={<ProductList/>}></Route>
    <Route path='/favorites' element={<Favorites/>}></Route>
    <Route path='/todos' element={<TodoList/>}></Route>
    <Route path='/addtodo' element={<AddToDo/>}></Route>

  </Routes>
    {/* <SiteHeader />
    <SiteFooter /> */}
  </>
  )
}

export default App