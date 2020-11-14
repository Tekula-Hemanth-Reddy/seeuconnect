import React,{Component} from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import '../styles/styles.css';

export class PersonalDetails extends Component{

    render()
    {
        return(
            <Container className="personalDetailsContainer">
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
                <Row style={{textAlign:"left"}}>
                    <Col>
                        <p style={{marginLeft:"4px"}}>Address</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <p className="personalDetailsGenderTitle">State</p>
                        </Row>
                        <Row className="personalDetailsTitleRow">
                            <Col>
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label></Form.Label>
                                        <Form.Control 
                                        as="select"
                                        >
                                        <option>Telangana</option>
                                        <option>AndhraPradesh</option>
                                        <option>Karnataka</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>             
                    </Col>
                    <Col>
                        <Row>
                            <p className="personalDetailsGenderTitle">City</p>
                        </Row>
                        <Row className="personalDetailsTitleRow">
                            <Col>
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label></Form.Label>
                                        <Form.Control 
                                        as="select"
                                        >
                                        <option>Hyderabad</option>
                                        <option>Nalgonda</option>
                                        <option>Peddapalli</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>             
                    </Col>
                </Row>
                <Row>
                <Col xs={3}>
                        <Row>
                            <p className="personalDetailsFirstNameTitle">PinCode</p>
                        </Row>
                        <Row className="personalDetailsFirstNameRow">
                            <Col>
                                <Form className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text"
                                            placeholder={"111111"} 
                                        ></Form.Control>
                                    <br />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col >
                        <Row>
                            <p className="personalDetailsFirstNameTitle">{"CompleteAddress"}</p>
                        </Row>
                        <Row className="personalDetailsFirstNameRow" 
                        >
                            <Col>
                                <Form className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            as="textarea"
                                            rows={4} 
                                            
                                            placeholder={"Hno-1/1/1/ Ayyapa Society Madhapur,Hyderabad"} 
                                        ></Form.Control>
                                    <br />
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

            </Container>


        );

    }

}

export default PersonalDetails;