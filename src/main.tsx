import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Listperson from './Listperson.tsx'
import Nopage from './Nopage.tsx'
import Home from './Home.tsx'
import Contactus from './Contactus.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Home />} />
          <Route path='Home' element={<Home />} />
          <Route path='Contactus' element={<Contactus />} />
          <Route path='Listperson' element={<Listperson />} />
          <Route path='nopage' element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
