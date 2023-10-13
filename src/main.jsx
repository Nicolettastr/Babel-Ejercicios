import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ShoppingCar from './pages/ShoppingCar.jsx'
import Exercise from './pages/Exercise.jsx'
import Navbar from './components/Navbar.jsx'
import CreateObject from './pages/CreateObject.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import ScrollOnTop from './Ejercicios/ScrollOnTop.jsx'
import News from './pages/News.jsx'
import Design from './pages/Design.jsx'
import Ideas from './pages/Ideas.jsx'
import Sales from './pages/Sales.jsx'
import About from './pages/About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <ScrollOnTop>
        <Navbar/>
          <Routes>
            <Route path='/' element={ <App />}/>
            <Route path='/home' element={ <Home />}>
              <Route path='news' element={ <News />}/>
              <Route path='sales' element={ <Sales />}/>
              <Route path='ideas' element={ <Ideas />}/>
              <Route path='design' element={ <Design />}/>
            </Route>
            <Route path='/shoppingCar' element={ <ShoppingCar />}/>
            <Route path='/createObject' element={ <CreateObject />}/>
            <Route path='/exercises' element={ <Exercise />}/>
            <Route path='/about' element={ <About />}/>
          </Routes>
          <Footer/>
      </ScrollOnTop>
    </BrowserRouter>
  </React.StrictMode>,
)
