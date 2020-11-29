import React, { Component,useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import './css/loginSignup.css';
import authContext from '../../context/auth-context';
import history from '../../history/history';

class Login extends Component {

    
    static show=false;
    static message=" ";

    
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
            console.log(resData);
            console.log(this.state);
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
                    this.show=true;
                    this.message="You are Alumni; Please login through Alumni";
                    this.state.mes="You are Alumni; Please login through Alumni";
                    this.setState({
                        mes:"Bla bla"
                    });
                    console.log(this.message);
                    

                }
                else if(resData.data.login.userType==='student' && this.state.userType==='alumni')
                {
                    //here he should login through student; but he came login through alumni;
                    this.show=true;
                    this.message="You are Student; Please login through Student";
                    console.log(this.message);
                   return(
                        <div>
                            <Alert show={true} variant="success">
                            <Alert.Heading>How's it going?!</Alert.Heading>
                            <p>
                                {this.message}
                            </p>
                            <hr />
                            </Alert>
                    
                        </div>
                   );

                }
            }
        })
        .catch(err => {
            console.log(err);
        });
    };

   
    render(){
       console.log(this.state.mes + "2");
        return(
            <Form onSubmit={this.submitHandler} >
                <Form.Label><h2 style={{color:"White"}}>Welcome Back!!</h2></Form.Label>
            <Form.Group className="inputSize" controlId="formBasicEmail">
                <Form.Control required type="email" id="id1" placeholder="Enter email*"  ref={this.emailEl} />
            </Form.Group>
            <Form.Group className="inputSize" controlId="formBasicPassword">
                <Form.Control required type="password" placeholder="Password*" id="id1" ref={this.passwordEl} />
                {/* pattern="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,50})" */}
            </Form.Group>
            <a href="#" style={{textDecoration:"none",float:"right"}}>Forgot Password?</a>
            <Button className="submitButton" type="submit">
                Login
            </Button>
            <p style={{color:"white"}}>{this.state.mes}</p>
            <Modal show={this.show} onHide={()=>{this.show=false}}> 
                <Modal.Header closeButton>
                <Modal.Title>Oops</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.message}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{this.show=false}}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{this.show=false}}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            </Form>
        )
    }
}

export default Login;