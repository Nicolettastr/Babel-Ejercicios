import React from 'react'
import '../styles/button.css'

const Button = ({
  buttonName,
  onclick,
  className,
  type,
  buttonType,
  disabled
}) => {
  return (
    <button disabled={disabled} className={`generalButton ${className} ${type}`} type={buttonType} onClick={onclick}>
        {buttonName}
    </button>
  )
}

export default Button;
