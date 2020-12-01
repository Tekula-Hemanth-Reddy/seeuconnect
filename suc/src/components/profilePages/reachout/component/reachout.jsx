import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card,Spinner,Modal} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
import history from '../../../../history/history';
import '../styles/styles.css';

export class ReachOut extends Component
{ 
    constructor(props){
        super(props);
        this.gitEl = React.createRef();
        this.linEl = React.createRef();
        this.insEl = React.createRef();
        this.facEl = React.createRef();
        this.twiEl = React.createRef();
        this.state = {
            git: "",
            linked: "",
            instagram: "",
            face: "",
            twitter: "",
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
                reachOuts{
                  gitHub
                  linkedIn
                  instagram
                  faceBook
                  twitter
                }
              }
            }
          }
          `
      };
    
      // const token = this.context.token;
    
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
              git:resData.data.users.profile.reachOuts.gitHub,
              linked:resData.data.users.profile.reachOuts.linkedIn,
              instagram:resData.data.users.profile.reachOuts.instagram,
              face:resData.data.users.profile.reachOuts.faceBook,
              twitter:resData.data.users.profile.reachOuts.twitter
            });
          })
          .catch(err => {
              console.log(err);
          });
      }

    submitHandler = (event) =>{
        event.preventDefault();
        const Git = ""+this.gitEl.current.value;
        const Linked = ""+this.linEl.current.value;
        const Instagram = ""+this.insEl.current.value;
        const FaceBook = ""+this.facEl.current.value;
        const Twitter = ""+this.twiEl.current.value;
        this.setState({
            isSet:false,
        });
        const requestBody = {
            query: `
            mutation{
                UpdateReachOut(reachOutInput:{gitHub:"${Git}",linkedIn:"${Linked}",instagram:"${Instagram}",faceBook:"${FaceBook}",twitter:"${Twitter}"}){
                  gitHub
                  linkedIn
                  instagram
                  faceBook
                  twitter
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
            this.setState({
                isSet:true,
                isSuccess:true
            });
        })
        .catch(err => {
            console.log(err);
        });
    };


    render()
    {
        return(
           <Container className="reachOutContainer">
               {this.state.isSuccess && <div style={{marginTop:"0px"}}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>Skill Added SuccessFully</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>A Nice Work Done By You</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button href="/profile/about" variant="info">Done</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            }
                {!this.state.isSuccess &&
               <Form onSubmit={this.submitHandler}>
           <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>

                <Row>
                <Col><p className="reachOutTitleStyle">Reach Out</p></Col>
                </Row>

                <Row>
                <p className="formTitle">Github</p>
                </Row>

                <Row className="formBlogRow">
                    <Col>
                        <div className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="url"
                                    id="id1" 
                                    placeholder="http://github.com.com/abc"
                                    defaultValue={this.state.git}
                                    ref={this.gitEl}
                                    />
                                <br />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
                
                <Row>
                <p className="formTitle">LinkedIn</p>
                </Row>

                <Row className="formBlogRow">
                    <Col>
                        <div className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="url"
                                    id="id1" 
                                    placeholder="http://linkedin.com/abc"
                                    defaultValue={this.state.linked}
                                    ref={this.linEl}
                                    />
                                <br />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>

                <Row>
                <p className="formTitle">Instagram</p>
                </Row>

                <Row className="formBlogRow">
                    <Col>
                        <div className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="url"
                                    id="id1" 
                                    placeholder="http://instagram.com/abc"
                                    defaultValue={this.state.instagram}
                                    ref={this.insEl} 
                                    />
                                <br />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
                <Row>
                <p className="formTitle">Facebook</p>
                </Row>

                <Row className="formBlogRow">
                    <Col>
                        <div className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="url"
                                    id="id1" 
                                    placeholder="http://facebook.com/abc"
                                    defaultValue={this.state.face}
                                    ref={this.facEl}
                                    />
                                <br />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
                <Row>
                <p className="formTitle">Twitter</p>
                </Row>

                <Row className="formBlogRow">
                    <Col>
                        <div className="formBlog">
                            <Form.Group>
                                <Form.Control size="text" 
                                    type="url"
                                    id="id1" 
                                    placeholder="http://twitter.com/abc"
                                    defaultValue={this.state.twitter}
                                    ref={this.twiEl} 
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
                        <Button className="buttonRow" variant="outline-primary" size="lg" type='submit'>Submit</Button>}
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


        );

    }
}

export default ReachOut;