import React from 'react'
import '../styles/button.css'

// Diseñar un componente "Botón" que acepte al menos tres props:

// "type": su valor puede ser "primary" o "secondary", siendo "primary" su valor por defecto. Influirá en la estética del botón.
// "disabled": su valor puede ser true o false, siendo false su valor por defecto. Determina si el botón está o no deshabilitado.
// "onClick": su valor es una función que no recibe ningún parámetro. Es la función que se ejecuta cuando se hace click.

const Button = ({
  buttonName,
  onclick,
  type = 'primary',
  disabled = false,
  children
}) => {
  return (
    <button className={`generalButton ${type}`} onClick={onclick} disabled={disabled}>
        {children}
    </button>
  )
}

export default Button;