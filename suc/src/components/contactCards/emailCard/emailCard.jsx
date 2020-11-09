import React from 'react';
import {Card,Container,Row,Col} from 'react-bootstrap';
import './emailCard.css';

function EmailCard()
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
                        <p className="emailEText">nallaaditya1415@gmail.com</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="emailEText">tekulahemanth@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
    
}

export default EmailCard;