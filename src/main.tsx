import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Cabecalho } from './Cabecalho.tsx'

createRoot(document.getElementById('cabecalho')!).render(
  <StrictMode>
    <Cabecalho/>
  </StrictMode>,
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)