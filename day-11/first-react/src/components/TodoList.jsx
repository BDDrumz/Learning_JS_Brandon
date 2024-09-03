import React, { useState } from 'react'
import Form from './form'


const TodoList = () => {
    const [todoValue, setValue] = useState();

    const createTodo = todo => {
        setTodo([...todoValue, {id: uuidv4(), task: todo, isEditing: false}])
    }
  return (
    <div >
        <Form createTodo = {createTodo} />
    </div>
  )
}

export default TodoList