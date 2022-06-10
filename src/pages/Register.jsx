import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Axios from "axios";
import { useState } from "react";

const Register = () => {
    let navigate = useNavigate()

    const goLogin = () => {
        let path='/login'
        navigate(path)
    }

    const URL = 'https://instrument-swap-backend.herokuapp.com/register'

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

    let warningMessage = 'sd'


    const loginRequest = async () => {
        await Axios.post(URL, {
            username: newForm.username,
            password: newForm.password
        }).then((response) => {
            console.log(response)
            goLogin()
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
                
                <input type="submit" value="Register" />
        </form>
        <p>Already have an account? Login <Link to='/register'>here</Link></p>
        </div>
    )
}

export default Register