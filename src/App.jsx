import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home'
import { HostLayout } from './Pages/Host/HostLayout'
import { Dashboard } from './Pages/Host/Dashboard'
import { Income } from './Pages/Host/Income'
import { Reviews } from './Pages/Host/Reviews'
import { About } from './Pages/About'
import { Vans } from './Pages/Vans'
import { VanDetail } from './Pages/VanDetail'
import { Layout } from './components/Layout'

import './server'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />}/>
            <Route path="/host" element={<HostLayout />} >
              <Route path="/host/dashboard" element={<Dashboard />} />
              <Route path="/host/income" element={<Income />} />
              <Route path="/host/reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
