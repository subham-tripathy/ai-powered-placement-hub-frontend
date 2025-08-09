import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/bootstrap.bundle.min.js'
import NavBar from './components/navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar />
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </BrowserRouter>
)