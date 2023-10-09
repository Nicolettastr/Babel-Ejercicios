import React, { useEffect, useState } from 'react'
import Button from '../components/Button'

const Ideas = () => {

  const [state, setState] = useState(1)

  function handleGlobalClick(event) {
    console.log('Escuchando evento global', state)
  }

  useEffect(() => {
    window.addEventListener('click', handleGlobalClick)

    return () => {
      window.removeEventListener('click', handleGlobalClick)
    }
  }, [handleGlobalClick])

  const handleClick = () => {
    setState((prevState) => prevState + 1)
  }

  return (
    <div className='linkOption'>
      {`Ideas ${state}`}
      <Button className={'principal m-2'} buttonName={'Add one'} onclick={handleClick}/>
    </div>
  )
}

export default Ideas