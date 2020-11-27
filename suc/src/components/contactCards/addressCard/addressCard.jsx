import React,{Component} from 'react';
import {Card,Container,Row,Col} from 'react-bootstrap';
import './addressCard.css';

class AddressCard extends Component
{
    constructor(props){
        super(props);
        this.state={
            address: ""+this.props.Place,
        }
    }
    render(){
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
                    <p className="emailAText">{this.state.address}</p>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
    }
}

export default AddressCard;