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
                        <p className="emailEText"><a href={"mailto:"}{...props.mail} style={{textDecoration:"none"}}>{props.mail}</a></p>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
    }


export default EmailCard;