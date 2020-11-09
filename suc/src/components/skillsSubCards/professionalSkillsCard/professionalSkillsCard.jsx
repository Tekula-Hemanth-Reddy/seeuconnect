import React from 'react';
import { Container,Row,Col,Card,ProgressBar} from 'react-bootstrap';
import './styles/styles.css';

function ProfessionalSkillsCard()
{
    return(
        <Card className="pSkillsCardMainContainer">
        <Container >
            <Row><p className="titleStyle">Professional Skills</p></Row>
            <Row>
                <Col xs={2}><p className="subTitles">PhotoShop</p></Col>
                <Col>
                    <ProgressBar animated variant="custom" now={40} label={40} style={{marginTop:"8px"}}></ProgressBar>
                </Col>
            </Row>
            
            <Row>
                <Col xs={2}><p className="subTitles">Html5</p></Col>
                <Col>
                    <ProgressBar animated variant="success" now={80} label={80} style={{marginTop:"8px"}}></ProgressBar>
                </Col>
            </Row>

            <Row>
                <Col xs={2}><p className="subTitles">JQuery</p></Col>
                <Col>
                    <ProgressBar animated variant="info" now={30} label={30} style={{marginTop:"8px"}}></ProgressBar>
                </Col>
            </Row>
            <Row>
                <Col xs={2}><p className="subTitles">Android</p></Col>
                <Col>
                    <ProgressBar animated variant="danger" now={50} label={50} style={{marginTop:"8px"}}></ProgressBar>
                </Col>
            </Row>
            <Row>
                <Col xs={2}><p className="subTitles">Marketing</p></Col>
                <Col>
                    <ProgressBar animated variant="warning" now={60} label={60} style={{marginTop:"8px"}}></ProgressBar>
                </Col>
            </Row>


        </Container>
        </Card>
    );
}

export default ProfessionalSkillsCard;