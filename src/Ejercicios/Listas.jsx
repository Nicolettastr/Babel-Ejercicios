import React, { useState } from 'react'
import Button from '../components/Button'

const Listas = () => {

    const [list, setList] = useState(["Rick", "Morty", "Jerry", "Beth", "Summer", "Mr. Meeseeks", "Birdperson", "Squanchy", 
    "Tammy", "Unity", "Evil Morty", "Phoenixperson", "Noob Noob", "Abradolf Lincler", 
    "Pickle Rick", "Scary Terry"])

    function insertItem() {
        setList((prevlist) => {
            const copy = [...prevlist, `New element`]
            return copy
        })
    }

    function filterList() {
        setList((prevlist) => {
            return prevlist.filter((element) => element.includes('y') )
        })
    }

    function removeThird() {
        setList((prevlist) => {
            const copy = [...prevlist]
            copy.splice(2, 1)
            return copy
        })
    }

  return (
    <div className='m-2 d-flex-row'>
        <div className='d-flex'>
            <Button 
                onclick={() => insertItem()} 
                buttonName={'Agregar Elemento'}/>
            <Button 
                onclick={() => filterList()} 
                buttonName={'Filtrar Lista'}/>
            <Button 
                onclick={() => removeThird()} 
                buttonName={'Eliminar Tercer Elemento'}/>
        </div>
        <ul>
            {list.map((item) => <li key={item}>{item}</li>)}
        </ul>
    </div>
  )
}

export default Listas