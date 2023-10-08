import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import ShoppingCarResume from '../components/ShoppingCarResume';
import Button from '../components/Button'
import { BsTrashFill } from 'react-icons/bs'
import Input from '../components/Input';
import '../styles/shoppingCar.css'

const ShoppingCar = () => {
  const getShoppingCarItems = localStorage.getItem('shoppingCarItems');
  const initialShoppingCarItems = JSON.parse(getShoppingCarItems) || [];
  const [shoppingCarItems, setShoppingCarItems] = useState(initialShoppingCarItems);

  const handleQuantity = (event, id) => {
    const newQuantity = parseInt(event.target.value);

    const updatedShoppingCarItems = shoppingCarItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });

    setShoppingCarItems(updatedShoppingCarItems);
    localStorage.setItem('shoppingCarItems', JSON.stringify(updatedShoppingCarItems));
  };
    
  const handleDeleteItem = (id) => {
    const newList = shoppingCarItems.filter((item) => item.id != id)
    localStorage.setItem('shoppingCarItems', JSON.stringify(newList));
    return setShoppingCarItems(newList)
  }

  console.log(shoppingCarItems)

  const showShoppingCarItems = shoppingCarItems.map((item) => {
    return (
      <div key={`${item.id}${item.name}`} className='shoppingCarCard'>
        <div>
          <Logo image={item.image} className={'shoppingCarImage'} />
        </div>
        <div className='w-100'>
          <div className='shoppingCarBody'>
            <Title className={'cardTitle borderCard'} title={item.name} />
            <Subtitle className={'cardSubtitle subCard'} subtitle={'Cantidad'} />
            <Input 
              type={'number'} 
              className={'resumeInput'} 
              onChange={(event) => handleQuantity(event, item.id)}
              value={item.quantity || 1}/>
            <Subtitle className={'cardSubtitle'} subtitle={`Precio ${item.price}€`} />
          </div>
          <div className='d-flex-row totalPrice'>
            <Subtitle className={'cardSubtitle'} subtitle={`Total a pagar ${item.price * (item.quantity || 1)}€`} />
            <Button
              className={'deleteButton'}
              onclick={() => handleDeleteItem(item.id)}
              buttonName={
                <BsTrashFill/>
              }/>
          </div>
        </div>
      </div>
    );
  });

  
  return (
    <div className='shoppingResume'>
      <div className='shoppinCarMainContainer flex-start'>
        {shoppingCarItems.lenght <= 0 ? 'No tienes nada en tu carrito' : showShoppingCarItems}
      </div>
      <ShoppingCarResume shoppingCarItems={shoppingCarItems} />
    </div>
  );
};

export default ShoppingCar;
