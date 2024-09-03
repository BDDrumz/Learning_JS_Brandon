import React from 'react'
const form = () => {
  return (
    <form className='mb-4 font-primary w-full'>
        <input type="text" className='outline-none 
        bg-transparent border border-gray-500 p-4 w-[300px]
        text-white mb-8 rounded placwholder'
        placeholder='What Task do you have today?' />
        <button>Add Task</button>
    </form>
  )
}

export default form