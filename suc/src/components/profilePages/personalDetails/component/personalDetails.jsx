import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
import history from '../../../../history/history';
import '../styles/styles.css';

export class PersonalDetails extends Component{

    constructor(props){
        super(props);
        this.titleEl = React.createRef();
        this.pEl = React.createRef();
        this.iEl = React.createRef();
        this.firstEl = React.createRef();
        this.lastEl = React.createRef();
        this.phonePersonEl = React.createRef();
        this.websiteEl = React.createRef();
    }

    static contextType = authContext;

    submitHandler = (event) =>{
        event.preventDefault();
        const Title = ""+this.titleEl.current.value;
        const Phn = ""+this.pEl.current.value;
        const intrested = ""+this.iEl.current.value==="false"?"false":"true";
        const FirstName = ""+this.firstEl.current.value;
        const LastName = ""+this.lastEl.current.value;
        const Phone = ""+this.phonePersonEl.current.value;
        const Website = ""+this.websiteEl.current.value;

        const requestBody = {
            query: `
            mutation{
                UpdateProfile(profileInput:{name:"${Title}${FirstName}${" "}${LastName}",phoneNumber:"${Phn}${" "}${Phone}",portFolio:"${Website}",interestedIntern:${intrested}}){
                  _id
                  name
                  phoneNumber
                }
              }
            `
        };

        const token = this.context.token;
        console.log(token);

        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then(res => {
            if(res.status!== 200 && res.status!== 201){
                throw new Error('Failed!');
            }
            return res.json();
        })
        .then(resData => {
            console.log(resData);
            history.push('/profile/edit/education');
        })
        .catch(err => {
            console.log(err);
        });
    };

    render()
    {
        return(
            <Container className="personalDetailsContainer">
                <Form onSubmit={this.submitHandler}>
                <Card style={{borderColor:"#007fbb",borderWidth:"2px",backgroundColor:"transparent",padding:"15px"}}>
                <Row>
                    <Col><p className="personalDetailsTitle">Personal Details</p></Col>
                </Row>

                <Container className="personalDetailsSubContainer">
                <Row>
                    <Col>
                        <Row>
                            <p className="personalDetailsGenderTitle">Title</p>
                        </Row>
                        <Row className="personalDetailsTitleRow">
                            <Col>
                                
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label></Form.Label>
                                        <Form.Control 
                                        as="select"
                                        ref={this.titleEl}
                                        >
                                        <option>Mr.</option>
                                        <option>Mrs.</option>
                                        <option>Ms.</option>
                                        </Form.Control>
                                    </Form.Group>
                                
                            </Col>
                        </Row>             
                    </Col>
                    <Col>
                        <Row>
                            <p className="personalDetailsFirstNameTitle">FirstName</p>
                        </Row>
                        <Row className="personalDetailsFirstNameRow">
                            <Col>
                                <div className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text"
                                            ref={this.firstEl} 
                                        />
                                    <br />
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <p className="personalDetailsFirstNameTitle">LastName</p>
                        </Row>
                        <Row className="personalDetailsFirstNameRow">
                            <Col>
                                <div className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text"
                                            ref={this.lastEl} 
                                        />
                                    <br />
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col xs={3}>
                        <Row>
                            <p className="personalDetailsFirstNameTitle">MobileNumber</p>
                        </Row>
                        <Row className="personalDetailsFirstNameRow">
                            <Col>
                                <div className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text"
                                            placeholder={"+91"}
                                            ref={this.pEl} 
                                        ></Form.Control>
                                    <br />
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col >
                        <Row>
                            <p className="personalDetailsFirstNameTitle">{""}</p>
                        </Row>
                        <Row className="personalDetailsFirstNameRow" 
                        style={{marginTop:"24px",
                        right:"15px"}}>
                            <Col>
                                <div className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text"
                                            placeholder={"9848274559"}
                                            ref={this.phonePersonEl}
                                        ></Form.Control>
                                    <br />
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <Row>
                            <p className="personalDetailsFirstNameTitle">Portfolio</p>
                        </Row>
                        <Row className="personalDetailsFirstNameRow">
                            <Col>
                                <div className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text"
                                            placeholder={"www.elonmusk.com"}
                                            ref={this.websiteEl}
                                        ></Form.Control>
                                    <br />
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <Row>
                            <p className="personalDetailsFirstNameTitle">Interested Intern</p>
                        </Row>
                        <Row className="personalDetailsFirstNameRow" style={{marginTop:"-23px"}}>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label></Form.Label>
                                        <Form.Control 
                                        as="select"
                                        ref={this.iEl}
                                        >
                                        <option>Yes</option>
                                        <option>No</option>
                                        </Form.Control>
                                    </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row >
                <Col style={{textAlign:"right"}}>
                    <Button className="buttonRow" variant="outline-primary" size="lg" type='submit'>Submit</Button>{' '}
                </Col>
                </Row>

                </Container>
                </Card>
                </Form>
            </Container>


        );

    }

}

export default PersonalDetails;