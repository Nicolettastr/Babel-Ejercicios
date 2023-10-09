import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Card from '../components/Card'
import { FiSearch } from 'react-icons/fi'
import Header from '../components/Header'
import { Outlet } from 'react-router'

const Home = () => {

    const getObjectArray = localStorage.getItem('objectArrayLocalStorage')
    const objectArray = JSON.parse(getObjectArray)
    const [search, setSearch] = useState('')
    const nestedLinks = ['news', 'sales', 'ideas', 'design']

    const filterObjects = objectArray.filter((item) => item.name.includes(search))

    const handleUserSearch = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value)
      } 

    const links = nestedLinks.map((item) => {
      return (
        <li className=''>
          <a href={`/home/${item}`}>
            {item.toUpperCase()}
          </a>
        </li>
      )
    })
    

  return (
    <div className='d-flex'>
      <Header/>
      <div className='d-flex h-90'>
          <div className='d-flex-row'>
            <ul className='links'>
              {links}
            </ul>
            <Outlet/>
          </div>
          <div className='d-flex-row searchContainer'>
              <Input 
                  placeholder={'Search'} 
                  name={'search'} 
                  value={search} 
                  onChange={(event) => handleUserSearch(event, 'search')}/>
              <Button className={'searchButton'} buttonName={<FiSearch/>}/>
          </div>
          <div className='d-grid g-4'>
              <Card filterObjects={filterObjects} />
          </div>
      </div>
    </div>
   
  )
}

export default Home