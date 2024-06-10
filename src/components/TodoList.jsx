import React from 'react'
import { useDispatch } from 'react-redux'

const TodoList = ({ todos, deletePost, checkedTodo }) => {


    const dispatch = useDispatch()

  return (
    <div>
    {
        todos.map(el => <div key={el.id} className='post'>
          <input type='checkbox' checked={el.isDone} onChange={() => dispatch(checkedTodo(el.id))}/>
          <div style={{textDecoration: el.isDone ? 'line-through': 'none'}} className='name'>{el.text}</div>
          <button onClick={() => deletePost(el.id)}>Delete</button>
        </div>)
    }
    </div>
  )
}

export default TodoList