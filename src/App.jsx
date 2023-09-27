
import './App.css'
import Logo from './components/Logo'
import BannerInfo from './components/BannerInfo'
import Footer from './components/Footer'
import Ejercicio2 from './components/Ejercicio2'
import Ejercicio3 from './components/Ejercicio3'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {

  return (
      <>
        <Navbar/>
        <div className='appContainer'>
          <Logo className={'imgContainer d-flex'}/>
          <BannerInfo/>
        </div>
        <div className='d-grid'>
          <Card/>
        </div>
        <div className='d-flex secondContainer'>
          <Ejercicio2/>
          <Ejercicio3/>
        </div>
        <Footer/>
      </>
  )
}

export default App
