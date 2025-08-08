import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router/Router.jsx'
import "/src/styles/main.css"
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </StrictMode>,
)