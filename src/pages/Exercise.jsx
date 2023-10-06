import React from 'react'
import Ejercicio2 from '../Ejercicios/Ejercicio2'
import Ejercicio3 from '../Ejercicios/Ejercicio3'
import Ejercicio4 from '../Ejercicios/Ejercicio4'
import Ejercicio5 from '../Ejercicios/Ejercicio5'
import Ejercicio7 from '../Ejercicios/Ejercicio7'
import Ejercicio9 from '../Ejercicios/Ejercicio9'
import Title from '../components/Title'
import Switch from '../Ejercicios/Switch'
import ModalContent from '../components/ModalContent'
import Listas from '../Ejercicios/Listas'
import Objects from '../Ejercicios/Objects'
import ListaDinámica from '../Ejercicios/ListaDinámica'
import Div from '../components/div'
import CountDown from '../Ejercicios/CountDown'
import Formulario from '../Ejercicios/Formulario'

const Exercise = () => {

    const handleClick = (e) => {
        console.log(e)
      }
    
      const handleCountDown = () => {
        alert('Time´s up!')
      }

  return (
    <div>
        <Div>
          <Title title={'Ejercicio 2 y 3'}/>
          <Ejercicio2/>
          <Ejercicio3/>
        </Div>
        <Div>
          <Title title={'Ejercicio 4 y 5'}/>
          <Ejercicio4/>
          <Ejercicio5 
            onclick={(e) => handleClick(e)}>
            Principal button
          </Ejercicio5>
        </Div>
        <Div>
          <Title title={'Ejercicio 6 y 7'}/>
          <Switch/>
            <Ejercicio7 title={'Modal'}>
                <ModalContent/>
            </Ejercicio7>
        </Div>
        <Div>
          <Title title={'Listas y Objetos'}/>
          <Listas/>
          <Objects/>
        </Div>
        <Div>
          <Title title={'Ejercicio 8 y 9'}/>
          <ListaDinámica/>
          <Ejercicio9/>
        </Div>
        <Div>
          <Title title={'Form'} />
          <Formulario/>
        </Div>
        <Div>
          <Title title={'CountDown'} />
          <CountDown handleCountDown={handleCountDown} />
        </Div>
    </div>
  )
}

export default Exercise
