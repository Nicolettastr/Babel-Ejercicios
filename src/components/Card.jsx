import React, { useState } from 'react'
import Logo from './Logo'
import Title from './Title';
import Subtitle from './Subtitle';
import Button from './Button'
import '../styles/card.css'
import { AiOutlineShopping } from 'react-icons/ai'

const Card = () => {

  const [carItems, setCarItems] = useState([])
  const getObjectArray = localStorage.getItem('objectArrayLocalStorage')
  const objectArray = JSON.parse(getObjectArray) || []

  const addItemToCar = (id) => {
    objectArray.filter((item) => {
        if(item.id === id) {
          setCarItems((prevState) => {
            const newItem = [...prevState, item]
            localStorage.setItem('shoppingCarItems', JSON.stringify(newItem))
            return newItem
          })
        }
        
        return setCarItems
      })
    }

      const eachCard = () => {
        return objectArray.map((item) => {
            return (
                <div 
                  className='cardContainer' 
                  key={item.id}>
                    <Logo 
                      className={'cardImage d-flex'} 
                      image={item.image}/>
                    <div>
                        <Title 
                          className={'cardTitle'} 
                          title={`${item.name}`}/>
                        <div>
                          <Subtitle 
                            className={'cardSubtitle'} 
                            subtitle={item.gender}/>
                          <Subtitle 
                            className={'cardSubtitle'} 
                            subtitle={`${item.price}€`}/>
                          <Subtitle 
                            className={'cardSubtitle'} 
                            subtitle={`${item.stock <= 4 ?
                               `Hurry we just have ${item.stock} of these left` :
                               `We have ${item.stock}!`}`}/>
                        </div>
                    </div>
                    <div className='AddCarButtonCont flex-end'>
                      <Button className={'addToCarButton'} buttonName={<AiOutlineShopping/>} onclick={() => addItemToCar(item.id)}/>
                    </div>
                </div>
            )
        })
      }

  return (
    <>
      {eachCard()}
    </>
  )
}

export default Card
