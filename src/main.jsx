import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ShoppingCar from './pages/ShoppingCar.jsx'
import Exercise from './pages/Exercise.jsx'
import Navbar from './components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={ <App />}/>
          <Route path='/shoppingCar' element={ <ShoppingCar />}/>
          <Route path='/exercises' element={ <Exercise />}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
