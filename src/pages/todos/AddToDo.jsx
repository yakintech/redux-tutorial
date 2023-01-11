import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { todoAction } from '../../store/actions/todo.action';

function AddToDo() {

    const [title, settitle] = useState('');

    let dispatch = useDispatch()

    const add = () => {

        let newTodo = {
            id: Math.floor(Math.random() * 9999),
            title: title
        }

        dispatch(todoAction.add(newTodo))

    }

  return (<>
  <div>
      <label>Title:</label>
      <input type='text' onChange={(e) => settitle(e.target.value)} />
  </div>
  <div>
      <button onClick={() => add()}>Add</button>
  </div>
  </>)
}

export default AddToDo