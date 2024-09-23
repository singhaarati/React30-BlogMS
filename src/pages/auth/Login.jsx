import React from 'react'
import Form from './components/form/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const handleLogin = async (data) => {
        try {
            console.log(data, "Inside Handle Login")
            const response = await axios.post("https://react30.onrender.com/api/user/login", data)

            // console.log(response)
            if (response.status === 200) {
                navigate('/')
            } else {
                alert("Login failed")
            }
        } catch (error) {
            // if (error && error.response && error.response.data) {
            //     alert(error.response.data.message)
            // }
            alert(error?.response?.data?.message)
        }
    }
}
return (
    <Form type='Login' onSubmit={handleLogin} />
)

export default Login
