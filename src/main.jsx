import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './components/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './components/AuthContext.jsx'

createRoot(document.getElementById('root')).render(


    <BrowserRouter>
    <AuthContextProvider>
    <App />

    </AuthContextProvider>

    </BrowserRouter>

)
