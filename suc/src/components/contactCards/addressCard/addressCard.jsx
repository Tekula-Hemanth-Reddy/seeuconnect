import React from 'react';
import {Card,Container,Row,Col} from 'react-bootstrap';
import './addressCard.css';

function AddressCard(props)
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
                    <p className="emailAText">{props.Place}</p>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
    
}

export default AddressCard;