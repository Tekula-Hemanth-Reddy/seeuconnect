import React, { Component} from 'react';
import {Form,Button,Col} from 'react-bootstrap';
import './css/signup.css';
import history from '../../history/history';
import authContext from '../../context/auth-context';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {userType: ""+props.type};
        this.nameEl = React.createRef();
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
        this.conPassEl = React.createRef();
    }
    static contextType = authContext;

    submitHandler = (event) =>{
        event.preventDefault();
        const Name = ""+this.nameEl.current.value;
        const Email = ""+this.emailEl.current.value;
        const Password = ""+this.passwordEl.current.value;
        const UserType = this.state.userType;
        const ConPassword = ""+this.conPassEl.current.value;
        if(Password.trim() !== ConPassword.trim()){
            return null;
        }

        const requestBody = {
            query: `
            mutation{
                CreateUser(userInput:{name:"${Name}", email: "${Email}", password:"${Password}",userType:"${UserType}"}){
                  _id
                  name
                  email
                  userType
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
            this.setState({idUser: resData.data.CreateUser._id});
            if(this.state.userType==='alumni'){
                if(resData.data.CreateUser._id){
                    this.context.signUp(resData.data.CreateUser._id);
                    history.push('/loading');
                }
            }
            if(this.state.userType==='student'){
                if(resData.data.CreateUser._id){
                    this.context.signUp(resData.data.CreateUser._id);
                    history.push('/stuproloading');
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

                <Form.Group  className="inputSize"  as={Col} controlId="formGridLastName">
                <Form.Control required type="name" placeholder="Name*" ref={this.nameEl} />
                </Form.Group>
        
                <Form.Group  className="inputSize"  as={Col} controlId="formGridEmail">
                <Form.Control required="Enter valid email" type="email" placeholder="Enter email*" ref={this.emailEl} 
                title="Please enter Valid email Address" id="id1"/>
                </Form.Group>

                <Form.Group  className="inputSize"  as={Col} controlId="formGridPassword">
                <Form.Control required type="password" placeholder="Password*" ref={this.passwordEl} 
                id="id1"
                 pattern="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,50})"/>
                </Form.Group>

                <Form.Group  className="inputSize"  as={Col} controlId="formGridPassword2">
                <Form.Control required type="Password" placeholder="Confirm Password*" 
                ref={this.conPassEl}  pattern="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,50})" 
                id="id1" />
                </Form.Group>
        
                <Button className="submitButton" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default SignUp;