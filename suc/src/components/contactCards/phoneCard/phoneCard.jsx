import React,{Component} from 'react';
import {Card,Container,Row,Col} from 'react-bootstrap';
import './phoneCard.css';

function PhoneCard(props) 
{
    
   
    return(
        <Card className="mainPCard">
            <Container>
                <Row>
                    <Col>
                        <p className="titlePHeading">Phone</p>
                    </Col>
                </Row>

                <Row className="commonPRow">
                    <Col xs={3} className="commonPPara">Mob</Col>
                    <Col xs={1} className="commonPPara">:</Col>
                    <Col xs={6}><p className="commonPPara">{props.Mobile}</p></Col>
                </Row>

               
            </Container>
        </Card>
    );
   
}

export default PhoneCard;