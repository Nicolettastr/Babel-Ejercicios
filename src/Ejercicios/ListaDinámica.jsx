import React, { useState } from 'react'
import Button from '../components/Button'

// Diseñar un componente "ListaDinámica" en el que definiremos un estado. Este estado almacenará una lista de objetos que tendrán al menos dos propiedades: "id" (número) y "nombre" (cadena de texto). Inicialmente la lista tendrá 3 objetos de muestra predefinidos.

// Se mostrará por JSX una lista (ul/ol) y por cada elemento del estado se mostrará un elemento (li). Cada elemento mostrará al menos su nombre y un botón "Eliminar", que al pulsarlo modificará el estado para eliminar el elemento seleccionado.
// Además, al final de la lista se mostrará un botón "Añadir" que modificará el estado para agregar un elemento con un nombre predefinido y un id aleatorio generado de esta forma: Date.now() * Math.random()

const ListaDinámica = () => {

    const [list, setList] = useState([
        {id: 1, name: 'Paul'},
        {id: 2, name: 'Roco'},
        {id: 3, name: 'Luca'},
    ])

    function handleDeleteElement(id) {
      setList((prevList) => {
        const copy = [...prevList]
        copy.map((item, index) => {
          if(id === item.id) {
            copy.splice(index, 1)
          }
        })
        return copy
      })
    }

    function handleAddElement(name) {
      setList((prevList) => {
        const random =  Date.now() * Math.random()
        const copy = [...prevList, {'id': random, 'name': name}]
        console.log(copy)
        return copy
      })
    }

  return (
    <div className='m-2 d-flex'>
      <ul>
        {list.map((item) => {
          return (
              <li 
                className='d-flex m-2'
                key={item.id}>
                {item.name}
                <Button 
                onclick={() => handleDeleteElement(item.id)} 
                buttonName={'Eliminar'}/>
              </li>
          )
        })}
      </ul>
      <Button 
        className='secondary'
        onclick={() => handleAddElement('newName')} 
        buttonName={'Agregar Elemento'}/>
    </div>
  )
}

export default ListaDinámica