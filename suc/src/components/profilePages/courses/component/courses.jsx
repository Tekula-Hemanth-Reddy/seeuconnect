import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
import history from '../../../../history/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';

export class Courses extends Component
{
    constructor(props){
        super(props);
        this.courseTitle = React.createRef();
        this.certificateId= React.createRef();
        this.spec = React.createRef();
        this.certificate=React.createRef();
        this.state = {
            courseData:[]
          }
    }

    static contextType = authContext;
    componentDidMount(){

        const token = sessionStorage.getItem('userId');
    
        const requestBody = {
          query: `
          query{
            users(userId:"${token}"){
              profile{
                courses{
                  _id
                  courseName
                  specialization
                  certificate
                  credentials
                }
              }
            }
          }
          `
      };
    
      fetch('http://localhost:4000/graphql', {
              method: 'POST',
              body: JSON.stringify(requestBody),
              headers: {
                  'Content-Type': 'application/json',
                  // 'Authorization': 'Bearer ' + token
              }
          }).then(res => {
              if(res.status!== 200 && res.status!== 201){
                  throw new Error('Failed!');
              }
              return res.json();
          })
          .then(resData => {
              this.setState({
              courseData: resData.data.users.profile.courses
            });
          })
          .catch(err => {
              console.log(err);
          });
      }

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
                    _id
                    courseName
                    specialization
                    certificate
                    credentials
                  }
              }
            `
        };

        const token = sessionStorage.getItem('token');

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
            let list = [...this.state.courseData];
            list.push(resData.data.CreateCourse)
            this.setState({
                courseData: list
              });
        })
        .catch(err => {
            console.log(err);
        });
    };
    onDelete = (courseId) =>{
        const requestBody = {
            query: `
            mutation{
                DeleteCourse(courseId:"${courseId}"){
                    _id
                    courseName
                    specialization
                    certificate
                    credentials
                }
              }
            `
        };

        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            if(res.status!== 200 && res.status!== 201){
                throw new Error('Failed!');
            }
            return res.json();
        })
        .then(resData => {
            this.setState({courseData: this.state.courseData.filter(function(crs) { 
                return crs._id !== courseId 
            })});
        })
        .catch(err => {
            console.log(err);
        });
    };

    render()
    {
        return(
            <div style={{marginLeft:"20vh"}}>
            <Row>
                <Col md={8}>
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
                                    required
                                    id="id1"
                                    minLength="4"
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
                                        placeholder="https://gdrive.com/certficate"
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
           </Col>
                <Col md={3}>
                    <h2 style={{color:"#fff",marginTop:"15%"}}>Courses</h2>
                    {this.state.courseData.map(item =>(
                        <div style={{paddingTop:"20%"}}>
                        <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>
                            <Row>
                                <Col md={8}>
                                    <h5 style={{color:"#fff",marginTop:"5px"}}>{item.courseName}</h5>
                                </Col>
                                <Col md={4}>
                                <Button variant="outline-danger" onClick={this.onDelete.bind(this,item._id)}>{<FontAwesomeIcon icon={faTimes} />}</Button>
                                </Col>
                            </Row>
                            </Card>
                        </div>
                    ))}
                </Col>
                </Row>
                </div>

        );

    }
}

export default Courses;