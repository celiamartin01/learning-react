import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { NoteProviderWrapper } from './context/note.context.jsx'

createRoot(document.getElementById('root')).render(
  // I'm ignoring the StrictMode bc i'm doing request to a free API
  // so there can be problems repeating the request..? i think lol
  // <StrictMode>
    <BrowserRouter>
      <NoteProviderWrapper>
        <App />
      </NoteProviderWrapper>
    </BrowserRouter>
  // </StrictMode>,
)
