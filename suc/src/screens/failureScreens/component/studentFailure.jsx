import React,{Component} from "react";
import {Card,Button} from "react-bootstrap";
import '../css/styles.css';

function StudentFailure(props) {

    console.log(props);
        return(
            
            <Card className="failureCard">
            <Card.Body>
                <Card.Title className="loginFailedTitle">Login Failed !!!</Card.Title>
                <Card.Text className="loginFailedText">
                {props.message}
                </Card.Text>
                <Button href="/login" variant="outline-primary" className="failureButton">Back to Login</Button>
                
          </Card.Body>
        </Card>
       
        );
    

}

export default StudentFailure;