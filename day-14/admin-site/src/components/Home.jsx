import React from 'react'
import Navbar from './Navbarleft'
import Colors from './Colors'
import Topography from './Topography'
import About from './About'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="main">
           <Navbar/>
           <Colors/>
          <Topography/>
        </div>
    </div>
  )
}

export default Home