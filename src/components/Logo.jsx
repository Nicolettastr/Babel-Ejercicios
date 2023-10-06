import React from 'react'
import reactLogo from '../assets/react.svg'

const Logo = ({
  className,
  image = reactLogo
}) => {
  return (
    <div className={className}>
        <figure>
            <img src={image} alt="Logo" />
        </figure>
    </div>
  )
}

export default Logo
