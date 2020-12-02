import React,{Component} from 'react';
import AdminNavBar from '../../../Components/navBar/component/adminNavbar';
import {Container,Row,Col,Card,Form,Button,Spinner,Modal} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Fotter from '../../../../components/FirstPage/Fotter/_component/_fotter';
import '../css/styles.css';

export class LatestNews extends Component{

    
    constructor(props){
        super(props);
        this.title = React.createRef();
        this.description = React.createRef()
        this.state = {isSet:true,latestData: [],isSuccess:false};
    }

    static contextType = authContext;

    componentDidMount(){
    
        const token = sessionStorage.getItem('userId');
    
        const requestBody = {
            query: `
            query{
                latest{
                  _id
                  title
                  description
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
            this.setState({latestData: resData.data.latest});
          })
          .catch(err => {
              console.log(err);
          });
      }

    submitHandler = (event) =>{
        event.preventDefault();
        const Title = ""+this.title.current.value;
        const Description=""+this.description.current.value;
        //need to add the new one to latest data

        const requestBody = {
            query: `
            mutation{
                CreateLatest(latestInput:{title:"${Title}",description:"${Description}"})
                {
                  _id
                  title
                  description
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
        }).then(resData => {
            let list = [...this.state.latestData];
            list= list.filter(function(common) { 
                return common._id !== resData.data.CreateLatest._id 
            })
            list.push(resData.data.CreateLatest)
            this.setState({
                isSet:true,
                latestData: list,
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
                DeleteLatest(latestId:"${deleteId}"){
                    _id
                  title
                  description
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
            this.setState({latestData: this.state.latestData.filter(function(common) { 
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
            <div style={{backgroundColor:"#000"}}>
            <div style={{marginBottom:"60px"}}>
            <AdminNavBar/>
            </div>
           
            <Row>
                <Col md={8}>
                <Container className="skillsContainer">
                {this.state.isSuccess && <div style={{marginTop:"0px"}}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>News Added SuccessFully</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>A Nice Work Done By You</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button href="/adminLatestNews" variant="primary">Done</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            }
                {!this.state.isSuccess &&
                    <Form onSubmit={this.submitHandler}>
                <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px",marginTop:"10%"}}>

                    <Row>
                        <Col>
                            <p className="addSkillTitle">Add Latest News</p>
                        </Col>
                    </Row>

                    <Row style={{marginLeft:"10px",marginBottom:"20px"}}>
                        <Col><p style={{textAlign:"left",fontSize:"17.5px",marginTop:"20px",color:"white"}}>Title</p></Col>
                    </Row>

                    <Row className="personalDetailsTitleRow" style={{marginLeft:"10px"}}>
                            <Col>
                            <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="text"
                                required="true"
                                placeholder="Title"
                                id="id1"
                                ref={this.title}
                            />
                        <br />
                        </Form.Group>
                                    
                            </Col>
                        </Row>             

                        <Row style={{marginLeft:"10px"}}>
                            <Col>
                                <p style={{textAlign:"left",fontSize:"17.5px",marginTop:"20px",color:"white"}}>Description</p>
                            </Col>
                        </Row>

                        
                        <Row className="personalDetailsFirstNameRow" style={{marginLeft:"10px"}}>
                            <Col>
                                <div className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            as="textArea"
                                            required="true"
                                            rows={4}
                                            placeholder="Description"
                                            id="id1"
                                            ref={this.description}
                                        />
                                    <br />
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>

                        <Row style={{marginRight:"10px",marginBottom:"10px"}} >
                            <Col style={{textAlign:"right"}}>
                                {
                                    this.state.isSet && <Button className="buttonRow" variant="outline-primary" size="lg" type='submit'>Add</Button>}
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
                    <h2 style={{color:"#fff",marginTop:"15%"}}>Latest News</h2>
                    {this.state.latestData.map(item =>(
                        <div style={{paddingTop:"20%"}}>
                        <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px 15px 15px 25px"}}>
                            <Row>
                                <Col md={8}>
                                    <Row>
                                    <h5 style={{color:"#fff",marginTop:"5px",textAlign:"left",marginLeft:"2px"}}>{item.title}</h5>
                                    </Row>
                                    <Row>
                                    <p style={{color:"#fff",marginTop:"5px",textAlign:"left",marginLeft:"2px"}}>{item.description}</p>
                                    </Row>
                                </Col>
                                <Col md={4}>
                                <Button variant="outline-danger" onClick={this.onDelete.bind(this,item._id)} >{<FontAwesomeIcon icon={faTimes} />}</Button>
                                </Col>
                            </Row>
                            </Card>
                        </div>
                    ))}
                </Col>
                </Row>
                <Fotter/>
                </div>
            );
    }
   
}

export default LatestNews;