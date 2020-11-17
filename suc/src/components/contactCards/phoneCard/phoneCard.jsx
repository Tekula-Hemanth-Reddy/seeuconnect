import React,{Component} from 'react';
import {Card,Container,Row,Col} from 'react-bootstrap';
import './phoneCard.css';

class PhoneCard extends Component
{
    constructor(props){
        super(props);
        this.state={
            phno: ""+this.props.phone,
        }
    }
    render(){
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
                    <Col xs={6}><p className="commonPPara">{this.state.phno}</p></Col>
                </Row>

                {/* <Row className="commonPRow">
                    <Col xs={3} className="commonPPara">Land</Col>
                    <Col xs={1} className="commonPPara">:</Col>
                    <Col xs={6}><p className="commonPPara">08728223345</p></Col>
                </Row>

                <Row className="commonPRow">
                <Col xs={3} className="commonPPara">Skype</Col>
                <Col xs={1} className="commonPPara">:</Col>
                <Col xs={6}><p className="commonPPara">Aditya Nalla</p></Col>
            </Row> */}
            </Container>
        </Card>
    );
    }
}

export default PhoneCard;