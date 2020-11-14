import React,{Component} from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import '../styles/styles.css';

export class Experience extends Component
{
    render()
    {
        return(
           <Container className="projectContainer">
                <Row>
                <Col><p className="projectTitleStyle">Add Experience</p></Col>
                </Row>

                <Row>
                <p className="projectFormTitle">Company/Organization Name</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <Form className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text" 
                                    placeholder="TidbEat" 
                                    />
                                <br />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <Row>
                <p className="projectFormTitle">Position Held</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <Form className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text" 
                                    placeholder="Full Stack Developer" 
                                    />
                                <br />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                
                <Row>
                <p className="projectFormTitle">Position Description</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <Form className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    as="textarea"
                                    rows={4} 
                                    placeholder="" 
                                    />
                                <br />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <Row>
                <Col>
                
                <Row>
                    <p className="projectFormTitle">Enter Start Date</p>
                                </Row>
                
                                <Row className="formProjectRow">
                                    <Col>
                                        <Form className="formBlog">
                                            <Form.Group>
                                                <Form.Control size="text" 
                                                    type="date" 
                                                   
                                                    />
                                                <br />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                 </Row>
                </Col>
                <Col>
                
                <Row>
                    <p className="projectFormTitle">Enter End Date</p>
                                </Row>
                
                                <Row className="formProjectRow">
                                    <Col>
                                        <Form className="formBlog">
                                            <Form.Group>
                                                <Form.Control size="text" 
                                                    type="date" 
                                                   
                                                    />
                                                <br />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                 </Row>
                </Col>
                </Row>
                
                                
                
               
               



                <Row >
                    <Col style={{textAlign:"right"}}>
                        <Button className="buttonRow" variant="outline-primary" size="lg">Add</Button>{' '}
                    </Col>
                </Row>
                
           </Container>


        );

    }
}

export default Experience;