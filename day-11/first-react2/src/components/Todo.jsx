import React from 'react'
import { Trash2, Pencil } from 'lucide-react'

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "completed": ""}`}>{task.task}</p>
      <div>
        <Pencil className='edit' onClick={() =>
          editTodo(task.id)
        } />
        <Trash2 className='trash' onClick={() =>
          deleteTodo(task.id)
        } />


      </div>
    </div>
  )
}

export default Todo