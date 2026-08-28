import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Navbar } from './components/Navbar'
import { Vans } from './Pages/Vans'

import './server'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App
