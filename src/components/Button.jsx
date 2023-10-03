import React from 'react'
import '../styles/button.css'

const Button = ({
  buttonName,
  onclick,
  className,
  type,
  buttonType
}) => {
  return (
    <button className={`generalButton ${className} ${type}`} type={buttonType} onClick={onclick}>
        {buttonName}
    </button>
  )
}

export default Button;
