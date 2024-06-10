import React from 'react'

const TodoForm = ({ addNewTodo, changeHendler, text}) => {
  return (
    <form className='form' onSubmit={addNewTodo}>
        <input value={text} type='text' onChange={changeHendler}/>
        <button>Add</button>
    </form>
  )
}

export default TodoForm