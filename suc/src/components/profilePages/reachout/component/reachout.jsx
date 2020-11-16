import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap';
import '../styles/styles.css';

export class ReachOut extends Component
{
    render()
    {
        return(
           <Container className="reachOutContainer">
           <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>

                <Row>
                <Col><p className="reachOutTitleStyle">Reach Out</p></Col>
                </Row>

                <Row>
                <p className="formTitle">Github</p>
                </Row>

                <Row className="formBlogRow">
                    <Col>
                        <Form className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text" 
                                    placeholder="http://github.com.com/abc" 
                                    />
                                <br />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                
                <Row>
                <p className="formTitle">LinkedIn</p>
                </Row>

                <Row className="formBlogRow">
                    <Col>
                        <Form className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text" 
                                    placeholder="http://linkedin.com/abc" 
                                    />
                                <br />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <Row>
                <p className="formTitle">Instagram</p>
                </Row>

                <Row className="formBlogRow">
                    <Col>
                        <Form className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text" 
                                    placeholder="http://instagram.com/abc" 
                                    />
                                <br />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                <p className="formTitle">Facebook</p>
                </Row>

                <Row className="formBlogRow">
                    <Col>
                        <Form className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text" 
                                    placeholder="http://facebook.com/abc" 
                                    />
                                <br />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                <p className="formTitle">Twitter</p>
                </Row>

                <Row className="formBlogRow">
                    <Col>
                        <Form className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text" 
                                    placeholder="http://twitter.com/abc" 
                                    />
                                <br />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <Row >
                    <Col style={{textAlign:"right"}}>
                        <Button className="buttonRow" variant="outline-primary" size="lg">Submit</Button>{' '}
                    </Col>
                </Row>
                </Card>
           </Container>


        );

    }
}

export default ReachOut;