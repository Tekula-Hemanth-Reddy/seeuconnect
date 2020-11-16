import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
import history from '../../../../history/history';
import '../styles/styles.css';

export class Experience extends Component
{
    constructor(props){
        super(props);
        this.cmpEl = React.createRef();
        this.posEl = React.createRef();
        this.desEl = React.createRef();
        this.staEl = React.createRef();
        this.endEl = React.createRef();
    }

    static contextType = authContext;

    submitHandler = (event) =>{
        event.preventDefault();
        const Company = ""+this.cmpEl.current.value;
        const Position = ""+this.posEl.current.value;
        const Description = ""+this.desEl.current.value;
        const Start = ""+this.staEl.current.value;
        const End = ""+this.endEl.current.value;
        const requestBody = {
            query: `
            mutation{
                CreatePosition(positionInput:{positionHeld:"${Position}",companyName:"${Company}",positionDescription:"${Description}",startDate:"${Start}",endDate:"${End}"}){
                  positionHeld
                  companyName
                  positionDescription
                  startDate
                  endDate
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
            history.push('/profile/edit');
        })
        .catch(err => {
            console.log(err);
        });
    };

    render()
    {
        return(
           <Container className="projectContainer">
               <Form onSubmit={this.submitHandler}>
           <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>

                <Row>
                <Col><p className="projectTitleStyle">Add Experience</p></Col>
                </Row>

                <Row>
                <p className="projectFormTitle">Company/Organization Name</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <div className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text" 
                                    placeholder="TidbEat"
                                    ref={this.cmpEl}
                                    />
                                <br />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>

                <Row>
                <p className="projectFormTitle">Position Held</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <div className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text" 
                                    placeholder="Full Stack Developer"
                                    ref={this.posEl} 
                                    />
                                <br />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
                
                <Row>
                <p className="projectFormTitle">Position Description</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <div className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    as="textarea"
                                    rows={4} 
                                    placeholder=""
                                    ref={this.desEl}
                                    />
                                <br />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>

                <Row>
                <Col>
                
                <Row>
                    <p className="projectFormTitle">Enter Start Date</p>
                </Row>
                
                    <Row className="formProjectRow">
                        <Col>
                            <div className="formBlog">
                                <Form.Group>
                                    <Form.Control size="text" 
                                        type="date" 
                                        ref={this.staEl}
                                        />
                                    <br />
                                </Form.Group>
                            </div>
                        </Col>
                     </Row>
                </Col>
                <Col>
                
                <Row>
                    <p className="projectFormTitle">Enter End Date</p>
                    </Row>
    
                    <Row className="formProjectRow">
                        <Col>
                            <Form className="formBlog">
                                <Form.Group>
                                    <Form.Control size="text" 
                                        type="date" 
                                        ref={this.endEl}
                                        />
                                    <br />
                                </Form.Group>
                            </Form>
                        </Col>
                     </Row>
                </Col>
                </Row>
               <Row >
                    <Col style={{textAlign:"right"}}>
                        <Button className="buttonRow" variant="outline-primary" size="lg" type='submit'>Add</Button>{' '}
                    </Col>
                </Row>
                </Card>
                </Form>
           </Container>


        );

    }
}

export default Experience;