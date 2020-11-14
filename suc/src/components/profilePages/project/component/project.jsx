import React,{Component} from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import '../styles/styles.css';

export class Project extends Component
{
    render()
    {
        return(
           <Container className="projectContainer">
                <Row>
                <Col><p className="projectTitleStyle">Add Project</p></Col>
                </Row>

                <Row>
                <p className="projectFormTitle">Project Title</p>
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
                <p className="projectFormTitle">Project Description</p>
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
                <p className="projectFormTitle">Project Url</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <Form className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text" 
                                    placeholder="http://abc.com" 
                                    />
                                <br />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                <p className="projectFormTitle">Project Video/Demo Url</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <Form className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text" 
                                    placeholder="http://youtube.com" 
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
                
           </Container>


        );

    }
}

export default Project;