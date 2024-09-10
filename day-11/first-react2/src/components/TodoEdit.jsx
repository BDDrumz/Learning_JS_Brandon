import React, {useState} from 'react'

const TodoEdit = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" required className='todo-input' value={value}
         placeholder='Update task' onChange={(e) => 
            setValue(e.target.value)
         }/>
         <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default TodoEdit