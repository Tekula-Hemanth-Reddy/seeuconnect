import React,{Component} from 'react';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import '../_css/details.css';
import BackGround from '../../../../assets/images/background/background1.jpg';


class Details extends Component{
    render(){
        return(
            <div style={{color:"#20232a"}}>
            <Container className='mainContainer' style={{paddingTop:"30px",backgroundImage: 'url('+BackGround+')'}}>
                <Card className="cardStyle" style={{backgroundColor:"#000"}}>
                    <Card.Header>Alumni</Card.Header>
                </Card>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label></Form.Label>
                                    <Form.Control 
                                    as="select"
                                    // onChange={inputChange('yCollegeStart')} 
                                    // value={values.ycollegeStart}
                                    >
                                    <option>Mr.</option>
                                    <option>Miss.</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                    </Col>
                    <Col xs={4}>
                    <Form className="formFirst">
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="text" 
                                placeholder="First Name" 
                                // onChange={inputChange('collegeName')} 
                                // value={values.collegeName}/>
                             />
                        </Form.Group>
                    </Form>
                    </Col>
                    <Col xs={3}>
                    <Form className="formFirst">
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="text" 
                                placeholder="Last Name" 
                                // onChange={inputChange('collegeName')} 
                                // value={values.collegeName}/>
                             />
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
                <Row>
                <Col xs={1}>
                </Col>
                {/* <Col xs={1}>
                <FontAwesomeIcon className='ico' icon={faPhoneAlt} color="#007bff" size="lg" style={{marginTop:"35px"}}/>
                </Col> */}
                    <Col xs={2}>
                        <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label></Form.Label>
                                    <Form.Control 
                                    as="select"
                                    // onChange={inputChange('yCollegeStart')} 
                                    // value={values.ycollegeStart}
                                    >
                                    <option>+91</option>
                                    <option>+01</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                    </Col>
                <Col xs={7}>
                    <Form className="formFirst">
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="Number" 
                                placeholder="Phone Number" 
                                // onChange={inputChange('collegeName')} 
                                // value={values.collegeName}/>
                             />
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
                <Card className="cardStyle" style={{backgroundColor:"#000"}}>
                    <Card.Header>Company</Card.Header>
                </Card>
                <Row>
                <Col xs={1}>
                </Col>
                <Col xs={9}>
                    <Form className="formFirst">
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="text" 
                                placeholder="Company Name" 
                                // onChange={inputChange('collegeName')} 
                                // value={values.collegeName}/>
                             />
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
                <Row>
                <Col xs={1}>
                </Col>
                {/* <Col xs={1}>
                <FontAwesomeIcon className='ico' icon={faPhoneAlt} color="#007bff" size="lg" style={{marginTop:"35px"}}/>
                </Col> */}
                    <Col xs={2}>
                        <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label></Form.Label>
                                    <Form.Control 
                                    as="select"
                                    // onChange={inputChange('yCollegeStart')} 
                                    // value={values.ycollegeStart}
                                    >
                                    <option>+91</option>
                                    <option>+01</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                    </Col>
                <Col xs={7}>
                    <Form className="formFirst">
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="Number" 
                                placeholder="Phone Number" 
                                // onChange={inputChange('collegeName')} 
                                // value={values.collegeName}/>
                             />
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
                <Row>
                <Col xs={1}>
                </Col>
                <Col xs={9}>
                    <Form className="formFirst">
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="email" 
                                placeholder="Email" 
                                // onChange={inputChange('collegeName')} 
                                // value={values.collegeName}/>
                             />
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
                <Row>
                <Col xs={1}>
                </Col>
                <Col xs={9}>
                    <Form className="formFirst">
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="text" 
                                placeholder="Address" 
                                // onChange={inputChange('collegeName')} 
                                // value={values.collegeName}/>
                             />
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
                <Row>
                <Col xs={1}>
                </Col>
                <Col xs={9}>
                    <Form className="formFirst">
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="text" 
                                placeholder="Company Website" 
                                // onChange={inputChange('collegeName')} 
                                // value={values.collegeName}/>
                             />
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
                <Row >
                    <Col xs={7}></Col>
                <Col xs={4}>
                    <Button className="buttonRow" variant="outline-warning" size="lg" onClick={this.back}>Save</Button>{' '}
                </Col>
                <Col xs={1}></Col>
            </Row>
            </Container>
            </div>
        );
    }
}

export default Details;