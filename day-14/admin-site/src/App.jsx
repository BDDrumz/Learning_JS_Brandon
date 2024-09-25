import Home from './components/Home'
import Index from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Colors from './components/Colors'
import Topography from './components/Topography'
import Navbartop from './components/Navbartop'
import Navbarleft from './components/Navbarleft'
import Map from './components/Map'


function App() {

  return (
    <>
      <BrowserRouter>
        <div className="main">
          <div className="container_left">
            <Navbarleft />
          </div>

          <div className="container_right">
            <Navbartop />
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/Dashboard' element={<Index />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Colors' element={<Colors />} />
              <Route path='/Topography' element={<Topography />} />
              <Route path='/Map' element={<Map/>}/> 
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
