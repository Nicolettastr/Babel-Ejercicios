import React from 'react'
import '../styles/button.css'

const Button = ({
  buttonName,
  onclick,
  className
}) => {
  return (
    <button className={`generalButton ${className}`} onClick={onclick}>
        {buttonName}
    </button>
  )
}

export default Button;
