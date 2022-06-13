import React from "react";
import { useNavigate } from "react-router";

const FirstTime = () => {

    const navigate = useNavigate()

    const goHome = () => {
        let path = '/'
        navigate(path)
    }
    
    const goSetupAccount = () => {
        let path = '/create_account'
        navigate(path)
    }

    return (
        <div className="first-login">
            <h2>Is this your first time logging in?</h2>
            <button onClick={goSetupAccount} >Yes</button>
            <button onClick={goHome} >No</button>
        </div>
    )
}

export default FirstTime