import React from 'react'
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api'
import './Map.css'
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
        <h1>Google Maps</h1>
        <LoadScript/>
 
        <GoogleMap 
            Map={mapStyle}
            zoom={10}
            center={center}
            >
            <Marker position={center}/> 
        </GoogleMap>
        <LoadScript/>
    </div>
  )
}

export default Map
