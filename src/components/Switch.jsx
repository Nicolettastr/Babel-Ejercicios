import React, { useState } from 'react'
import Button from './Button'

const Switch = () => {

    const [active, setActive] = useState(false);

    const handleActive = () => {
        setActive(prevActive => !prevActive)
    }

  return (
    <div className='m-2 d-flex'>
      <p>{active ? 'Active' : 'Inactive'}</p>
      <Button className={active ? 'primary' : 'secondary'} onclick={handleActive} buttonName={active ? 'Active' : 'Inactive'}  />
    </div>
  )
}

export default Switch
