import React,{Component} from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import './styles/styles.css';

export class SecondaryEducation extends Component
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
            <Row>
                <Col><p className="titleStyle">Senior Secondary or Equivalent (XII) details</p></Col>
            </Row>

            <Row>
                <p className="titleSchool">School/College</p>
            </Row>

            <Row className="formSchoolRow">
                <Col>
                    <Form className="formSchool">
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="text" 
                                placeholder="e.g. Delhi Public School " 
                                onChange={inputChange('secondarySchoolName')} 
                                value={values.secondarySchoolName}/>
                            <br />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

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
                                placeholder="e.g. M.P.C " 
                                onChange={inputChange('secondarySchoolStream')} 
                                value={values.secondarySchoolStream}/>
                            <br />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row>
                <p className="titleSchool">Board</p>
            </Row>

            <Row className="formSchoolRow">
                <Col>
                    <Form className="formSchool">
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="text" 
                                placeholder="e.g. TSBIE "
                                onChange={inputChange('secondarySchoolBoard')} 
                                value={values.secondarySchoolBoard} />
                            <br />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row>
                <p className="titleSchool">Year of Completion</p>
            </Row>

            <Row className="formSchoolRow2">
                <Col>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label></Form.Label>
                            <Form.Control 
                                as="select"
                                onChange={inputChange('ySecondarySchool')} 
                                value={values.ysecondarySchool}
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

            <Row>
                <Col xs={1} md="auto">
                    <p className="gradeTitle">Grade</p>
                </Col>

                <Col md="auto">
                    <Form>
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="number" 
                                placeholder="8.7 "
                                onChange={inputChange('secondarySchoolGrade')} 
                                value={values.secondarySchoolGrade} />
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
                    <Button className="buttonRow" variant="outline-primary" size="lg" onClick={this.continue}>Next</Button>{' '}
                </Col>
            </Row>


        </Container>

    );
    }

}

export default SecondaryEducation;