import React,{Component} from 'react';
import {Container,Card,Form,Button,Row,Col} from 'react-bootstrap';
import history from '../../../../history/history';
import '../_css/auth.css';
import * as FAIcons from 'react-icons/fa';
import Fotter from '../../../../components/FirstPage/Fotter/_component/_fotter'

class Auth extends Component{
    constructor(props){
        super(props);
        this.MPIN = React.createRef();
        this.state = {
            isSet:true,
            passwordShown:false,
           
          };
    }
    showPassword()
    {
        if(!this.state.passwordShown)
        {
            this.setState(
                {
                    passwordShown:true,
                }
            );
        }
        else
        {
            this.setState(
                {
                    passwordShown:false,
                }
            );
        }
        
    }
    checkCredentials() {
        const mpin=Number(""+this.MPIN.current.value);
        if(mpin===112233)
        {
            history.push('/adminLatestNews');
        }
    }
    render(){
        return(
            <div style={{backgroundColor:"#000",height:"100%"}}>
                <Container className="adminContainer">
                    <Form onSubmit={this.submitHandler}>
                        <h2>Authentication</h2>
                        <Card className="adminCardStyle" style={{marginTop:"20px",marginBottom: "20px"}}>
                            <Row>
                            <Col xs={2} style={{marginTop:"10px",textAlign:"right"}}>MPIN:</Col>
                                <Col xs={6}>
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type={this.state.passwordShown ? "text" : "password"}
                                            required
                                            pattern="[0-9]*"
                                            id="id1"
                                            ref={this.MPIN}
                                            title="Type the Correct MPIN"
                                            maxLength="6" 
                                        />
                                    </Form.Group>
                                    <i onClick={this.showPassword.bind(this)} style={{top:"20%"}}><FAIcons.FaEye/></i>
                                </Col>
                                <Col xs={3}>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xl-5" style={{marginLeft:"50%"}}>
                                    <Button  variant="outline-warning" size="lg" type="submit" 
                                    onClick={() =>
                                        this.checkCredentials()
                                    }>Login</Button>
                                </div>
                            </Col>
                            </Row>
                        </Card>
                        <Row>
                            <Col xs={2} style={{marginTop:"10px",textAlign:"center"}}></Col>
                            <Col xs={6}>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xl-5" style={{marginLeft:"50%"}}>
                                    <Button  variant="outline-primary" size="lg" href="/home" 
                                    >Home</Button>
                                </div>
                            </Col>
                        </Row>       
                    </Form>
                </Container>
                <Fotter/>
            </div>
        );
    }
}

export default Auth;