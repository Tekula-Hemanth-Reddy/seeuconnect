import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
import history from '../../../../history/history';
import '../styles/styles.css';

export class Courses extends Component
{
    constructor(props){
        super(props);
        this.courseTitle = React.createRef();
        this.certificateId= React.createRef();
        this.spec = React.createRef();
        this.certificate=React.createRef();
    }

    static contextType = authContext;

    submitHandler = (event) =>{
        event.preventDefault();
        const Title = ""+this.courseTitle.current.value;
        const CertId = ""+this.certificateId.current.value;
        const Spec =""+this.spec.current.value;
        const Cert=""+this.certificate.current.value;

        const requestBody = {
            query: `
            mutation{
                CreateCourse(courseInput:{courseName:"${Title}",specialization:"${Spec}",certificate:"${Cert}",credentials:"${CertId}"}){
                    courseName
                    specialization
                    certificate
                    credentials
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
                <Col><p className="projectTitleStyle">Add Courses</p></Col>
                </Row>

                <Row>
                <p className="projectFormTitle">Title</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <div className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text" 
                                    placeholder="Nptel DS & ML" 
                                    ref={this.courseTitle}
                                    />
                                <br />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>

                <Row>
                <p className="projectFormTitle">Certificate Id/License</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <div className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text" 
                                    placeholder="NPTEL230568956" 
                                    ref={this.certificateId}
                                    />
                                <br />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
                
                <Row>
                <p className="projectFormTitle">Specialization</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <div className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text"
                                    placeholder="DeepLearning" 
                                    ref={this.spec}
                                    />
                                <br />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>

                
                
                <Row>
                    <p className="projectFormTitle">Certificate</p>
                                </Row>
                
                                <Row className="formProjectRow">
                                    <Col>
                                        <div className="formBlog">
                                            <Form.Group>
                                                <Form.Control size="text" 
                                                    type="url" 
                                                    ref={this.certificate}
                                                    />
                                                <br />
                                            </Form.Group>
                                        </div>
                                    </Col>
                                 </Row>
                
               

                <Row >
                    <Col style={{textAlign:"right"}}>
                        <Button className="buttonRow" variant="outline-primary" type="submit" size="lg">Add</Button>{' '}
                    </Col>
                </Row>
               
                </Card>
                </Form>
           </Container>


        );

    }
}

export default Courses;