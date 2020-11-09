import React, { Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './css/loginSignup.css';

// function Login()
// {
//     return(
        // <Form>
        // <Form.Label><h2 style={{color:"White"}}>Welcome Back!!</h2></Form.Label>
        //     <Form.Group className="inputSize" controlId="formBasicEmail">
        //         <Form.Control required type="email" placeholder="Enter email*" />
        //     </Form.Group>
        //     <Form.Group className="inputSize" controlId="formBasicPassword">
        //         <Form.Control required type="password" placeholder="Password*" />
        //     </Form.Group>
        //     <a href="#" style={{textDecoration:"none",float:"right"}}>Forgot Password?</a>
        //     <Button className="submitButton" type="submit">
        //         Login
        //     </Button>
        // </Form>

//     );
// }

class Login extends Component {
    constructor(props){
        super(props);
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
    }

    submitHandler = (event) =>{
        event.preventDefault();
        const Email = ""+this.emailEl.current.value;
        const Password = ""+this.passwordEl.current.value;

        const requestBody = {
            query: `
            query{
                login(email:"${Email}",password:"${Password}"){
                  userId
                  token
                  tokenExpiration
                }
              }
            `
        };

        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.status!== 200 && res.status!== 201){
                throw new Error('Failed!');
            }
            return res.json();
        })
        .then(resData => {
            console.log(resData);
        })
        .catch(err => {
            console.log(err);
        });
    };
    render(){
        return(
            <Form onSubmit={this.submitHandler}>
                <Form.Label><h2 style={{color:"White"}}>Welcome Back!!</h2></Form.Label>
            <Form.Group className="inputSize" controlId="formBasicEmail">
                <Form.Control required type="email" placeholder="Enter email*"  ref={this.emailEl}/>
            </Form.Group>
            <Form.Group className="inputSize" controlId="formBasicPassword">
                <Form.Control required type="password" placeholder="Password*"  ref={this.passwordEl}/>
            </Form.Group>
            <a href="#" style={{textDecoration:"none",float:"right"}}>Forgot Password?</a>
            <Button className="submitButton" type="submit">
                Login
            </Button>
            </Form>
        )
    }
}

export default Login;