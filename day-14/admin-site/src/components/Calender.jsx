import React from 'react'
import "../components/Calender.css"
import { Link } from 'react-router-dom'

const Calender = () => {
  return (
    <div className='Calender-main'>
      <div>
        <h1> Calender</h1>
        <Link className="home" to={"/home"}>
          Home
        </Link>
        <span>/</span>
        <Link className="home" to={"/home"}>
          Plugins
        </Link>
      </div>
      <div className='Calender-div m-4 '>
          <div className='fullcalender h-8 pl-4'>
            Full Calender
          </div>
          <div className='Calender '>
            
          </div>
      </div>
    </div>
  )
}

export default Calender