import React from 'react'
import Form from './components/form/Form'

const Register = () => {
    const handleRegister = (data) => {
        console.log(data,"Inside Handle")
    }
    return (
        <Form type='Register' onSubmit={handleRegister} />
    )
}

export default Register
