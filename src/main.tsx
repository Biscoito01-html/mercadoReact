import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './menu'
import PageProdutos from './produto/view/PageProduto'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<PageProdutos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
