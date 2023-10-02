import React from 'react'

const Div = ({title, children}) => {
  return (
    <div className='d-flex m-2 borderContainer'>
        <h2>{title}</h2>
          {children}
    </div>
  )
}

export default Div
