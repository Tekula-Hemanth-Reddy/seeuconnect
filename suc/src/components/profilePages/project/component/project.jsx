import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
import history from '../../../../history/history';
import '../styles/styles.css';

export class Project extends Component
{
    constructor(props){
        super(props);
        this.titleEl = React.createRef();
        this.desEl = React.createRef();
        this.urlEl = React.createRef();
        this.demEl = React.createRef();
    }

    static contextType = authContext;

    submitHandler = (event) =>{
        event.preventDefault();
        const Title = ""+this.titleEl.current.value;
        const Description = ""+this.desEl.current.value;
        const Urlpro = ""+this.urlEl.current.value;
        const Demo = ""+this.demEl.current.value;
        const requestBody = {
            query: `
            mutation{
                CreateProject(projectInput:{projectName:"${Title}",projectDescription:"${Description}",projectUrl:"${Urlpro}",projectDemo:"${Demo}"}){
                projectName
                  projectDescription
                  projectUrl
                  projectDemo
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
                                    type="text" 
                                    placeholder="http://abc.com"
                                    ref={this.urlEl}
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
                                    type="text" 
                                    placeholder="http://youtube.com"
                                    ref={this.demEl}
                                    />
                                <br />
                            </Form.Group>
                        </div>
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

export default Project;