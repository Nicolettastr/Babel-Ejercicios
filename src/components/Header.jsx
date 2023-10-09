import React from 'react'
import Logo from './Logo'
import Title from './Title'
import '../styles/header.css'

const Header = () => {
  return (
    <div className='header d-flex-row'>
        <Title container={'headTitleCont'} className={'headerTitle'} title={'Welcome!'}/>
        <Logo className={'headImage'}/>
    </div>
  )
}

export default Header