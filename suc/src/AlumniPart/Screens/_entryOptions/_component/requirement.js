import React,{Component} from 'react';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import '../_css/requirement.css';
import BackGround from '../../../../assets/images/background/background1.jpg';


class Requirement extends Component{
    render(){
        return(
            <div style={{color:"#20232a"}}>
            <Container className='mainContainer' style={{paddingTop:"30px",backgroundImage: 'url('+BackGround+')'}}>
                <Card className="cardStyle" style={{backgroundColor:"#000"}}>
                    <Card.Header>Requirements</Card.Header>
                </Card>
                <Row>
                    <Col xs={2} style={{marginTop:"30px",textAlign:"right"}}>Work From :</Col>
                    <Col xs={2}>
                        <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label></Form.Label>
                                    <Form.Control 
                                    as="select"
                                    // onChange={inputChange('yCollegeStart')} 
                                    // value={values.ycollegeStart}
                                    >
                                    <option>Home</option>
                                    <option>Office</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                    </Col>
                    <Col xs={2} style={{marginTop:"30px",textAlign:"right"}}>Duration :</Col>
                    <Col xs={2}>
                    <Form className="formFirst">
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="Number" 
                                placeholder="Months" 
                                // onChange={inputChange('collegeName')} 
                                // value={values.collegeName}/>
                             />
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
                <Row>
                <Col xs={2} style={{marginTop:"30px",textAlign:"right"}}>stipend :</Col>
                    <Col xs={2}>
                    <Form className="formFirst">
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="Number" 
                                placeholder="Money in ₹" 
                                // onChange={inputChange('collegeName')} 
                                // value={values.collegeName}/>
                             />
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
                <Card className="cardStyle" style={{backgroundColor:"#000"}}>
                    <Card.Header>Skills</Card.Header>
                </Card>
                <Row>
                {/* <Col xs={2} style={{marginTop:"30px",textAlign:"right"}}></Col>
                     */}
                    <Col xs={6}>
                        <Col xs={2}> </Col>
                        <Col xs={10}>
                            <Form>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label></Form.Label>
                                        <Form.Control 
                                        as="select"
                                        // onChange={inputChange('yCollegeStart')} 
                                        // value={values.ycollegeStart}
                                        >
                                        <option>ML</option>
                                        <option>DL</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                        </Col>
                        <Row >
                            <Col xs={3}></Col>
                            <Col xs={3}>
                                <Button className="buttonRow" variant="outline-warning" size="lg" onClick={this.back}>Add</Button>{' '}
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                    <Card className="cardStyle" style={{backgroundColor:"#000"}}>
                        <Card.Header>Skills Requirements</Card.Header>
                        <Card.Body>
                            <ul style={{listStyle:"none"}}>
                                <li>C</li>
                                <li>C++</li>
                                <li>Java</li>
                            </ul>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Requirement;