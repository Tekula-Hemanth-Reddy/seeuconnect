import React from "react";
import {Container,Card,Button} from "react-bootstrap";
import '../css/styles.css';

function StudentFailure(props) {

    console.log(props);
        return(
            <div style={{backgroundColor:"#000"}}>
                <Container className="failureContainer">
                    <Card className="failureCard">
                        <Card.Body>
                            <Card.Title className="loginFailedTitle">Failed !!!</Card.Title>
                            <Card.Text className="loginFailedText">
                            {props.message}
                            </Card.Text>
                            <Button href="/login" variant="outline-primary" className="failureButton">Back to Login/SignUp</Button>  
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    

}

export default StudentFailure;