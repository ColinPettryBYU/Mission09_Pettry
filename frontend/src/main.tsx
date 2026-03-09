import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Find the root HTML element and render the React app into it.
createRoot(document.getElementById('root')!).render(
  // StrictMode helps catch common problems during development.
  <StrictMode>
    <App />
  </StrictMode>,
)
