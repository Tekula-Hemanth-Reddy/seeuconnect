import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap';
import '../styles/styles.css';

export class Achievement extends Component
{
    render()
    {
        return(
           <Container className="projectContainer">
           <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>

                <Row>
                <Col><p className="projectTitleStyle">Add Achievement</p></Col>
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
                                    placeholder="TidbEat" 
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
                                    placeholder="Full Stack Developer" 
                                    />
                                <br />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                
                <Row>
                <p className="projectFormTitle">Achievement Description</p>
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
                    <p className="projectFormTitle">Upload file</p>
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

export default Achievement;