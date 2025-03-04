import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { UserProviderWrapper } from './contexts/user.context.jsx'

createRoot(document.getElementById('root')).render(
  <UserProviderWrapper>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </UserProviderWrapper>

)
