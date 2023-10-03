import React from 'react'
import '../styles/input.css'

const Input = ({
    type,
    inputName,
    placeholder,
    value,
    onChange,
    label,
    url,
    className
}) => {
  return (
    <>
        <label className='inputLabel' htmlFor={url}>{label}</label>
        <input className={`generalInput ${className}`} type={type} name={inputName} placeholder={placeholder} value={value} onChange={onChange} required/>
    </>
  )
}

export default Input