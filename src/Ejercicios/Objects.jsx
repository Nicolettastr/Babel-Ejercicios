import React, { useState } from 'react'
import Button from '../components/Button'

const defaultUser = {
    username: '',
    email: '',
    role: 'GUEST'
}

const Objects = () => {

    const [user, setUser] = useState(defaultUser)

    function handleLogin() {
        setUser((prevUser) => {
            const newUser = {...prevUser}
            newUser.username = 'John'
            newUser.email = 'test@test.com'
            newUser.role = 'ADMIN'

            return newUser
        })
       
    }

    function handleLogout() {
        setUser(defaultUser)
    }

    function handleChangeRole() {
        setUser(prevUser => {
            return {
                ...prevUser,
                role: 'USER'
            }
        })
    }

    function handleDataChange(prop, val) {
        setUser(prevUser => {
            return {
                ...prevUser,
                [prop]: val
            }
        })
    }

  return (
    <div className='d-flex'>
        <h2>{user.role}</h2>
        <p>{user.username} {user.email}</p>
        <Button onclick={() => handleLogin()} buttonName={'Login'}/>
        <Button onclick={() => handleLogout()} buttonName={'Logout'}/>
        <Button onclick={() => handleChangeRole()} buttonName={'Change Role'}/>
        <Button onclick={() => handleDataChange('username', 'hola')} buttonName={'Change username'}/>
        <Button onclick={() => handleDataChange('email', 'hola@hola.com')} buttonName={'Change email'}/>
    </div>
  )
}

export default Objects