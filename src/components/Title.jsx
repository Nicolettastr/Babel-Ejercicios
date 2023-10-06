import React from 'react'

const Title = ({
    title,
    className,
    children,
    container
}) => {
  return (
    <div className={container}>
        <h1 className={className}>{title}</h1>
        {children}
    </div>
  )
}

export default Title
