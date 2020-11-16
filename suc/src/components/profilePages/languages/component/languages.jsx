import React,{Component} from 'react';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import '../styles/styles.css';

export class Languages extends Component{

    render()
    {
        return(
                <Container className="languagesContainer">

                <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>

                    <Row>
                        <Col>
                            <p className="addLanguageTitle">Add Language</p>
                        </Col>
                    </Row>

                    <Row style={{marginLeft:"10px"}}>
                        <Col><p style={{textAlign:"left",fontSize:"17.5px",marginTop:"20px",color:"white"}}>Select Language</p></Col>
                    </Row>

                    <Row className="personalDetailsTitleRow" style={{marginLeft:"10px"}}>
                            <Col md="auto">
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label></Form.Label>
                                        <Form.Control 
                                        as="select"
                                        >
                                        <option>Telugu</option>
                                        <option>Hindi</option>
                                        <option>French</option>
                                        <option>English</option>
                                        <option>German</option>
                                        <option>Tamil</option>
                                        <option>Marathi</option>
                                        <option>Malayalam</option>
                                        <option>Punjabi</option>
                                        <option>Oriya</option>
                                        <option>Spanish</option>
                                        <option>Sinhalese</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>             

                       

                        
                       

                        <Row style={{marginRight:"10px",marginBottom:"10px"}} >
                            <Col style={{textAlign:"right"}}>
                                <Button className="buttonRow" variant="outline-primary" size="lg">Add</Button>{' '}
                            </Col>
                        </Row>

                        </Card>
                </Container>
            );
    }
   
}

export default Languages;