import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss'
import App from './App.tsx'

createRoot(document.getElementById('page-layout')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
