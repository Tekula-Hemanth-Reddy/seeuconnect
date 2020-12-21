import React, { Component} from 'react';
import {Form,Button,Spinner} from 'react-bootstrap';
import * as FAIcons from 'react-icons/fa';
import './css/loginSignup.css';
import authContext from '../../context/auth-context';
import history from '../../history/history';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSet:true,
            userType: ""+props.type,
            passwordShown:false,
        };
     
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
    
    }

    showPassword()
    {
        if(!this.state.passwordShown)
        {
            this.setState(
                {
                    passwordShown:true,
                }
            );
        }
        else
        {
            this.setState(
                {
                    passwordShown:false,
                }
            );
        }
        
    }

    static contextType = authContext;
    submitHandler = (event) =>{
        event.preventDefault();
        const Email = ""+this.emailEl.current.value;
        const Password = ""+this.passwordEl.current.value;
        this.setState({
            isSet:false,
        });

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
            this.setState({
                isSet:true,
            });
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
                   history.push('/alumniFailure');
                }
                else if(resData.data.login.userType==='student' && this.state.userType==='alumni')
                {
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
                <Form.Control required type="email" id="id1" placeholder="Enter email*"  ref={this.emailEl} autoComplete="off"/>
            </Form.Group>
            <Form.Group className="inputSize" controlId="formBasicPassword">
                <Form.Control required type={this.state.passwordShown ? "text" : "password"} placeholder="Password*" id="id1"
                 ref={this.passwordEl}
                 pattern="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,50})" 
                 title="Password should contain(1(A-Z),1(a-z),1(0-9),1($,%,&))" />
                 <i onClick={this.showPassword.bind(this)}><FAIcons.FaEye/></i>
               
            </Form.Group>
            
            {/* <a href="#" style={{textDecoration:"none",float:"right"}}>Forgot Password?</a> */}
            {
                this.state.isSet && <Button className="submitButton" type="submit">
                Login
            </Button>
            }
            {
                !this.state.isSet && <Spinner animation="border" className="loginSpinnerBorder" role="status">
                        <span className="sr-only" style={{color:"#61dafb"}}></span>
                    </Spinner>
            }
            </Form>
        )
    }
}

export default Login;