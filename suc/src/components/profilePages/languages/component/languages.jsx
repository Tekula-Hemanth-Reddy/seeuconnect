import React,{Component} from 'react';
import {Container,Row,Col,Card,Form,Button,Spinner,Modal} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';

export class Languages extends Component{

    constructor(props){
        super(props);
        this.nameEl = React.createRef();
        this.state = {languageData: [],isSuccess:false,isSet:true,};
    }

    static contextType = authContext;
    componentDidMount(){

        const token = sessionStorage.getItem('userId');
    
        const requestBody = {
          query: `
          query{
            users(userId:"${token}"){
              profile{
                languages{
                  _id
                  language
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
            this.setState({languageData: resData.data.users.profile.languages});
          })
          .catch(err => {
              console.log(err);
          });
      };

    submitHandler = (event) =>{
        event.preventDefault();
        const Name = ""+this.nameEl.current.value;
        this.setState({
            isSet:false,
        });
        const requestBody = {
            query: `
            mutation{
                CreateLanguage(languageInput:{language:"${Name}"}){
                    _id
                    language 
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
            let list = [...this.state.languageData];
            list.push(resData.data.CreateLanguage)
            this.setState({
                isSet:true,
                languageData: list,
                isSuccess:true
              });
        })
        .catch(err => {
            console.log(err);
        });
    };

    onDelete = (languageId) =>{
        const requestBody = {
            query: `
            mutation{
                DeleteLanguage(languageId:"${languageId}"){
                  language
                  _id
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
            this.setState({languageData: this.state.languageData.filter(function(lan) { 
                return lan._id !== languageId 
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
                <Container className="languagesContainer">
                {this.state.isSuccess && <div style={{marginTop:"0px"}}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>Language Added SuccessFully</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>A Nice Work Done By You</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button href="/profile/about" variant="info">Done</Button>
                            <Button href="/profile/edit/language" variant="primary">Add Another</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            }
                {!this.state.isSuccess &&
                <Form onSubmit={this.submitHandler}>
                <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px",marginTop:"20%"}}>

                    <Row>
                        <Col>
                            <p className="addLanguageTitle">Add Language</p>
                        </Col>
                    </Row>

                    <Row style={{marginLeft:"10px"}}>
                        <Col><p style={{textAlign:"left",fontSize:"17.5px",marginTop:"20px",color:"white"}}>Select Language</p></Col>
                    </Row>

                    <Row className="personalDetailsTitleRow" style={{marginLeft:"10px"}}>
                            <Col md="auto">
                                <div>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label></Form.Label>
                                        <Form.Control 
                                        as="select"
                                        ref={this.nameEl}
                                        >
                                        <option>Telugu</option>
                                        <option>Hindi</option>
                                        <option>French</option>
                                        <option>English</option>
                                        <option>German</option>
                                        <option>Tamil</option>
                                        <option>Marathi</option>
                                        <option>Malayalam</option>
                                        <option>Punjabi</option>
                                        <option>Oriya</option>
                                        <option>Spanish</option>
                                        <option>Sinhalese</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>             

                        <Row style={{marginRight:"10px",marginBottom:"10px"}} >
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
                    <h2 style={{color:"#fff",marginTop:"15%"}}>Languages</h2>
                    {this.state.languageData.map(item =>(
        
                        <div style={{paddingTop:"20%"}}>
                        <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>
                            <Row>
                                <Col md={8}>
                                    <h5 style={{color:"#fff",marginTop:"5px"}}>{item.language}</h5>
                                </Col>
                                <Col md={4}>
                                <Button variant="outline-danger" onClick={this.onDelete.bind(this,item._id)}>{<FontAwesomeIcon icon={faTimes}/>}</Button>
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

export default Languages;