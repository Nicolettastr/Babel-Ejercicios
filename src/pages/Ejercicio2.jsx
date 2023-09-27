import React from 'react'

const Ejercicio2 = () => {

    const principalAction = () => {
        console.log('Principal action');
    };

    const secondaryAction = (evento, texto) => {
        console.log('este es el texto', texto)
        console.log(evento);
    }

  return (
    <div>
      <button onClick={() => principalAction()}>
            principalAction
      </button>
      <button onClick={(e) => secondaryAction(e, 'secondary action')}>
            secondaryAction
      </button>
    </div>
  )
}

export default Ejercicio2
