import React, { Component} from 'react';
import {Form,Button,Col,Spinner} from 'react-bootstrap';
import './css/signup.css';
import history from '../../history/history';
import * as FAIcons from 'react-icons/fa';
import authContext from '../../context/auth-context';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {isSet:true,
            userType: ""+props.type,
            passwordShown:false,
            passwordShown1:false,
        };
        this.nameEl = React.createRef();
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
        this.conPassEl = React.createRef();
    }
    static contextType = authContext;

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

    showPassword1()
    {
        if(!this.state.passwordShown1)
        {
            this.setState(
                {
                    passwordShown1:true,
                }
            );
        }
        else
        {
            this.setState(
                {
                    passwordShown1:false,
                }
            );
        }
        
    }
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
        this.setState({
            isSet:false,
        });

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
            this.setState({
                isSet:true,
            });
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
            history.push('/signUpFailure');
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
                <Form.Control required type={this.state.passwordShown ? "text" : "password"} placeholder="Password*" ref={this.passwordEl} 
                id="id1"
                 pattern="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,50})" 
                 title="Password should contain(1(A-Z),1(a-z),1(0-9),1($,%,&))"/>
                </Form.Group>
                <i onClick={this.showPassword.bind(this)}><FAIcons.FaEye/></i>

                <Form.Group  className="inputSize"  as={Col} controlId="formGridPassword2">
                <Form.Control required type={this.state.passwordShown1 ? "text" : "password"} placeholder="Confirm Password*" 
                title="Password should contain(1(A-Z),1(a-z),1(0-9),1($,%,&))"
                ref={this.conPassEl}  pattern="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,50})" 
                id="id1" />
                <i onClick={this.showPassword1.bind(this)} style={{marginTop:"-13px"}}><FAIcons.FaEye/></i>
              
                </Form.Group>
                {
                    this.state.isSet && <Button className="submitButton" variant="primary" type="submit">
                        Submit
                    </Button>
                }
                {
                    !this.state.isSet && <Spinner animation="border" className="signUpSpinnerBorder" role="status">
                            <span className="sr-only" style={{color:"#61dafb"}}></span>
                        </Spinner>
                }
            </Form>
        )
    }
}

export default SignUp;