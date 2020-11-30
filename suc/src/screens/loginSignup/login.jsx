import React, { Component,useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StudentFailure from '../../screens/failureScreens/component/studentFailure';
import './css/loginSignup.css';
import authContext from '../../context/auth-context';
import history from '../../history/history';

class Login extends Component {

    
  
    constructor(props){
        super(props);
        this.state = {userType: ""+props.type,mes:" "};
     
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
                if(resData.data.login.userType==='alumni' && this.state.userType==='alumni'){
                    history.push('/alumniProfile');
                }
                else if(resData.data.login.userType==='student' && this.state.userType==='student'){
                    history.push('/profile');
                }
                else if(resData.data.login.userType==='alumni' && this.state.userType==='student')
                {
                    //here he should login through alumni; but he came login through student;
                   
                   history.push('/alumniFailure');
                    

                }
                else if(resData.data.login.userType==='student' && this.state.userType==='alumni')
                {
                    //here he should login through student; but he came login through alumni;
                    history.push('/studentFailure');
                  

                }
                
            }
        })
        .catch(err => {
            history.push('/failure');
        });
    };

   
    render(){
      
        return(
            <Form onSubmit={this.submitHandler} >
                <Form.Label><h2 style={{color:"White"}}>Welcome Back!!</h2></Form.Label>
            <Form.Group className="inputSize" controlId="formBasicEmail">
                <Form.Control required type="email" id="id1" placeholder="Enter email*"  ref={this.emailEl} />
            </Form.Group>
            <Form.Group className="inputSize" controlId="formBasicPassword">
                <Form.Control required type="password" placeholder="Password*" id="id1" ref={this.passwordEl} />
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