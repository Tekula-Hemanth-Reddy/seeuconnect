import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap';
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
    }

    static contextType = authContext;

    submitHandler = (event) =>{
        event.preventDefault();
        const Git = ""+this.gitEl.current.value;
        const Linked = ""+this.linEl.current.value;
        const Instagram = ""+this.insEl.current.value;
        const FaceBook = ""+this.facEl.current.value;
        const Twitter = ""+this.twiEl.current.value;
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
           <Container className="reachOutContainer">
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
                                    type="text" 
                                    placeholder="http://github.com.com/abc" 
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
                                    type="text" 
                                    placeholder="http://linkedin.com/abc"
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
                                    type="text" 
                                    placeholder="http://instagram.com/abc"
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
                                    type="text" 
                                    placeholder="http://facebook.com/abc"
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
                                    type="text" 
                                    placeholder="http://twitter.com/abc"
                                    ref={this.twiEl} 
                                    />
                                <br />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>

                <Row >
                    <Col style={{textAlign:"right"}}>
                        <Button className="buttonRow" variant="outline-primary" size="lg" type='submit'>Submit</Button>{' '}
                    </Col>
                </Row>
                </Card>
                </Form>
           </Container>


        );

    }
}

export default ReachOut;