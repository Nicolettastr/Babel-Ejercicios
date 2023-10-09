import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage/useLocalStorage'
import Button from '../components/Button'

const News = () => {

  const [state, setState] = useState(1)
  const [localItem, setLocalItem] = useLocalStorage('item', state)

  const handleClick = () => {
    setState(prevState => prevState + 1)
    setLocalItem(state)
  }

  console.log(state)

  return (
    <div className='linkOption'>
      {localItem}
      <Button buttonName={'Add one'} onclick={handleClick} />
    </div>
  )
}

export default News