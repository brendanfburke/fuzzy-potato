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

    const [user, setUser] = useState(null)
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

    // const getUsers = async () => {
    //     const response = await fetch(URL)
    //     const data = await response.json()
    //     setUser(data)
    //     console.log(data)
    // };
    // useEffect(() => {
    //     getUsers()
        
    // }, [])

    // const loginRequest = async (userAccount) => {
    //     await fetch(URL, {
    //         method: "post",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //             body: JSON.stringify(userAccount),
    //     }) 
    //     .then((res) => {
    //         console.log(res)
    //     })
        
    // };

    const warningMessage = ''


    const loginRequest = async () => {
        await Axios.post(URL, {
            username: newForm.username,
            password: newForm.password
        }).then((response) => {
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
            if (response.data.isLoggedIn === true) {
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