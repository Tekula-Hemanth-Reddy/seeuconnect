import React,{Component} from 'react';
import {Container,Row,Col,Card,Form,Button,Spinner,Modal} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';

export class Skills extends Component{

    
    constructor(props){
        super(props);
        this.nameEl = React.createRef();
        this.rangeEl = React.createRef()
        this.state = {isSet:true,skillData: [],isSuccess:false};
    }

    static contextType = authContext;

    componentDidMount(){
    
        const token = sessionStorage.getItem('userId');
    
        const requestBody = {
          query: `
          query{
            users(userId:"${token}"){
              profile{
                skills{
                    _id
                  skill
                  rating
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
            this.setState({skillData: resData.data.users.profile.skills});
          })
          .catch(err => {
              console.log(err);
          });
      }

    submitHandler = (event) =>{
        event.preventDefault();
        const Name = ""+this.nameEl.current.value;
        const Range = Number(""+this.rangeEl.current.value);
        this.setState({
            isSet:false,
        });
        const requestBody = {
            query: `
            mutation{
                CreateSkill(skillInput:{skill:"${Name}",rating:${Range}})
                {
                    _id
                  skill
                  rating
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
            let list = [...this.state.skillData];
            list= list.filter(function(common) { 
                return common._id !== resData.data.CreateSkill._id 
            })
            list.push(resData.data.CreateSkill)
            this.setState({
                isSet:true,
                skillData: list,
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
                DeleteSkill(skillId:"${deleteId}"){
                    _id
                    skill
                    rating
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
            this.setState({skillData: this.state.skillData.filter(function(common) { 
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
                <Container className="skillsContainer">
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
                            <Button href="/profile/edit/skill" variant="primary">Add Another</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            }
                {!this.state.isSuccess &&
                    <Form onSubmit={this.submitHandler}>
                <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px",marginTop:"10%"}}>

                    <Row>
                        <Col>
                            <p className="addSkillTitle">Add Skill</p>
                        </Col>
                    </Row>

                    <Row style={{marginLeft:"10px"}}>
                        <Col><p style={{textAlign:"left",fontSize:"17.5px",marginTop:"20px",color:"white"}}>Select Skill</p></Col>
                    </Row>

                    <Row className="personalDetailsTitleRow" style={{marginLeft:"10px"}}>
                            <Col md="auto">
                                
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label></Form.Label>
                                        <Form.Control 
                                        as="select"
                                        required="true"
                                        ref={this.nameEl}
                                        >
                                        <option> </option>
                                        <option>C</option>
                                        <option>C++</option>
                                        <option>DS</option>
                                        <option>Java</option>
                                        <option>CyberSecurity</option>
                                        <option>Android</option>
                                        <option>Kotlin</option>
                                        <option>Html</option>
                                        <option>CSS</option>
                                        <option>JavaScript</option>
                                        <option>PHP</option>
                                        <option>React</option>
                                        <option>Angular</option>
                                        <option>Python</option>
                                        <option>Node</option>
                                        <option>MongoDb</option> 
                                        <option>Graphql</option>
                                        <option>Matlab</option>
                                        <option>Verilog</option>
                                        <option>Ardino</option>
                                        <option>Nodencu</option>
                                        <option>Rasberrypi</option>
                                        <option>LoraTechnology</option>
                                        <option>Networking</option>
                                        <option>Assembly Language</option>
                                        </Form.Control>
                                    </Form.Group>
                                
                            </Col>
                        </Row>             

                        <Row style={{marginLeft:"10px"}}>
                            <Col>
                                <p style={{textAlign:"left",fontSize:"17.5px",marginTop:"20px",color:"white"}}>Rate your self in the skill (0-100)</p>
                            </Col>
                        </Row>

                        
                        <Row className="personalDetailsFirstNameRow" style={{marginLeft:"10px"}}>
                            <Col md="auto">
                                <div className="formRow">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text"
                                            required="true"
                                            placeholder="75"
                                            pattern="^[1-9][0-9]?$|^100$"
                                            id="id1"
                                            ref={this.rangeEl}
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
                    <h2 style={{color:"#fff",marginTop:"15%"}}>Skills</h2>
                    {this.state.skillData.map(item =>(
                        <div style={{paddingTop:"20%"}}>
                        <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>
                            <Row>
                                <Col md={8}>
                                    <h5 style={{color:"#fff",marginTop:"5px"}}>{item.skill}</h5>
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

export default Skills;