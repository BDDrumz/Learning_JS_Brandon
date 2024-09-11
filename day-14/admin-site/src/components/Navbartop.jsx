import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Menu } from 'lucide-react'

const Navbartop = () => {
  return (
    <div className='Navbartop'>
      <div className='nav-left'>
        <div className='menu'> <Menu /></div>
        <div className='searchbar'><Search className='iconSearch' /><input type="text" className='searchInput'
          placeholder='Search' /></div>
      </div>
      <div className='nav-right'>right</div>
    </div>
  )
}

export default Navbartop