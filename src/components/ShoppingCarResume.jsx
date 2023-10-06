import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import Button from '../components/Button'

const ShoppingCarResume = ({
    shoppingCarItems
}) => {

    const shipPrice = 5
    const totalPrice = shoppingCarItems.reduce((acumulator, item) => {
        return acumulator + (item.price * item.quantity)
    }, 0)

  return (
    <div className='shoppingResumeContainer'>
      <div>
        <Title title={'Resumen'} />
        {shoppingCarItems.map((item) => {
            return (
                <Subtitle 
                    container={'shoppingSubContainer'}
                    className={'cardSubtitle resumeSub'} 
                    subtitle={item.name}>
                        {`${item.price * item.quantity}€`}
                </Subtitle>
            )
        })}
        <Subtitle 
            container={'shoppingSubContainer'}
            className={'cardSubtitle resumeSub'} 
            subtitle={'Gastos de envío y gestión'}>
                {totalPrice < 100 ? `${shipPrice}€` : 'Envío gratuito'}
        </Subtitle>
        <Subtitle 
            container={'shoppingSubContainer border'}
            className={'cardSubtitle totalSub'} 
            subtitle={'Total'}>
                <div className='d-flex pad'>
                    <span className='totalSpan'>{`${totalPrice}€`}</span>
                    <span className='totalSpan'>{totalPrice < 100 ? `${shipPrice}€` : '0€'}</span>
                    <span className='totalSpan'>{totalPrice < 100 ? `${totalPrice + shipPrice}€` : totalPrice}</span>
                </div>
        </Subtitle>
      </div>
      <div className='d-flex'>
            <Button className={'secondary'} buttonName={'Pasar por caja'} />
      </div>
    </div>
  )
}

export default ShoppingCarResume