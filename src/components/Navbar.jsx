import React from 'react'
import Logo from './Logo'
import '../styles/navbar.css'
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {

    const links = [
        {name: 'Home', link: '/home'},
        {name: 'About', link: '/about'},
        {name: 'Cards', link: '#'},
        {name: 'Create Item', link: '/createObject'},
        {name: <AiOutlineShopping/>, link: '/shoppingCar'}
    ]

    const showLinks = () => {
        return links.map((item) => {
            return <li 
              key={item.name}><a href={item.link}>{item.name}</a></li>
        })
    }

  return (
    <div className='navbar'>
      <a href="/">
        <Logo className={'NavbarLogo'}/>
      </a>
      <div className='navbarLinks'>
        <ul>
            {showLinks()}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
