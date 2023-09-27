
import './App.css'
import Logo from './components/Logo'
import BannerInfo from './components/BannerInfo'
import Footer from './components/Footer'
import Ejercicio2 from './pages/Ejercicio2'

function App() {

  return (
      <>
        <div className='appContainer'>
          <Logo/>
          <BannerInfo/>
        </div>
        <Footer/>
        <Ejercicio2/>
      </>
  )
}

export default App
