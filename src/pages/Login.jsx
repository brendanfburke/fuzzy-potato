import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Axios from "axios"



const Login = () => {

    let navigate = useNavigate()

    const goHome = () => {
        let path='/'
        navigate(path)
    }

    const URL = 'https://instrument-swap-backend.herokuapp.com/login'

    const [newForm, setNewForm] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loginRequest(newForm);
        setNewForm({
            username: '',
            password: '',
        })
    }

    const warningMessage = ''


    const loginRequest = async () => {
        await Axios.post(URL, {
            username: newForm.username,
            password: newForm.password
        }).then((response) => {
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
            if (response) {
                goHome()
            } else {
                warningMessage = 'incorrect username or password, please try again or register a new account'
            }
        })
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit} className='new-account-form'>
                <label htmlFor="user_id">Username</label>
                <input
                    type="text"
                    value={newForm.username}
                    name="username"
                    placeholder="Ex: georgeharrison"
                    onChange={handleChange}
                />
                <label htmlFor="first_name">Password</label>
                <input
                    type="text"
                    value={newForm.password}
                    name="password"
                    placeholder="Ex: beatle2"
                    onChange={handleChange}
                />
                
                <input type="submit" value="Login" />
        </form>
        <p>{warningMessage}</p>
        <p>Don't have an account? Create one <Link to='/register'>here</Link></p>
        </div>
    )
}

export default Login