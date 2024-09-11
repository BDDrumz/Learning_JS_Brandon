import React from 'react'
import { Link } from 'react-router-dom'
import { Gauge, Droplet, Pencil } from 'lucide-react'


const Navbarleft = () => {
  return (
    <div>
      <nav className="navleft">
        <Link className='dash' to={"/dashboard"}><Gauge />Dashboard</Link>
        <div className='theme'><p>THEME</p></div>
        <div className='Theme'><Link className="color" to={"/Colors"}><Droplet className='icons'/>Colors</Link></div>
        <div className='Theme'><Link className="topo" to={"/Topography"}><Pencil className='icons' />Topograhpy</Link></div>
        <div className='theme'><p>COMPONENTS</p></div>
        
      </nav>

      <nav className="navtop"></nav>
    </div>
  )
}

export default Navbarleft