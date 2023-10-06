// Definiremos un hook personalizado que albergue los datos de nuestro formulario. Nos permitirá almacenar los datos de input de tipo texto, número, checkbox y fecha.

// En el componente desde el que lo invoquemos tendremos acceso al objeto que contiene los datos, al controlador del evento "onChange" de cada input, saber si el formulario ha sido manipulado (isDirty) y una función que devuelva el formulario a su punto inicial.

// Este hook aceptará un parámetro, el estado inicial del objeto.

// ** Extra: gestionar también los tipos radio y fichero.

import React, { useState } from 'react'

const useForm = (initialValue) => {

    const [data, setData] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const [gender, setGender] = useState('')

    const handleChange = (event) => {
        const { name, type, checked, value } = event.target;

        const valueIsNumber = parseFloat(value);

        if(type === 'radio') {
            console.log('value', value)
        }
        
        console.log('gender', gender)

        if(type === 'checkbox') {
            setData({
                ...data,
                [name]: checked
            })}else {
                setData({
                    ...data,
                    [name]: `${type === 'number' ? valueIsNumber : value}`
            })
        }

        setIsDirty(true)
    };

    const createInputsOnchangeHandler = (name) => ({
        name, 
        onChange: handleChange,
        value: data[name]
    })

    const resetForm = () => {
        setData(initialValue);
        setIsDirty(false)
    }

    const handleSubmitData = (event) => {
        event.preventDefault()
        resetForm()
    } 

  return {
    data,
    isDirty,
    createInputsOnchangeHandler,
    resetForm,
    handleSubmitData
  }
}

export default useForm