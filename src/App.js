import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, changeText, selectTodo, deleteTodo } from './features/todoSlice';

function App() {

  const dispatch = useDispatch()
  const {todos, text} = useSelector(selectTodo)

  const changeHendler = (e) => {
    dispatch(changeText(e.target.value))
  }

  const addNewTodo = (e) => {
    e.preventDefault()

    dispatch(addTodo())
  }

  const deletePost = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className="App">
      <form onSubmit={addNewTodo}>
        <input value={text} type='text' onChange={changeHendler}/>
        <button>Add</button>
      </form>
      {
        todos.map(el => <div className='post'>
          <div className='name'>{el.text}</div>
          <button onClick={() => deletePost(el.id)}>Delete</button>
        </div>)
      }
    </div>
  );
}

export default App;
