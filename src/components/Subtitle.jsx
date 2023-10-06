import React from 'react'

const Subtitle = ({
    subtitle,
    className,
    children,
    container
}) => {
  return (
    <div className={container}>
        <h3 className={className}>{subtitle}</h3>
        {children}
    </div>
  )
}

export default Subtitle
