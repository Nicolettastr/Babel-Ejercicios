import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

// Definir un formulario de registro de usuarios que contenga varias entradas: Nombre de usuario, correo electrónico, contraseña y confirmación de confirmación de contraseña.
// 1. Realización simple.
// 2. Aumentando la complejidad

// ** 1. Impedir el registro si alguno de los campos está vacío..
// ** 2. Cómo podemos agregar validaciones a cada una de las entradas?
// ** 3. Mostrar feedback al usuario respecto a las validaciones realizadas.

const Formulario = () => {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [validForm, setValidForm] = useState(false)


  const handleUserName = (event) => {
    setUserName(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handlePasswordConfirm = (event) => {
    setPasswordConfirm(event.target.value)
  }

  const handleFormValidation = (event) => {
    event.preventDefault()

    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    try{
      if(password === passwordConfirm && userName.length > 1 && regex.test(email)) {
        alert('Formulario enviado')
      } else {
        alert('Something went wrong')
      }
    }catch(error) {
      console.error('Something went wrong')
    }
    
  }

  return (
    <div className='d-flex'>
      <form className='d-flex' action="">
        <Input 
          type={'text'} 
          inputName={'user name'} 
          placeholder={'Write your User name'}
          value={userName}
          onChange={handleUserName}
          label={'User name'}
          url={'#'}/>
          <Input 
          type={'email'} 
          inputName={'email'} 
          placeholder={'Write your Email'}
          value={email}
          onChange={handleEmail}
          label={'Email'}
          url={'#'}/>
          <Input 
          type={'password'} 
          inputName={'password'} 
          placeholder={'Write your Password'}
          value={password}
          onChange={handlePassword}
          label={'Password'}
          url={'#'}/>
          <Input 
          type={'password'} 
          inputName={'passwordConfirm'} 
          placeholder={'Confirm your Password'}
          value={passwordConfirm}
          onChange={handlePasswordConfirm}
          label={'Password Confirm'}
          url={'#'}/>
      </form>
      <Button 
        type={'submit'} 
        onclick={handleFormValidation}
        className={'principal'}
        buttonName={'Submit'}/>
    </div>
  )
}

export default Formulario