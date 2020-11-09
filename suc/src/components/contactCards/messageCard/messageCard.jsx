import React from 'react';
import {Card,Container,Row,Col,Form,ButtonGroup,Button} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fi';
import  './styles/styles.css';

function MessageCard()
{
    return(
        <Card className="messageCardMainCard">
            <Container>
                <Row className="heremeTitle">HereMe</Row>
                
                <Row>
                    <Col>
                        <Form className="formClass">
                            <Form.Group>
                                <Form.Control size="text" type="text" placeholder="First Name" />
                                <br />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form className="formClass">
                            <Form.Group>
                                <Form.Control size="text" type="email" placeholder="Email" />
                                <br />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

            <Row>
                <Col>
                    <Form className="formClass">
                        <Form.Group>
                            <Form.Control size="text" type="text" placeholder="Subject" />
                            <br />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form className="formClass">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control placeholder="Message" as="textarea" rows={8} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    <ButtonGroup>
                        <Button className="sendButton">
                            <Row>
                                <Col xs={1}>
                                    <HIIcons.FiMail className="contactMeIcon2"/>
                                </Col>
                                <Col xs={6}>
                                    <p className="sendText">Send</p>
                                </Col>
                            </Row>
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>

                
            </Container>
        </Card>
    );

}

export default MessageCard;