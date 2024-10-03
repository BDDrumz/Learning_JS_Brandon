import React from 'react'
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api'
import './Map.css'
import { Link } from 'react-router-dom'
const Map = () => {
    const mapStyle = {
        height: "100%",
        width: "100%",
        margin: "40px "
    }
    const center = {
        lat: 7.3697,
        lng: 12.3547
    };
  return (
    <div className='map_main'>
        <div>
        <h1> Google Maps</h1>
        <Link className="home" to={"/home"}>
          Home
        </Link>
        <span>/</span>
        <Link className="home" to={"/home"}>
          Plugins
        </Link>
      </div>
      <div className='Map-container m-4 bg-white '>
            <div className='maps-head h-8 bg-orange-100 border-b-2'>
                React Google Maps
            </div>
            <div className='map p-4'>Map Here</div>
      </div>
    </div>
  )
}

export default Map
