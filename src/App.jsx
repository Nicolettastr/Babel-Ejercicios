
import './App.css'
import Logo from './components/Logo'
import BannerInfo from './components/BannerInfo'
import Footer from './components/Footer'
import Card from './components/Card'
import Loader from './Ejercicios/Loader'
import { useState, useEffect } from 'react'
import ScrollOnTop from './Ejercicios/ScrollOnTop'
import Input from './components/Input'
import Div from './components/Div'
import Button from './components/Button'
import { FiSearch } from 'react-icons/fi'

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const getObjectArray = localStorage.getItem('objectArrayLocalStorage')
  const objectArray = JSON.parse(getObjectArray)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const handleUserSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  } 

  console.log(objectArray)

  const filterObjects = objectArray.filter((item) => item.name.includes(search))

  console.log('filter', filterObjects)

  return (
      <ScrollOnTop>
        {isLoading ? 
          <Loader />
          :
          <>
            <div className='appContainer'>
              <Logo className={'imgContainer d-flex'}/>
              <BannerInfo/>
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
            <Footer/>
          </>
        }
      </ScrollOnTop>
  )
}

export default App
