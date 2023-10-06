import React from 'react'
import useForm from '../hooks/useForm/useForm'
import Button from './Button'
import '../styles/form.css'

const Form = ({
    addDataToObjetoArray
}) => {

    const objectData =  {
        id: Math.random() * new Date(),
        date: new Date(),
        image: '',
        name: '',
        price: 0,
        stock: 1,
        gender: '',
        terms_and_conditions: false,
        quantity: 0
        }
  
    const { data, createInputsOnchangeHandler, handleSubmitData} = useForm(objectData)
    
    const genders = ['Hombre', 'Mujer']

    const createInput = Object.entries(objectData).map(([key, value]) => {

        const keyUpperCase = key.charAt(0).toUpperCase() + key.slice(1);

        if(key === 'id' || key === 'date' || key === 'quantity') {
            return 
        }

        return (
            <div key={key} className='d-flex w-200'>
                {key === 'gender' ? genders.map((item) => 
                    <div key={item}>
                        <label 
                            className='textStart w-200'
                            htmlFor={value}>{item}
                        </label>
                        <input
                            required
                            className={
                                key === 'gender' ? '' : 'input'
                            }
                            type={'radio'}
                            name='gender'
                            value={item}
                            {...createInputsOnchangeHandler('gender')}
                        />
                    </div>
                ) : 
                <>
                        <label 
                            className='textStart w-200'
                            htmlFor={key === 'terms_and_conditions' ? 'terms_and_conditions' : key}>                 {keyUpperCase}
                         </label>
                        <input
                            required
                            className={
                                key === 'terms_and_conditions' ? '' : 'input'}
                            type={
                                key === 'text' ? 'text' :
                                key === 'terms_and_conditions' ? 'checkbox' : ''
                            }
                            name={key}
                            value={value}
                            placeholder={`Add ${key}`}
                            {...createInputsOnchangeHandler(key)}
                    />
                </>
                }
            </div>
        )
    })
    

    const handleAddElement = (evento) => {
        handleSubmitData(evento)
        addDataToObjetoArray(data)
    }

    return (
        <>
            <div className='formInputs_Container d-grid g-2'>
                {createInput}
            </div>
            <Button 
                className={'principal'}
                buttonName={'Create item'} 
                onclick={(evento) => handleAddElement(evento)}/>
        </>
  )
}

export default Form
