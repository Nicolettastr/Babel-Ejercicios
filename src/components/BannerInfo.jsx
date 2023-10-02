import React from 'react'
import { useState } from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import Button from './Button'
import '../styles/banner.css'
import Loader from '../Ejercicios/Loader'

const BannerInfo = () => {

  const [isLoading, setIsLoading] = useState(false)

  const handleLoading = (event, boolean) => {
    event.preventDefault()

    setIsLoading(boolean)    

    setTimeout(() => {
      setIsLoading(prevIsLoading => !prevIsLoading)
    }, [3000])
  }

  if(isLoading) return <Loader/>

  return (
    <div className='bannerContainer'>
      <Title className={'title'} title={'Lo que esta pasando ahora'} />
      <Subtitle className={'subtitle'} subtitle={'Únete Hoy'} />
      <div className='buttonContainer'>
        <Button buttonName={'Registrarse con Google'} />
        <Button buttonName={'Registrarse con Apple'} />
        <div className='bannerOption'>
            <span className='line'></span>
              <p className='textCenter'>o</p>
            <span className='line'></span>
          </div>
        <Button 
          className={'createAccountButton'} 
          buttonName={'Crear cuenta'} 
          onclick={(event) => handleLoading(event, true)}
          />
        <p className='textStart'>
            Lorem ipsum dolor 
            sit amet 
            <a href="/"> consectetur </a>
            adipisicing
            elit.
            <a href="/">
            Facere provident
            </a>
        </p>
      </div>
      <div className='loginContainer'>
        <Subtitle className={'account'} subtitle={'¿Ya tienes una cuenta?'} />
        <Button className={'loginButton'} buttonName={'Iniciar sesión'} />
      </div>
    </div>
  )
}

export default BannerInfo
