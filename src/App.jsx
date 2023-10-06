
import './App.css'
import Logo from './components/Logo'
import BannerInfo from './components/BannerInfo'
import Footer from './components/Footer'
import Card from './components/Card'
import Form from './components/Form'
import Loader from './Ejercicios/Loader'
import { useState } from 'react'
import ScrollOnTop from './Ejercicios/ScrollOnTop'

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [objectArray, setObjetoArray] = useState([])

  const addDataToObjetoArray = (newData) => {
    setObjetoArray((prevObjectArray) => {
      const updatedArray = [...prevObjectArray, newData];
      localStorage.setItem('objectArrayLocalStorage', JSON.stringify(updatedArray));
      return updatedArray;
    })
  }

  setTimeout(() => {
    setIsLoading(prevIsLoading => !prevIsLoading)
  }, [5000])


  return (
      <ScrollOnTop>
        {isLoading ? 
          <Loader />
          :
          <>
            <div className='appContainer'>
              <Logo className={'imgContainer d-flex'}/>
              <BannerInfo/>
            </div>
            <div className='form_Container d-flex'>
              <Form addDataToObjetoArray={addDataToObjetoArray}/>
            </div>
            <div className='d-grid g-4'>
              <Card/>
            </div>
            <Footer/>
          </>
        }
      </ScrollOnTop>
  )
}

export default App
