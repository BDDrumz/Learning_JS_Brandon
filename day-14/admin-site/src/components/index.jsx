import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <div className='dashboard-main'>
      <div>
        <h1> Dashboard</h1>
        <Link className='home' to={"/home"}>Home </Link>
      </div >
      <div className='sale-main'>
        <div className='sale-left'>
          <div className='s-left1'></div>

          <div className='s-left2'>

            <div className='s-left3'></div>
            <div className='s-left4'></div>

          </div>

        </div>
        <div className='sale-right'>

        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Index