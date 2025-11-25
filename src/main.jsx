import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'; 
import { SettingsProvider } from './Components/context/SettingsContext.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <SettingsProvider> 
        <App />
      </SettingsProvider>
    </BrowserRouter>
  </StrictMode>,
)