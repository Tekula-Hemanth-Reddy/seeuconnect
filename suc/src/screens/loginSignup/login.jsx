import React, { Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './css/loginSignup.css';
import authContext from '../../context/auth-context';
import history from '../../history/history';

class Login extends Component {
    constructor(props){
        super(props);
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
    }

    static contextType = authContext;

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
                  userType
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
            if(resData.data.login.token){
                this.context.login(resData.data.login.token,resData.data.login.userId,resData.data.login.userType,resData.data.login.tokenExpiration);
                if(resData.data.login.userType==='alumni'){
                    history.push('/alumniProfile');
                }
                if(resData.data.login.userType==='student'){
                    history.push('/profile');
                }
            }
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
                <Form.Control required type="email" id="id1" placeholder="Enter email*"  ref={this.emailEl} autoComplete="off"/>
            </Form.Group>
            <Form.Group className="inputSize" controlId="formBasicPassword">
                <Form.Control required type="password" placeholder="Password*" id="id1" ref={this.passwordEl} />
                {/* pattern="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,50})" */}
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