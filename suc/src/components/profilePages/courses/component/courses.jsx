import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap';
import '../styles/styles.css';

export class Courses extends Component
{
    render()
    {
        return(
           <Container className="projectContainer">
           <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>

                <Row>
                <Col><p className="projectTitleStyle">Add Courses</p></Col>
                </Row>

                <Row>
                <p className="projectFormTitle">Title</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <Form className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text" 
                                    placeholder="Nptel DS & ML" 
                                    />
                                <br />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <Row>
                <p className="projectFormTitle">Certificate Id/License</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <Form className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text" 
                                    placeholder="NPTEL230568956" 
                                    />
                                <br />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                
                <Row>
                <p className="projectFormTitle">Specialization</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <Form className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text"
                                    placeholder="DeepLearning" 
                                    />
                                <br />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                
                
                <Row>
                    <p className="projectFormTitle">Certificate</p>
                                </Row>
                
                                <Row className="formProjectRow">
                                    <Col>
                                        <Form className="formBlog">
                                            <Form.Group>
                                                <Form.Control size="text" 
                                                    type="file" 
                                                   
                                                    />
                                                <br />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                 </Row>
                
               

                <Row >
                    <Col style={{textAlign:"right"}}>
                        <Button className="buttonRow" variant="outline-primary" size="lg">Add</Button>{' '}
                    </Col>
                </Row>
               
                </Card>
           </Container>


        );

    }
}

export default Courses;