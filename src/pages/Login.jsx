import React from "react";
import { Button, Form, Card } from "react-bootstrap/esm";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login">
                <Form>
                    <Form.Control type='username' placeholder='Enter your username here'></Form.Control>
                    <Form.Control type='password' placeholder='Password'></Form.Control>
                    <Button className="mt-3" variant='primary' type='submit' >Login</Button>
                </Form>
            <p>Don't have an account? Create one <Link to='/register'>here</Link></p>
        </div>
    )
}

export default Login