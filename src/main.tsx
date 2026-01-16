import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import 'modern-normalize'
import App from './components/App/App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
