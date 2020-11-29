import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
import history from '../../../../history/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';

export class Achievement extends Component
{
    constructor(props){
        super(props);
        this.titleEl = React.createRef();
        this.desEl = React.createRef();
        this.urlEl = React.createRef();
        this.state = {
            awardData:[]
          }
    }

    static contextType = authContext;
    componentDidMount(){

        const token = this.context.userId;
    
        const requestBody = {
          query: `
          query{
            users(userId:"${token}"){
              profile{
                achievements{
                  title
                  achievementDescription
                  certificate
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
              awardData: resData.data.users.profile.achievements
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
        const File = ""+this.urlEl.current.value;
        const requestBody = {
            query: `
            mutation{
                CreateAchievement(achievementInput:{title:"${Title}",achievementDescription:"${Description}",certificate:"${File}"}){
                  achievementDescription
                  certificate
                  title
                }
              }
            `
        };

        const token = this.context.token;

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
            history.push('/profile/edit');
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
                <Col><p className="projectTitleStyle">Add Achievement</p></Col>
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
                                    minlength="4"
                                    placeholder="TidbEat"
                                    ref={this.titleEl}
                                    />
                                <br />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>    
                <Row>
                <p className="projectFormTitle">Achievement Description</p>
                </Row>

                <Row className="formProjectRow">
                    <Col>
                        <div className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    as="textarea"
                                    maxlength="150"
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
                    <p className="projectFormTitle">Upload file</p>
                    </Row>
    
                    <Row className="formProjectRow">
                        <Col>
                            <div className="formBlog">
                                <Form.Group>
                                    <Form.Control size="text" 
                                        type="url" 
                                        id="id1"
                                        placeholder="http://youtube.com/"
                                        ref={this.urlEl}
                                        />
                                    <br />
                                </Form.Group>
                            </div>
                        </Col>
                     </Row>
                <Row>
                    <Col style={{textAlign:"right"}}>
                        <Button className="buttonRow" variant="outline-primary" size="lg" type='submit'>Add</Button>
                    </Col>
                </Row>
               
                </Card>
                </Form>
           </Container>
           </Col>
                <Col md={3}>
                    <h2 style={{color:"#fff",marginTop:"15%"}}>Achievements</h2>
                    {this.state.awardData.map(item =>(
                        <div style={{paddingTop:"20%"}}>
                        <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>
                            <Row>
                                <Col md={8}>
                                    <h5 style={{color:"#fff",marginTop:"5px"}}>{item.title}</h5>
                                </Col>
                                <Col md={4}>
                                <Button variant="outline-danger">{<FontAwesomeIcon icon={faTimes} />}</Button>
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

export default Achievement;