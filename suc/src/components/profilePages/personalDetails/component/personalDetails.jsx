import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap';
import '../styles/styles.css';

export class PersonalDetails extends Component{

    render()
    {
        return(
            <Container className="personalDetailsContainer">
                <Card style={{borderColor:"#007fbb",borderWidth:"2px",backgroundColor:"transparent",padding:"15px"}}>
                <Row>
                    <Col><p className="personalDetailsTitle">Personal Details</p></Col>
                </Row>

                <Container className="personalDetailsSubContainer">
                <Row>
                    <Col>
                        <Row>
                            <p className="personalDetailsGenderTitle">Title</p>
                        </Row>
                        <Row className="personalDetailsTitleRow">
                            <Col>
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label></Form.Label>
                                        <Form.Control 
                                        as="select"
                                        >
                                        <option>Mr.</option>
                                        <option>Mrs.</option>
                                        <option>Ms.</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>             
                    </Col>
                    <Col>
                        <Row>
                            <p className="personalDetailsFirstNameTitle">FirstName</p>
                        </Row>
                        <Row className="personalDetailsFirstNameRow">
                            <Col>
                                <Form className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text" 
                                        />
                                    <br />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <p className="personalDetailsFirstNameTitle">LastName</p>
                        </Row>
                        <Row className="personalDetailsFirstNameRow">
                            <Col>
                                <Form className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text" 
                                        />
                                    <br />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col xs={3}>
                        <Row>
                            <p className="personalDetailsFirstNameTitle">MobileNumber</p>
                        </Row>
                        <Row className="personalDetailsFirstNameRow">
                            <Col>
                                <Form className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text"
                                            placeholder={"+91"} 
                                        ></Form.Control>
                                    <br />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col >
                        <Row>
                            <p className="personalDetailsFirstNameTitle">{""}</p>
                        </Row>
                        <Row className="personalDetailsFirstNameRow" 
                        style={{marginTop:"24px",
                        right:"15px"}}>
                            <Col>
                                <Form className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text"
                                            placeholder={"9848274559"} 
                                        ></Form.Control>
                                    <br />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <Row>
                            <p className="personalDetailsFirstNameTitle">Portfolio</p>
                        </Row>
                        <Row className="personalDetailsFirstNameRow">
                            <Col>
                                <Form className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="url"
                                            placeholder={"www.elonmusk.com"} 
                                        ></Form.Control>
                                    <br />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <Row>
                            <p className="personalDetailsFirstNameTitle">Interested Intern</p>
                        </Row>
                        <Row className="personalDetailsFirstNameRow" style={{marginTop:"-23px"}}>
                            <Col>
                                <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label></Form.Label>
                                        <Form.Control 
                                        as="select"
                                        >
                                        <option>Yes</option>
                                        <option>No</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row >
                <Col style={{textAlign:"right"}}>
                    <Button className="buttonRow" variant="outline-primary" size="lg">Submit</Button>{' '}
                </Col>
                </Row>

                </Container>
                
                </Card>

            </Container>


        );

    }

}

export default PersonalDetails;