import React, { useState } from 'react'
import Logo from './Logo'
import Title from './Title';
import Subtitle from './Subtitle';
import Button from './Button'
import '../styles/card.css'
import { AiOutlineShopping } from 'react-icons/ai'

const Card = ({
  filterObjects
}) => {

  const [carItems, setCarItems] = useState([])
  const getObjectArray = localStorage.getItem('objectArrayLocalStorage')
  const objectArray = JSON.parse(getObjectArray) || []
  const getShoppingCarItems = localStorage.getItem('shoppingCarItems')
  const shoppingCarItems = JSON.parse(getShoppingCarItems)

  const addItemToCar = (id) => {
    const selectItem = objectArray.find((item) => item.id === id)
    
    if(!selectItem) {
      return
    }

    const itemAlredyInCar = shoppingCarItems && shoppingCarItems.some((item) => item.id === id)
    const itemAvailableInStock = objectArray && objectArray.some((item) => parseInt(item.stock) === 0)
    
    if(itemAlredyInCar) {
      alert('Item alredy in car')
    }

    if(itemAvailableInStock) {
      alert('No stock available')
      return
    }

        setCarItems((prevState) => {
            const newItem = [...prevState, selectItem]
            localStorage.setItem('shoppingCarItems', JSON.stringify(newItem))
            return newItem
      });
    }

    console.log(objectArray)

      const eachCard = () => {
        return filterObjects.map((item) => {
            return (
                <div 
                  className={`${item.stock === '0' ? 'disabled' : ''} ' cardContainer`} 
                  key={item.id}>
                    <Logo 
                      className='cardImage d-flex'
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
                            subtitle={`
                              ${item.stock <= 0 ? `No Stock Available` : 
                              item.stock >= 1 && item.stock <= 4 ? `Hurry we just have ${item.stock} of these left` :
                              `We have ${item.stock}!`}`}
                             />
                        </div>
                    </div>
                    <div className='AddCarButtonCont flex-end'>
                      <Button disabled={item.stock === '0' ? true : false} className={'addToCarButton'} buttonName={<AiOutlineShopping/>} onclick={() => addItemToCar(item.id)}/>
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
