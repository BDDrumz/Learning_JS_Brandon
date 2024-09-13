import React from 'react'
import { Link } from 'react-router-dom'
import './dashboard.css'

function Index() {
  return (
    <div className='dashboard-main'>
      <div>
        <h1> Dashboard</h1>
        <Link className='home' to={"/home"}>Home </Link>
      </div >
      <div className='sale-main'>
        <div className='sale-left'>
          <div className='s-left1'>
            <h1>Sale</h1>
          </div>

          <div className='s-left2'>

            <div className='s-left3'>
              <h3>Customers</h3>
            </div>
            <div className='s-left4'>
              <h3>Orders</h3>
            </div>

          </div>

        </div>
        <div className='sale-right'>
          <h1>Traffic</h1>
        </div>
      </div>

      <div className='users-main'>

        <div className='users-left'>
          <div className="users"></div>
        </div>

        <div className="users-right">
          <div className='users-num'></div>
          <div className='conversation'></div>
          <div className="sessions"></div>
        </div>
      </div>
      <div className='traffic-main'>
        <div className='traffic'>
          
        </div>
      </div>

    </div>
  )
}

export default Index