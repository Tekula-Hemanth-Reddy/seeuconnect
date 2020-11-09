import React from 'react';
import {Card,Container,Row,Col} from 'react-bootstrap';
import './addressCard.css';

function AddressCard()
{
    return(
        <Card className="mainAACard">
            <Container>
                <Row>
                    <Col>
                        <p className="titleAHeading">Address</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="emailAText">3-3-184/70,Sri KanakaDurga Enterprises,Main Road,Peddapally,Telangana</p>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}

export default AddressCard;