import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo';
uuidv4();

const TodoWrap = () => {
  const [todos, setTodos] = useState([])
  
  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    console.log(todos);
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {
      todo, completed: !todo.completed} : todo ))
  } 

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {
      todo, isEditing: !todo.isEditing} : todo ))
  }
  return (
    <div className='todo-wrap'>
      <h1>Get things done!</h1>

      <TodoForm addTodo={addTodo}/>
    
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} 
        toggleComplete={toggleComplete} deleteTodo= 
        {deleteTodo} editTodo={editTodo}/>
      ))}
    </div>
  )
}

export default TodoWrap