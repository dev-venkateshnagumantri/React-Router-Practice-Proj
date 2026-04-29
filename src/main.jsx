import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />

    {/* 
      Old way of writing code
    <BrowserRouter>
        <App />
    </BrowserRouter> */}
    
  </StrictMode>,
)
