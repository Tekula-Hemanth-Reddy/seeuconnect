import React,{Component} from 'react';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import '../_css/requirement.css';
import BackGround from '../../../../assets/images/background/background1.jpg';
import NavBar from '../../../Components/navBar/component/alumniNavbar';
import MiniCard from './miniSkill';


class Requirement extends Component{
    constructor(props){
        super(props);
        this.state = {
            skillList:[]
        }
    }
    render(){
        return(
            <div  style={{backgroundColor:"#000"}}>
            <NavBar />
            <Container  className="requireContainer">
            <Form>
                <h2 style={{marginTop:"30px"}}>Recruitment</h2>
                <Card className="requireCardStyle" style={{marginTop:"20px",marginBottom: "20px"}}>
                <Row>
                    <Col xs={2} style={{marginTop:"30px",textAlign:"right"}}>Work From :</Col>
                    <Col xs={2}>    
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
                            
                    </Col>
                    <Col xs={2} style={{marginTop:"30px",textAlign:"right"}}>Duration :</Col>
                    <Col xs={2}>
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="Number" 
                                placeholder="Months"
                                style={{marginTop:"20px",textAlign:"right"}} 
                                // onChange={inputChange('collegeName')} 
                                // value={values.collegeName}/>
                             />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                <Col xs={2} style={{marginTop:"10px",textAlign:"right"}}>stipend :</Col>
                    <Col xs={2}>
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="Number" 
                                placeholder="Money in ₹" 
                                // onChange={inputChange('collegeName')} 
                                // value={values.collegeName}/>
                             />
                        </Form.Group>
                    </Col>
                </Row>
                </Card>
                <h2 style={{marginTop:"30px"}}>Skills</h2>
                <hr style={{marginLeft:"20vh",marginRight:"20vh",backgroundColor:"#fff"}} />
                <Row>
                    <Col xs={6}>
                    <h3 style={{marginTop:"30px"}}>Add Required Skills</h3>
                    <Card className="requireCardStyle" style={{marginTop:"20px",marginBottom: "20px"}}>
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="text" 
                                placeholder="Skills"
                                style={{marginTop:"20px",textAlign:"right"}}
                             />
                        </Form.Group>
                        <Button variant="primary" style={{marginLeft:"20vh",marginRight:"20vh"}}>Add Skill</Button>{' '}
                    </Card>
                    </Col>
                    <Col xs={6}>
                    <h3 style={{marginTop:"30px"}}>Skills You Need</h3>
                    <Card className="requireCardStyle" style={{marginTop:"20px",marginBottom: "20px"}}>
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="text" 
                                placeholder="Skills"
                                style={{marginTop:"20px",textAlign:"right"}}
                             />
                        </Form.Group>
                        <Button variant="primary" style={{marginLeft:"20vh",marginRight:"20vh"}}>Add Skill</Button>{' '}
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <Button variant="outline-warning">Show People</Button>
                    </Col>
                </Row>
                </Form> 
            </Container>
            </div>
        );
    }
}

export default Requirement;