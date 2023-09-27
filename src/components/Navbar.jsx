import React from 'react'
import Logo from './Logo'
import '../styles/navbar.css'

const Navbar = () => {

    const links = [
        {name: 'Home', link: '#'},
        {name: 'About', link: '#'},
        {name: 'Cards', link: '#'},
        {name: 'Contact', link: '#'}
    ]

    const showLinks = () => {
        return links.map((item) => {
            return <li key={item}><a href={item.link}>{item.name}</a></li>
        })
    }

  return (
    <div className='navbar'>
      <Logo className={'NavbarLogo'}/>
      <div className='navbarLinks'>
        <ul>
            {showLinks()}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
