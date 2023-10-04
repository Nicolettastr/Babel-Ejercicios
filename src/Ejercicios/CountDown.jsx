import React from 'react'
import { useRef, useState } from 'react'
import Button from '../components/Button'

// Vamos a crear un componente "Countdown" que acepte una función por props, que será la función que se va a ejecutar cuando finalice la cuenta atrás.
// El componente mostrará:
// 1. El tiempo restante de la cuenta atrás
// 2. Un botón que permite arrancar la cuenta atrás cuando NO está en marcha
// 3. Un botón que permite parar y reiniciar la cuenta atrás cuando SÍ está en marcha

const CountDown = ({
    handleCountDown
}) => {

    const [seconds, setSeconds] = useState(5)
    const intervalRef = useRef(null)

    const handleStartCounter = () => {
        if(intervalRef.current === null) {
          intervalRef.current = setInterval(() => {
            setSeconds((prevState) => prevState - 1)
          }, [1000])
        } 
    }
    
    const handlerStopCounter = () => {
      clearInterval(intervalRef.current)
    }

    const handlerRestartCounter = () => {
      setSeconds(60)
    }

  return (
    <div>
        <div>
            {seconds}
        </div>
        <Button buttonName={'Start'} onclick={handleStartCounter}/>
        <Button buttonName={'Stop'} onclick={handlerStopCounter}/>
        <Button buttonName={'Restart'} onclick={handlerRestartCounter} />
    </div>
  )
}

export default CountDown