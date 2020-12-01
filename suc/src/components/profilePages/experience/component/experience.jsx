import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card,Spinner,Modal} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
import history from '../../../../history/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
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
        this.state = {
            positionData:[],
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
                positions{
                    _id
                  positionHeld
                  companyName
                  positionDescription
                  startDate
                  endDate
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
              positionData: resData.data.users.profile.positions
            });
          })
          .catch(err => {
              console.log(err);
          });
      }

    submitHandler = (event) =>{
        event.preventDefault();
        const Company = ""+this.cmpEl.current.value;
        const Position = ""+this.posEl.current.value;
        const Description = ""+this.desEl.current.value;
        const Start = ""+this.staEl.current.value;
        const End = ""+this.endEl.current.value;
        this.setState({
            isSet:false,
        });
        const requestBody = {
            query: `
            mutation{
                CreatePosition(positionInput:{positionHeld:"${Position}",companyName:"${Company}",positionDescription:"${Description}",startDate:"${Start}",endDate:"${End}"}){
                  _id
                  positionHeld
                  companyName
                  positionDescription
                  startDate
                  endDate
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
            let list = [...this.state.positionData];
            list.push(resData.data.CreatePosition)
            this.setState({
                isSet:true,
                positionData: list,
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
                DeletePosition(positionId:"${deleteId}"){
                    _id
                    positionHeld
                    companyName
                    positionDescription
                    startDate
                    endDate
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
            this.setState({positionData: this.state.positionData.filter(function(common) { 
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
                            <Modal.Title>Experience Added SuccessFully</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>A Nice Work Done By You</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button href="/profile/about" variant="info">Done</Button>
                            <Button href="/profile/edit/experience" variant="primary">Add Another</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            }
                {!this.state.isSuccess &&
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
                                    required
                                    minlength="4"
                                    id="id1"
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
                                    required
                                    minlength="4"
                                    id="id1"
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
                                    maxlength="150"
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
                    <h2 style={{color:"#fff",marginTop:"15%"}}>Experiences</h2>
                    {this.state.positionData.map(item =>(
                        <div style={{paddingTop:"20%"}}>
                        <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>
                            <Row>
                                <Col md={8}>
                                    <h5 style={{color:"#fff",marginTop:"5px"}}>{item.positionHeld}{"-"}{item.companyName}</h5>
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

export default Experience;