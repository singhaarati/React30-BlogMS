import React from 'react'
import Form from './components/form/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const handleRegister = async (data) => {
        try {
            const response = await axios.post("https://react30.onrender.com/api/user/register", data)
            // console.log(data, "Inside Handle Register")
            // console.log(response)
            if (response.status === 201) {
                navigate('/login')
            } else {
                alert("Registration failed")
            }
        } catch (error) {
            // if (error && error.response && error.response.data) {
            //     alert(error.response.data.message)
            // } // tala ko aauta line means this
            alert(error?.response?.data?.message)
        }
    }
    return (
        <Form type='Register' onSubmit={handleRegister} />
    )
}
export default Register 
