import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Home from './home'
import Produto from './produto/view/produtoView'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/produto/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
