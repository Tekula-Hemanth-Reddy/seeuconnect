import React from 'react';
import {Card,Col,Row} from 'react-bootstrap';
import './styles/styles.css';
import * as HIIcons from 'react-icons/cg';
function CompanyExperienceCard()
{
    return(
        <Card className="companyExperienceCardMain">
            <Card.Body>
                <Card.Title className="cardTitleStyle">
                    <Row>
                    <Col xs={1}><HIIcons.CgRecord className="titleIconStyle"/></Col>
                    <Col xs={8}><p className="titleText">WEB DESIGNER AT MICROSOFT INC.</p></Col>
                    </Row>
                </Card.Title>

                <Card.Subtitle className="mb-2 text-muted subtitleText">July 2020 - Aug 2020</Card.Subtitle>
               
                <Card.Text className="cardText">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>

                <Card.Link href="#" className="linkText">https://google.com</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default CompanyExperienceCard;