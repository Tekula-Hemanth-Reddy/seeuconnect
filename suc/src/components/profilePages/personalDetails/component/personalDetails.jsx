import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card,Spinner,Modal} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
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
        this.state = {
            name:"",
            phone:"",
            portfolio:"",
            interested:"",
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
                name
                phoneNumber
                interestedIntern
                portFolio
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
              name: resData.data.users.profile.name===null?"---":resData.data.users.profile.name,
              interested: (resData.data.users.profile.interestedIntern)?"Yes":"NO",
              phone: resData.data.users.profile.phoneNumber===null?"+91- ":resData.data.users.profile.phoneNumber,
              portfolio: resData.data.users.profile.portFolio
            });
          })
          .catch(err => {
              console.log(err);
          });
      }

    submitHandler = (event) =>{
        event.preventDefault();
        const Title = (""+this.titleEl.current.value)===""?"Mr.":(""+this.titleEl.current.value);
        const Phn = (""+this.pEl.current.value)===""?"+91":(""+this.pEl.current.value);
        const intrested = ""+this.iEl.current.value==="false"?"false":"true";
        const FirstName = ""+this.firstEl.current.value;
        const LastName = ""+this.lastEl.current.value;
        const Phone = ""+this.phonePersonEl.current.value;
        const Website = ""+this.websiteEl.current.value;
        this.setState({
            isSet:false,
        });

        const requestBody = {
            query: `
            mutation{
                UpdateProfile(profileInput:{name:"${Title}${"-"}${FirstName}${"-"}${LastName}",phoneNumber:"${Phn}${"-"}${Phone}",portFolio:"${Website}",interestedIntern:${intrested}}){
                  _id
                  name
                  phoneNumber
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
            <Container className="personalDetailsContainer">
                {this.state.isSuccess && <div style={{marginTop:"0px"}}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>SuccessFully</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>Nice Name</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button href="/profile/about" variant="info">Done</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            }
                {!this.state.isSuccess &&
                <Form onSubmit={this.submitHandler}>
                <Card style={{borderColor:"#007fbb",borderWidth:"2px",backgroundColor:"transparent",padding:"15px"}}>
                <Row>
                    <Col><p className="personalDetailsTitle">Personal Details</p></Col>
                </Row>

                <Container className="personalDetailsSubContainer">
                <Row>
                    <Col>
                        <Row>
                            <p className="personalDetailsGenderTitle" style={{marginBottom:"22px"}}>Title</p>
                        </Row>
                        <Row className="personalDetailsTitleRow">
                            <Col>
                            <div className="formRow">
                                <Form.Group>
                                    <Form.Control 
                                        size="text" 
                                        type="text"
                                        placeholder={"Mr./Mrs./Ms."}
                                        ref={this.titleEl} 
                                        defaultValue={this.state.name.split("-")[0]}
                                    ></Form.Control>
                                <br />
                                </Form.Group>
                                </div>
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
                                            required
                                            id="id1"
                                            pattern="[a-zA-Z ]+"
                                            title="The name should contain only characters"
                                            defaultValue={this.state.name.split("-")[1]}
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
                                            defaultValue={this.state.name.split("-")[2]}
                                            ref={this.lastEl} 
                                            required
                                            title="The name should contain only characters"
                                            id="id1"
                                            pattern="[a-zA-Z ]+"
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
                                            defaultValue={this.state.phone.split("-")[0]}
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
                                    <Form.Group controlId="validationCustom01">
                                        <Form.Control 
                                            size="text" 
                                            type="text"
                                            placeholder={"9126126126"}
                                            ref={this.phonePersonEl}
                                            pattern="[6789][0-9]{9}"
                                            maxLength="10"
                                            defaultValue={this.state.phone.split("-")[1]}
                                            title="The phone number should contain 10 digits and must be Indian Phone number"
                                            required
                                            id="id1"
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
                                            type="url"
                                            id="id1"
                                            title="Provide a proper Url"
                                            placeholder={"https://www.vce.ac.in"}
                                            ref={this.websiteEl}
                                            defaultValue={this.state.portfolio}
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
                                        required
                                        default={this.state.interested}
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

                </Container>
                </Card>
                </Form>
            }
            </Container>


        );

    }

}

export default PersonalDetails;