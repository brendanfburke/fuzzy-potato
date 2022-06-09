import React from "react";
import { Button, Form, Card } from "react-bootstrap/esm";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Register = () => {


    const navigate = useNavigate()

    const goLogin = () => {
        let path = '/login'
        navigate(path)
    }

    return (
        <div className="register">
                <Form>
                    <Form.Label>Enter a username here</Form.Label>
                    <Form.Control type='username' placeholder='Ex: guitarseller33'></Form.Control>
                    <Form.Label>Create a unique password that you won't forget</Form.Label>
                    <Form.Control type='password' placeholder='Ex: ILoveGuitars44!'></Form.Control>
                    <Button className="mt-3" onClick={goLogin} variant='primary' type='submit' >Create Account</Button>
                </Form>
            <p>Already have an account? Return to the <Link to='/login'>Login Page</Link></p>
        </div>
    )
}

export default Register