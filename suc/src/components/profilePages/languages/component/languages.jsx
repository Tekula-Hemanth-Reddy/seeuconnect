import React,{Component} from 'react';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
import history from '../../../../history/history';
import '../styles/styles.css';

export class Languages extends Component{

    constructor(props){
        super(props);
        this.nameEl = React.createRef();
    }

    static contextType = authContext;

    submitHandler = (event) =>{
        event.preventDefault();
        const Name = ""+this.nameEl.current.value;
        const requestBody = {
            query: `
            mutation{
                CreateLanguage(languageInput:"${Name}"){
                    language 
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
                <Container className="languagesContainer">
                <Form onSubmit={this.submitHandler}>
                <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>

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
                                <Button className="buttonRow" variant="outline-primary" size="lg" type='submit'>Add</Button>{' '}
                            </Col>
                        </Row>

                        </Card>
                        </Form>
                </Container>
            );
    }
   
}

export default Languages;