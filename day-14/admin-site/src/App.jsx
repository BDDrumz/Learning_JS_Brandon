import Home from './components/Home'
import Index from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Colors from './components/Colors'
import Topography from './components/Topography'
import Navbartop from './components/Navbartop'
import Navbarleft from './components/Navbarleft'
import Map from './components/Map'
import { useTheme } from './components/Theme'
import OutsideClickHandler from 'react-outside-click-handler';
import { useState } from 'react'
import Charts from './components/Charts'

function App() {
  const[opennav, setopennav]=useState(false)
  const togglenav=()=>{
    setopennav(!opennav)
  }

  const { theme } = useTheme()

  return (
    <>
      <BrowserRouter>
        <div className={`main app theme-${theme}`}>
        <OutsideClickHandler onOutsideClick={()=>{setopennav(false)}}>
          <div className="container_left">
            <Navbarleft opennav={opennav}/>
          </div>
          </OutsideClickHandler>

          <div className={`container_right`}>
            <Navbartop togglenav={togglenav}/>
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/Dashboard' element={<Index />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Colors' element={<Colors/>} />
              <Route path='/Topography' element={<Topography />} />
              <Route path='/Map' element={<Map/>}/> 
              <Route path='/Charts' element={<Charts/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
