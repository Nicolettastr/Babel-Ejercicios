import React, { useState } from 'react'
import Button from '../components/Button'

// Crear un componente y capturar si tiene el ratón por encima y si tiene o no tiene el foco. Aplicaremos estilos en función de cada uno de los posibles estados del elemento.

// Huelga decir que esto es realizable mediante CSS con los selectores :hover y :focus pero lo vamos a hacer de forma programática para tener el control total del comportamiento del componente.

const Ejercicio9 = () => {

    const [over, setOver] = useState(false)
    const [focus, setFocus] = useState(false)

    function handleOnMouse(bolean) {
        setOver(bolean)
    }

    function handleBlur(bolean) {
        setFocus(bolean)
    }


  return (
    <div 
        onMouseOver={() => handleOnMouse(true)} 
        onMouseOut={() => handleOnMouse(false)}
        className={`d-flex E9_container ${over ? 'blue' : 'green'}`}>
        <input 
            type="text" 
            onBlur={() => handleBlur(true)}
            onFocus={() => handleBlur(false)}
            className={`input ${focus ? 'small' : 'big'}`}/>
    </div>
  )
}

export default Ejercicio9