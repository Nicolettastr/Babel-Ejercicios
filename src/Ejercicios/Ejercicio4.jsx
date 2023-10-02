// Diseñar un componente que, dado un array local de objetos, renderice por cada elemento:

// 1.Nombre del elemento

// 2.Un botón que al pulsarlo muestre una alerta en el navegador con los datos del elemento seleccionado.

// 3.Cada elemento, entre sus datos, tendrá un color que determinará el color del texto del nombre. Este color se corresponderá con alguno de los colores CSS disponibles.

// 4.Cada elemento, entre sus datos, tendrá un buleano que determinará si el elemento se debe mostrar resaltado (en negrita, con sombreado, con un borde grueso, etc. como se quiera).

import React from 'react'
import Button from '../components/Button'

const Ejercicio4 = () => {

    const ejemplo = [
        {
          name: "Fulanito",
          color: "royalblue",
          checked: true
        },
        {
          name: "Menganito",
          color: "cyan",
          checked: false
        },
        {
          name: "Jhon Doe",
          color: "purple",
          checked: false
        }
      ]

      const handleClick = (item) => {
        alert(`
        Name: ${item.name},
        Color: ${item.color},
        Checked: ${item.checked}
        `)
      }

      const element = ejemplo.map((item) => {
        return <div key={item.name} className='fourthExercise d-flex'>
            <p className={item.checked ? `underline ${item.color}` : `${item.color}`}>{item.name}</p>
            <Button buttonName={item.name} onclick={() => handleClick(item)}/>
        </div>
      })

  return (
    <div className='d-flex-row'>
      {element}
    </div>
  )
}

export default Ejercicio4
