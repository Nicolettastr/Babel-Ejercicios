import React from 'react'
import '../styles/button.css'

const Button = ({
  buttonName,
  onclick,
  className,
  type
}) => {
  return (
    <button className={`generalButton ${className} ${type}`} onClick={onclick}>
        {buttonName}
    </button>
  )
}

export default Button;
