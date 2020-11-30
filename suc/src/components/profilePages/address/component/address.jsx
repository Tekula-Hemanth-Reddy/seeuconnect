import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
import history from '../../../../history/history';
import '../styles/styles.css';

export class Address extends Component{
    constructor(props){
        super(props);
        this.stateEl = React.createRef();
        this.cityEl = React.createRef();
        this.pinEl = React.createRef();
        this.addressEl = React.createRef();
        this.state = {
            location: "",
            State: "",
            City: "",
            PinCode: "",
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
                addresses{
                  location
                  state
                  city
                  pinCode
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
              location:resData.data.users.profile.addresses.location,
              State:resData.data.users.profile.addresses.state,
              City:resData.data.users.profile.addresses.city,
              PinCode:resData.data.users.profile.addresses.pinCode,
              });
            console.log(this.state.email);
          })
          .catch(err => {
              console.log(err);
          });
      }

    submitHandler = (event) =>{
        event.preventDefault();
        const State = ""+this.stateEl.current.value;
        const City = ""+this.cityEl.current.value;
        const Pin = ""+this.pinEl.current.value;
        const Address = ""+this.addressEl.current.value;

        const requestBody = {
            query: `
            mutation{
                UpdateAddress(addressInput:{state:"${State}",city:"${City}",location:"${Address}",pinCode:"${Pin}"}){
                  state
                  city
                  location
                  pinCode
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
            this.componentDidMount();
        })
        .catch(err => {
            console.log(err);
        });
    };


    render()
    {
        return(
            <Container className="personalDetailsContainer">
                <Form onSubmit={this.submitHandler}>
                <Card style={{borderColor:"#007fbb",borderWidth:"2px",backgroundColor:"transparent",padding:"15px"}}>
                <Row>
                    <Col><p className="personalDetailsTitle">Address</p></Col>
                </Row>

                <Container className="personalDetailsSubContainer">
                
                <Row style={{textAlign:"left"}}>
                    <Col>
                        <p style={{marginLeft:"4px"}}>Address</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <p className="personalDetailsGenderTitle" style={{color:"white",marginBottom:"20px"}}>State</p>
                        </Row>
                        <Row className="personalDetailsTitleRow">
                            <Col>
                            <div className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text"
                                            placeholder="Telangana"
                                            defaultValue={this.state.State}
                                            ref={this.stateEl}
                                        ></Form.Control>
                                    <br />
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>             
                    </Col>
                    <Col>
                        <Row>
                            <p className="personalDetailsGenderTitle" style={{color:"white",marginBottom:"20px"}}>City</p>
                        </Row>
                        <Row className="personalDetailsTitleRow">
                            <Col>
                            <div className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text"
                                            placeholder="Hyderabad"
                                            defaultValue={this.state.City}
                                            ref={this.cityEl}
                                        ></Form.Control>
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
                            <p className="personalDetailsFirstNameTitle">PinCode</p>
                        </Row>
                        <Row className="personalDetailsFirstNameRow">
                            <Col>
                                <div className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text"
                                            placeholder="111111"
                                            pattern="[1-9][0-9]{5}"
                                            id="id1"
                                            defaultValue={this.state.PinCode}
                                            ref={this.pinEl} 
                                        ></Form.Control>
                                    <br />
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col >
                        <Row>
                            <p className="personalDetailsFirstNameTitle">{"CompleteAddress"}</p>
                        </Row>
                        <Row className="personalDetailsFirstNameRow" 
                        >
                            <Col>
                                <div className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            as="textarea"
                                            rows={4} 
                                            maxLength="200"
                                            ref={this.addressEl}
                                            placeholder="Hno-1/1/1/ Ayyapa Society Madhapur,Hyderabad"
                                            defaultValue={this.state.location}
                                        ></Form.Control>
                                    <br />
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row >
                    <Col style={{textAlign:"right"}}>
                        <Button className="buttonRow" variant="outline-primary" size="lg" type='submit'>Submit</Button>{' '}
                    </Col>
                </Row>
                
                </Container>
                
                </Card>
                </Form>
            </Container>


        );

    }

}

export default Address;