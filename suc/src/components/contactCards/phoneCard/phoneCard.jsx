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
                    <Col xs={3} className="commonPPara">Mobile</Col>
                    <Col xs={1} className="commonPPara">:</Col>
                    <Col xs={6}><p className="commonPPara">{props.Mobile}</p></Col>
                    {/* <a href={"tel:"}{...props.Mobile.split("-")[0]}{...this.props.Mobile.split("-")[1]} style={{textDecoration:"none"}}>{props.Mobile.split("-")[0]}{" "}{this.props.Mobile.split("-")[1]}</a> */}
                </Row>

               
            </Container>
        </Card>
    );
   
}

export default PhoneCard;