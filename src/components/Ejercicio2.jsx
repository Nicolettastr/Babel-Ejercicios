import React from 'react'
import Button from './Button';

const Ejercicio2 = () => {

    const principalAction = () => {
        console.log('Principal action');
    };

    const secondaryAction = (evento, texto) => {
        console.log('este es el texto', texto)
        console.log(evento);
    }

  return (
    <div className='d-flex secondExcercise'>
      <Button className={'principal'} buttonName={'principal Action'} onclick={() => principalAction()} />
      <Button className={'secondary'} buttonName={'secondary Action'} onclick={(e) => secondaryAction(e, 'secondary action')} />
    </div>
  )
}

export default Ejercicio2
