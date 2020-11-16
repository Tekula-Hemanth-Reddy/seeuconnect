import React,{Component} from 'react';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
import history from '../../../../history/history';
import '../styles/styles.css';

export class Skills extends Component{

    
    constructor(props){
        super(props);
        this.nameEl = React.createRef();
        this.rangeEl = React.createRef();
    }

    static contextType = authContext;

    submitHandler = (event) =>{
        event.preventDefault();
        const Name = ""+this.nameEl.current.value;
        const Range = Number(""+this.rangeEl.current.value);
        const requestBody = {
            query: `
            mutation{
                CreateSkill(skillInput:{skill:"${Name}",rating:${Range}})
                {
                  skill
                  rating
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
                <Container className="skillsContainer">
                    <Form onSubmit={this.submitHandler}>
                <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>

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
                                        ref={this.nameEl}
                                        >
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
                                            type="number" 
                                            placeholder="75"
                                            ref={this.rangeEl}
                                        />
                                    <br />
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>

                        <Row style={{marginRight:"10px",marginBottom:"10px"}} >
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

export default Skills;