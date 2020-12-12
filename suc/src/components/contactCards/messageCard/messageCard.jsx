import React,{Component} from 'react';
import {Card,Container,Row,Col,Form,ButtonGroup,Button} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fi';
import  './styles/styles.css';

class MessageCard extends Component
{
    constructor(props){
        super(props);
        this.name = React.createRef();
        this.email = React.createRef();
        this.message = React.createRef();
        this.state = {
            msg:"",
            mailTo:""
          };
    }
    submitHandler = (event) =>{
        event.preventDefault();
        const Name = ""+this.name.current.value;
        const Email = ""+this.email.current.value;
        const Message = ""+this.message.current.value;
        if(Name==="" || Email==="" || Message===""){
            return;
        }
        else{
            this.setState({
                msg: `Hello ${Name} !!! \n\t${Message}`,
                mailTo: `mailto:${Email}`
            });
            console.log(this.state.msg);
            console.log(this.state.mailTo);
        }
        
    };
    render(){
    return(
        <Card className="messageCardMainCard">
            <Container>
            <Form className="formClass" onSubmit={this.submitHandler}>
                <Row className="heremeTitle">Message</Row>
                
                <Row>
                    <Col>
                            <Form.Group>
                                <Form.Control size="text" type="text" placeholder="Name"ref={this.name} />
                                <br />
                            </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                            <Form.Group>
                                <Form.Control size="text" type="email" placeholder="Email" ref={this.email} />
                                <br />
                            </Form.Group>
                    </Col>
                </Row>

            <Row>
                <Col>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control placeholder="Message" as="textarea" rows={3} ref={this.message}/>
                        </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <ButtonGroup>
                        <Button className="sendButton" type="submit">
                                    
                                    <p className="sendText">Set Message</p>
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
            </Form>
            </Container>
            <div style={{marginTop:"20px"}}>
                <form action={this.state.mailTo} method="POST" enctype="multipart/form-data" name="EmailForm">
                    <textarea name="ContactCommentt" row="50" cols="40" style={{height:"120px",width:"360px", marginTop:"10px"}}
                    defaultValue={this.state.msg} 
                    >
                    </textarea>
                    <br/>
                    <Button type="submit" className="sendButton">
                    <Row>
                                <Col xs={1}>
                                    <HIIcons.FiMail className="contactMeIcon2"/>
                                </Col>
                                <Col xs={6}>
                                    <p className="sendText">Send</p>
                                </Col>
                            </Row>
                    </Button> 
                </form>
            </div>
        </Card>
    );
    }

}

export default MessageCard;