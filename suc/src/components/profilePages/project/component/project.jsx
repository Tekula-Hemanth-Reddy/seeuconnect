import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card,Spinner,Modal} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
import history from '../../../../history/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';

export class Project extends Component
{
    constructor(props){
        super(props);
        this.titleEl = React.createRef();
        this.desEl = React.createRef();
        this.urlEl = React.createRef();
        this.demEl = React.createRef();
        this.state = {
            projectData:[],
            isSuccess:false,
            isSet:true,
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
                projects{
                    _id
                  projectName
                  projectDemo
                  projectDescription
                  projectUrl
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
                projectData:resData.data.users.profile.projects         
            });
          })
          .catch(err => {
              console.log(err);
          });
      }

    submitHandler = (event) =>{
        event.preventDefault();
        const Title = ""+this.titleEl.current.value;
        const Description = ""+this.desEl.current.value;
        const Urlpro = ""+this.urlEl.current.value;
        const Demo = ""+this.demEl.current.value;
        this.setState({
            isSet:false,
        });
        const requestBody = {
            query: `
            mutation{
                CreateProject(projectInput:{projectName:"${Title}",projectDescription:"${Description}",projectUrl:"${Urlpro}",projectDemo:"${Demo}"}){
                    _id
                    projectName
                    projectDemo
                    projectDescription
                    projectUrl
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
            let list = [...this.state.projectData];
            list.push(resData.data.CreateProject)
            this.setState({
                isSet:true,
                projectData: list,
                isSuccess:true
              });
        })
        .catch(err => {
            console.log(err);
        });
    };

    onDelete = (deleteId) =>{
        const requestBody = {
            query: `
            mutation{
                DeleteProject(projectId:"${deleteId}"){
                    _id
                    projectName
                    projectDescription
                    projectUrl
                    projectDemo
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
            this.setState({projectData: this.state.projectData.filter(function(common) { 
                return common._id !== deleteId 
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
           {this.state.isSuccess && <div style={{marginTop:"0px"}}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>Project Added SuccessFully</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>A Nice Work Done By You</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button href="/profile/about" variant="info">Done</Button>
                            <Button href="/profile/edit/project" variant="primary">Add Another</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            }
                {!this.state.isSuccess &&
               <Form onSubmit={this.submitHandler}>
           <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>

                <Row>
                <Col><p className="projectTitleStyle">Add Project</p></Col>
                </Row>

                <Row>
                <p className="projectFormTitle">Project Title</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <div className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="text" 
                                    placeholder="TidbEat"
                                    ref={this.titleEl} 
                                    required
                                    minlength="4"
                                    id="id1"
                                    required="true"
                                    />
                                <br />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
                
                <Row>
                <p className="projectFormTitle">Project Description</p>
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
                                    maxlength="550"
                                    id="id1"
                                    required="true"
                                    />
                                <br />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>

                <Row>
                <p className="projectFormTitle">Project Url</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <div className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="url" 
                                    placeholder="http://www.vce.ac.in"
                                    ref={this.urlEl}
                                    id="id1"
                                    required="true"
                                    />
                                <br />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
                <Row>
                <p className="projectFormTitle">Project Video/Demo Url</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <div className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="url" 
                                    placeholder="http://www.youtube.com/3kfirgs"
                                    ref={this.demEl}
                                    id="id1"
                                    />
                                <br />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
               

                <Row >
                    <Col style={{textAlign:"right"}}>
                    {
                                    this.state.isSet && 
                        <Button className="buttonRow" variant="outline-primary" size="lg" type='submit'>Add</Button>}
                        {
                                    !this.state.isSet && <Spinner animation="border" className="alumniSpinnerBorder" role="status">
                                            <span className="sr-only" style={{color:"#61dafb"}}></span>
                                        </Spinner>
                                }
                    </Col>
                </Row>
                </Card>
                </Form>
                }
           </Container>
           </Col>
                <Col md={3}>
                    <h2 style={{color:"#fff",marginTop:"15%"}}>Projects</h2>
                    {this.state.projectData.map(item =>(
                        <div style={{paddingTop:"20%"}}>
                        <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>
                            <Row>
                                <Col md={8}>
                                    <h5 style={{color:"#fff",marginTop:"5px"}}>{item.projectName}</h5>
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

export default Project;