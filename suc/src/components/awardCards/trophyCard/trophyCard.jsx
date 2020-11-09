import React from 'react';
import {Card,Row,Col,Container} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fa';
import './styles/styles.css';

function TrophyCard()
{
    return(
        <Card className="trophyCardMain">
            <Container>
                <Row>
                    <Col><HIIcons.FaTrophy className="trophyIcon" /></Col>
                    <Col><p className="countText">03</p></Col>
                </Row>
                <Row>
                    <Col><p className="awardsText">AWARD WINS</p></Col>
                </Row>
            </Container>
        </Card>
    );
}

export default TrophyCard;