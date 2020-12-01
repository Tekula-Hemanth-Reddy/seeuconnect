import React,{Component} from 'react';
import {Container,Card,Form,Button,Row,Col} from 'react-bootstrap';
import '../_css/auth.css';

class Auth extends Component{
    constructor(props){
        super(props);
        this.titleEl = React.createRef();
        this.pEl = React.createRef();
        this.cEl = React.createRef();
        this.firstEl = React.createRef();
        this.lastEl = React.createRef();
        this.phonePersonEl = React.createRef();
        this.companyEl = React.createRef();
        this.phoneCompanyEl = React.createRef();
        this.emailEl = React.createRef();
        this.addressEl = React.createRef();
        this.websiteEl = React.createRef();
        this.state = {
            isSet:true,
            userId: this.props.alumniId,
            title: "",
            name: "",
            phone: "",
            email: "",
            company: "",
            cmpPhone: "",
            cmpMail: "",
            cmpAddress: "",
            cmpWebsite: ""
          };
    }
    render(){
        return(
            <div style={{backgroundColor:"#000",height:"100%"}}>
                <Container className="adminContainer">
                    <Form onSubmit={this.submitHandler}>
                        <h2>Authentication</h2>
                        <Card className="adminCardStyle" style={{marginTop:"20px",marginBottom: "20px"}}>
                            <Row>
                                <Col xs={2} style={{marginTop:"30px",textAlign:"right"}}>Login Id :</Col>
                                <Col xs={6}>    
                                <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text"  
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                            <Col xs={2} style={{marginTop:"10px",textAlign:"right"}}>Password :</Col>
                                <Col xs={6}>
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="Password" 
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card>
                        <Row>
                            <Col xs={2} style={{marginTop:"10px",textAlign:"center"}}></Col>
                            <Col xs={6}>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xl-5" style={{marginLeft:"30%"}}>
                                    <Button  variant="outline-warning" size="lg" type="submit">Login</Button>
                                </div>
                            </Col>
                        </Row>       
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Auth;