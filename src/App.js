import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, changeText, selectTodo, deleteTodo, checkedTodo } from './features/todoSlice';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

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
      <TodoForm addNewTodo={addNewTodo} changeHendler={changeHendler} text={text}/>
      <TodoList checkedTodo={checkedTodo} deletePost={deletePost} todos={todos}/>
    </div>
  );
}

export default App;
