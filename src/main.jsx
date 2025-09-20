import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/Home.jsx'
import WelcomePage from './pages/Welcome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WelcomePage />
  </StrictMode>
)