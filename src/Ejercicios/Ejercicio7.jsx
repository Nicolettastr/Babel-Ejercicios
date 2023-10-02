import React, { useState } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import '../styles/modal.css'

// Diseñar un componente "Panel" que admita hijos y una propiedad "title".

// Por defecto, el panel mostrará un contendor con el título y debajo un botón "Expandir". Cuando el usuario haga click, el botón pasará a "Contraer", y entre el título y el botón aparecerá el contenido que se haya pasado como hijo al componente.

// Cuando se pulse en el botón "Contraer", volverá al estado inicial: el botón renderizará "Mostrar" y los hijos del componente desaparecerán.

const Ejercicio7 = ({children, title}) => {

  const [open, setOpen] = useState(false)

  const handleModal = () => {
    setOpen(prevOpen => !prevOpen)
  }

  return (
    <div className='modalContainer d-flex'>
      <h2>{title}</h2>
      <div className={`body_modal d-flex ${open ? 'modalActivated' : ''}`}>
        {children}
      </div>
      <Button className={'principal'} buttonName={open ? 'Close Modal' : 'Show Modal'} onclick={handleModal}/>
    </div>
  )
}

export default Ejercicio7
