import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"
import { useState, useEffect } from "react";

const Nav = () => {

    const currentToken = localStorage.getItem('token')
    const [loginStatus, setLoginStatus] = useState(null)


    useEffect(() => {
        if (!currentToken) {
            setLoginStatus('Log In')
        } else {
            setLoginStatus('Logout')
        }

    }, [])


    const logout = () => {
        localStorage.clear()
    }

    return (
        <div className="nav-container">
            <Link className="nav-link" to='/' >
                <Button>Home</Button>
            </Link>
            <Link className="nav-link" to='/new' >
                <Button>New Listing</Button>
            </Link>
            <Link className="nav-link" to='/myaccount' >
                <Button>My Account</Button>
            </Link>
            <Link className="nav-link" to='/login' >
                <Button onClick={logout} >
                    {loginStatus}
                </Button>
            </Link>
        </div>
    )
}

export default Nav