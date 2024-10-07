import React from 'react'
import "./Rightbar.css"
import "../App.css"
import { Logs, MessageSquareMore, Settings, X } from 'lucide-react'

const Rightbar = () => {
  return (
    <div className='rightbar bg-white p-4 flex justify-between' >
       <div className='iconz flex gap-4 h-0 w-0'  >
       <div><Logs /></div>
        <div><MessageSquareMore /></div>
        <div><Settings /></div>
       </div>
        <div className='iconz '><X /></div>
    </div>
  )
}

export default Rightbar