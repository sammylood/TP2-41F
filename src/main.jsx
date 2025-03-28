import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' //CSS de base du theme de React
import App from './components/App/App'
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
