import React from 'react'
import { useSelector } from 'react-redux'

function TodoList() {

    let todos = useSelector(state => state.todoReducer);
  console.log('TODOS', todos);
  return (<>
    {
        todos && todos.map(item => <li>{item.title}</li>)
    }
  </>
  )
}

export default TodoList