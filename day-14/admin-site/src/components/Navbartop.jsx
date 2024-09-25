import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Menu, Sun, MailOpen,
  Logs, Bell, Grip
 } from 'lucide-react'
import './navbar.css'
import '../App.css'
import Theme from './Theme'

const Navbartop = () => {
  return (
    <div className='Navbartop'>
      <div className='nav-left'>
        <div className='menu'> <Menu /></div>
        <div className='searchbar'><Search className='iconSearch' />
        <input type="text" className='searchInput'
          placeholder='Search' /></div>
      </div>
      <div className='nav-right'>
          <Bell className='icon2'/>
          <Logs className='icon2' />
          <MailOpen className='icon2' />         
         <div className='sun'> <Theme /> </div>
          <img src="#" />
          <Grip className='icon2'/>
          
      </div>
    </div>
  )
}

export default Navbartop