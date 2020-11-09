import React from 'react';
import {Card,Container,Row,Col} from 'react-bootstrap';
import './phoneCard.css';

function PhoneCard()
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
                    <Col xs={6}><p className="commonPPara">+919059395190</p></Col>
                </Row>

                <Row className="commonPRow">
                    <Col xs={3} className="commonPPara">Land</Col>
                    <Col xs={1} className="commonPPara">:</Col>
                    <Col xs={6}><p className="commonPPara">08728223345</p></Col>
                </Row>

                <Row className="commonPRow">
                <Col xs={3} className="commonPPara">Skype</Col>
                <Col xs={1} className="commonPPara">:</Col>
                <Col xs={6}><p className="commonPPara">Aditya Nalla</p></Col>
            </Row>


            </Container>
        </Card>

    );
}

export default PhoneCard;