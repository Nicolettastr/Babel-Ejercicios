import React from 'react'
import reactLogo from '../assets/react.svg'

const Logo = ({
  className
}) => {
  return (
    <div className={className}>
        <figure>
            <img src={reactLogo} alt="Logo" />
        </figure>
    </div>
  )
}

export default Logo
