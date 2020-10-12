import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './css/loginSignup.css';

function Login()
{
    return(
        <Form>
        <Form.Label><h2 style={{color:"White"}}>Welcome Back!!</h2></Form.Label>
            <Form.Group className="inputSize" controlId="formBasicEmail">
                <Form.Control required type="email" placeholder="Enter email*" />
            </Form.Group>
            <Form.Group className="inputSize" controlId="formBasicPassword">
                <Form.Control required type="password" placeholder="Password*" />
            </Form.Group>
            <a href="#" style={{textDecoration:"none",float:"right"}}>Forgot Password?</a>
            <Button className="submitButton" variant="primary" type="submit">
                Login
            </Button>
        </Form>

    );
}

export default Login;