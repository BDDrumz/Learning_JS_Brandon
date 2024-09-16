import React from 'react'
import { Link } from 'react-router-dom'
import './dashboard.css'
import '../App.css'

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
            Sale
          </div>

          <div className='s-left2'>

            <div className='s-left3'>
              Customers
            </div>
            <div className='s-left4'>
              Orders
            </div>

          </div>

        </div>
        <div className='sale-right'>
          Traffic
        </div>
      </div>

      <div className='users-main'>

        <div className='users-left'>
          <div className="users">
            Users
          </div>
        </div>

        <div className="users-right">
          <div className='users-num'>number of users</div>
          <div className='conversation'>Conversations</div>
          <div className="sessions">Sessions</div>
        </div>
      </div>
      <div className='traffic-main'>
        <div className='traffic'>
          traffic
        </div>
      </div>

    </div>
  )
}

export default Index