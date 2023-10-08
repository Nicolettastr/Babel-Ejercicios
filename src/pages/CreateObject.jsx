import React, { useState } from 'react'
import Form from '../components/Form'

const CreateObject = () => {

    const [objectArray, setObjetoArray] = useState([])

    const addDataToObjetoArray = (newData) => {
      setObjetoArray((prevObjectArray) => {
        const updatedArray = [...prevObjectArray, newData];
        localStorage.setItem('objectArrayLocalStorage', JSON.stringify(updatedArray));
        return updatedArray;
      })
    }

    console.log(objectArray)

  return (
    <div>
        <div className='form_Container d-flex'>
              <Form addDataToObjetoArray={addDataToObjetoArray}/>
            </div>
    </div>
  )
}

export default CreateObject