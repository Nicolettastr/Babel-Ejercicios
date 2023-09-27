import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import Button from './Button'

const BannerInfo = () => {
  return (
    <div className='bannerContainer'>
      <Title className={'title'} title={'Lo que esta pasando ahora'} />
      <Subtitle className={'subtitle'} subtitle={'Únete Hoy'} />
      <div className='buttonContainer'>
        <Button buttonName={'Registrarse con Google'} />
        <Button buttonName={'Registrarse con Apple'} />
        <p className='textCenter'>o</p>
        <Button buttonName={'Crear cuenta'} />
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
        <Button buttonName={'Iniciar sesión'} />
      </div>
    </div>
  )
}

export default BannerInfo
