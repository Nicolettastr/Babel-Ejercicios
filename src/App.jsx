
import './App.css'
import Logo from './components/Logo'
import BannerInfo from './components/BannerInfo'
import Card from './components/Card'
import Loader from './Ejercicios/Loader'
import { useState, useEffect } from 'react'

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  console.log(import.meta.env.VITE_VARIABLE)

  return (
        <>
        {isLoading ? 
          <Loader />
          :
          <>
            <div className='appContainer'>
              <Logo className={'imgContainer d-flex'}/>
              <BannerInfo/>
            </div>
          </>
        }
        </>
  )
}

export default App
