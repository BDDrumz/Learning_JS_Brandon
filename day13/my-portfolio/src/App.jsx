import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route index element ={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/About" element={<About/>} />
          </Routes>      
      </BrowserRouter>

    </div>
    
  )
}

export default App;

