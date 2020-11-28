import React,{Component} from 'react';
import {Card,Container,Row,Col} from 'react-bootstrap';
import './emailCard.css';

class EmailCard extends Component
{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            email: ""+this.props.mail,
        }
    }
    render(){
    return(
        <Card className="mainECard">
            <Container>
                <Row>
                    <Col>
                        <p className="titleEHeading">Email</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="emailEText">{this.state.email}</p>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
    }
}

export default EmailCard;