import React from 'react';
import {Form,Button,Col} from 'react-bootstrap';
import './css/signup.css';

function SignUp()
{
    return(
        <Form>
                <Form.Row>
                <Form.Group  className="firstName"  as={Col} controlId="formGridFirstName">
                <Form.Control required type="name" placeholder="First Name*" />
                </Form.Group>

                <Form.Group  className="lastName"  as={Col} controlId="formGridLastName">
                <Form.Control required type="name" placeholder="Last Name*" />
                </Form.Group>
                </Form.Row>
          
                <Form.Group  className="inputSize"  as={Col} controlId="formGridEmail">
                <Form.Control required type="email" placeholder="Enter email*" />
                </Form.Group>

                <Form.Group  className="inputSize"  as={Col} controlId="formGridPassword">
                <Form.Control required type="password" placeholder="Password*" />
                </Form.Group>

                <Form.Group  className="inputSize"  as={Col} controlId="formGridPassword2">
                <Form.Control required type="retypePassword" placeholder="Confirm Password*" />
                </Form.Group>
        
            <Button className="submitButton" variant="primary" type="submit">
                Submit
            </Button>
        </Form>


    );

}

export default SignUp;