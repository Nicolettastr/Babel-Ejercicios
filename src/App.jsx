
import './App.css'
import Logo from './components/Logo'
import BannerInfo from './components/BannerInfo'
import Footer from './components/Footer'
import Ejercicio2 from './components/Ejercicio2'
import Ejercicio3 from './components/Ejercicio3'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Ejercicio4 from './components/Ejercicio4'
import Ejercicio5 from './components/Ejercicio5'
import Switch from './components/Switch'
import Ejercicio7 from './components/Ejercicio7'
import ModalContent from './components/ModalContent'
import Title from './components/Title'

function App() {

  const handleClick = (e) => {
    console.log(e)
  }

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
        <div className='d-flex m-2'>
        <h2>Ejercicio 2 y 3</h2>
          <Ejercicio2/>
          <Ejercicio3/>
        </div>
        <div className='d-flex m-2'>
          <h2>Ejercicio 4 y 5</h2>
          <Ejercicio4/>
          <Ejercicio5 onclick={(e) => handleClick(e)}>
            Principal button
          </Ejercicio5>
          <Ejercicio5 disabled type='secondary' onclick={(e) => handleClick(e)}>
            Secondary button
          </Ejercicio5>
        </div>
        <div className='d-flex m-2'>
          <h2>Ejercicio 6 y 7</h2>
            <Switch/>
            <Ejercicio7>
                <Title className={'modalTitle'} title={'Modal'}/>
                <ModalContent/>
            </Ejercicio7>
        </div>
        <Footer/>
      </>
  )
}

export default App
