import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap';
import './styles/styles.css';

export class Graduation extends Component
{

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render()
    {
        const { values, inputChange } = this.props;
    return(
        <Container className="schoolContainer">
        <Card style={{borderColor:"#007fbb",borderWidth:"2px",width:"90%",backgroundColor:"transparent",padding:"20px"}}>
            <Row>
                <Col><p className="titleStyle">Graduation Details</p></Col>
            </Row>

            <Row>
                <p className="titleSchool">College</p>
            </Row>

            <Row className="formSchoolRow">
                <Col>
                    <Form className="formSchool">
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="text" 
                                placeholder="e.g. Vasavi College of Engineering " 
                                onChange={inputChange('collegeName')} 
                                value={values.collegeName}/>
                            <br />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>	   
	                <Row>
                        <p className="titleSchool">Year of Start</p>
                    </Row>

                    <Row className="formSchoolRow2">
                        <Col>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label></Form.Label>
                                    <Form.Control 
                                    as="select"
                                    onChange={inputChange('yCollegeStart')} 
                                    value={values.ycollegeStart}
                                    >
                                    <option>2020</option>
                                    <option>2019</option>
                                    <option>2018</option>
                                    <option>2017</option>
                                    <option>2016</option>
                                    <option>2015</option>
                                    <option>2014</option>
                                    <option>2013</option>
                                    <option>2012</option>
                                    <option>2011</option>
                                    <option>2010</option>
                                    <option>2009</option>
                                    <option>2008</option>
                                    <option>2007</option>
                                    <option>2006</option>
                                    <option>2005</option>
                                    <option>2004</option>
                                    <option>2003</option>
                                    <option>2002</option>
                                    <option>2000</option>
                                    <option>1999</option>
                                    <option>1998</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <p className="titleSchool">Year of End</p>
                    </Row>

                    <Row className="formSchoolRow2">
                        <Col>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label></Form.Label>
                                    <Form.Control 
                                        as="select"
                                        onChange={inputChange('yCollegeEnd')} 
                                        value={values.ycollegeEnd}>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                        <option>2012</option>
                                        <option>2011</option>
                                        <option>2010</option>
                                        <option>2009</option>
                                        <option>2008</option>
                                        <option>2007</option>
                                        <option>2006</option>
                                        <option>2005</option>
                                        <option>2004</option>
                                        <option>2003</option>
                                        <option>2002</option>
                                        <option>2000</option>
                                        <option>1999</option>
                                        <option>1998</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>

            	
            <Row>
                <Col>
                    <Row>
                            <p className="titleSchool">Course</p>
                        </Row>

                        <Row className="formSchoolRow">
                            <Col>
                                <Form className="formSchool">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text" 
                                            placeholder="e.g. B.E/B.TECH "
                                            onChange={inputChange('collegeCourse')} 
                                            value={values.collegeCourse} />
                                        <br />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                </Col>

                <Col>
                            <Row>
                                <p className="titleSchool">Stream</p>
                            </Row>

                            <Row className="formSchoolRow">
                                <Col>
                                    <Form className="formSchool">
                                        <Form.Group>
                                            <Form.Control 
                                                size="text" 
                                                type="text" 
                                                placeholder="e.g. CSE "
                                                onChange={inputChange('collegeStream')} 
                                                value={values.collegeStream} />
                                            <br />
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                </Col>
            </Row>
           

            <Row>
                <p className="titleSchool">Board / University</p>
            </Row>

            <Row className="formSchoolRow">
                <Col>
                    <Form className="formSchool">
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="text" 
                                placeholder="e.g. TSBIE " 
                                onChange={inputChange('collegeBoard')} 
                                value={values.collegeBoard}/>
                            <br />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

           

            <Row>
                <Col xs={1} md="auto">
                    <p className="gradeTitle">CGPA</p>
                </Col>

                <Col md="auto">
                    <Form>
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="number" 
                                placeholder="8.7 " 
                                onChange={inputChange('collegeGrade')} 
                                value={values.collegeGrade}/>
                            <br />
                        </Form.Group>
                    </Form>
                
                </Col>
            </Row>

            <Row >
                <Col style={{textAlign:"left"}}>
                    <Button className="buttonRow" variant="outline-warning" size="lg" onClick={this.back}>Previous</Button>{' '}
                </Col>           
                <Col style={{textAlign:"right"}}>
                    <Button className="buttonRow" variant="outline-primary" size="lg"  onClick={this.continue}>Submit</Button>{' '}
                </Col>
            </Row>

            </Card>
        </Container>

    );
    }

}

export default Graduation;