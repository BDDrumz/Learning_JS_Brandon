import Home from './components/Home'
import About from './components/About'
import Index from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Colors from './components/Colors';
import Topography from './components/Topography';
import Navbartop from './components/Navbartop';

function App() {

  return (
    <div className='section'>
      <BrowserRouter>
      <div className='home'>
      <Home />
      </div>

        <div className="Routes">
          <Navbartop/>
          <div className="main">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/Colors" element={<Colors/>}/>
          <Route path="/Topography" element={<Topography/>}/>
          

        </Routes>
        </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
