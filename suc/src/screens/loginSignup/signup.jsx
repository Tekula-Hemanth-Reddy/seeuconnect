import React, { Component} from 'react';
import {Form,Button,Col} from 'react-bootstrap';
import './css/signup.css';
import history from '../../history/history';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.firstEl = React.createRef();
        this.lastEl = React.createRef();
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
        this.conPassEl = React.createRef();
    }

    submitHandler = (event) =>{
        event.preventDefault();
        const First = ""+this.firstEl.current.value;
        const Last = ""+this.lastEl.current.value;
        const Email = ""+this.emailEl.current.value;
        const Password = ""+this.passwordEl.current.value;
        const ConPassword = ""+this.conPassEl.current.value;
        if(Password.trim() !== ConPassword.trim()){
            return null;
        }

        const requestBody = {
            query: `
            mutation{
                CreateUser(userInput:{firstName:"${First}", lastName:"${Last}", email: "${Email}", password:"${Password}"}){
                  firstName
                  lastName
                  email
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
            history.push('/student')
        })
        .catch(err => {
            console.log(err);
        });
    };
    render(){
        return(
            <Form onSubmit={this.submitHandler}>
                <Form.Row>
                <Form.Group  className="firstName"  as={Col} controlId="formGridFirstName">
                <Form.Control required type="name" placeholder="First Name*" ref={this.firstEl} />
                </Form.Group>

                <Form.Group  className="lastName"  as={Col} controlId="formGridLastName">
                <Form.Control required type="name" placeholder="Last Name*" ref={this.lastEl} />
                </Form.Group>
                </Form.Row>
        
                <Form.Group  className="inputSize"  as={Col} controlId="formGridEmail">
                <Form.Control required type="email" placeholder="Enter email*" ref={this.emailEl} />
                </Form.Group>

                <Form.Group  className="inputSize"  as={Col} controlId="formGridPassword">
                <Form.Control required type="password" placeholder="Password*" ref={this.passwordEl} />
                </Form.Group>

                <Form.Group  className="inputSize"  as={Col} controlId="formGridPassword2">
                <Form.Control required type="Password" placeholder="Confirm Password*" ref={this.conPassEl} />
                </Form.Group>
        
                <Button className="submitButton" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default SignUp;