import React,{Component} from 'react';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import '../styles/styles.css';

export class Skills extends Component{

    render()
    {
        return(
                <Container className="skillsContainer">

                <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>

                    <Row>
                        <Col>
                            <p className="addSkillTitle">Add Skill</p>
                        </Col>
                    </Row>

                    <Row style={{marginLeft:"10px"}}>
                        <Col><p style={{textAlign:"left",fontSize:"17.5px",marginTop:"20px",color:"white"}}>Select Skill</p></Col>
                    </Row>

                    <Row className="personalDetailsTitleRow" style={{marginLeft:"10px"}}>
                            <Col md="auto">
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label></Form.Label>
                                        <Form.Control 
                                        as="select"
                                        >
                                        <option>C</option>
                                        <option>C++</option>
                                        <option>DS</option>
                                        <option>Java</option>
                                        <option>CyberSecurity</option>
                                        <option>Android</option>
                                        <option>Kotlin</option>
                                        <option>Html</option>
                                        <option>CSS</option>
                                        <option>JavaScript</option>
                                        <option>PHP</option>
                                        <option>React</option>
                                        <option>Angular</option>
                                        <option>Python</option>
                                        <option>Node</option>
                                        <option>MongoDb</option> 
                                        <option>Graphql</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>             

                        <Row style={{marginLeft:"10px"}}>
                            <Col>
                                <p style={{textAlign:"left",fontSize:"17.5px",marginTop:"20px",color:"white"}}>Rate your self in the skill (0-100)</p>
                            </Col>
                        </Row>

                        
                        <Row className="personalDetailsFirstNameRow" style={{marginLeft:"10px"}}>
                            <Col md="auto">
                                <Form className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="number" 
                                            placeholder="75"
                                        />
                                    <br />
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

export default Skills;