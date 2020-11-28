import React,{Component} from 'react';
import {Card,Container,Row,Col} from 'react-bootstrap';
import './emailCard.css';

function EmailCard(props) 
{
    
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
                        <p className="emailEText">{props.mail}</p>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
    }


export default EmailCard;