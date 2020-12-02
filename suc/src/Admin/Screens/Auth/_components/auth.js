import React,{Component} from 'react';
import {Container,Card,Form,Button,Row,Col} from 'react-bootstrap';
import history from '../../../../history/history';
import '../_css/auth.css';
import Fotter from '../../../../components/FirstPage/Fotter/_component/_fotter'

class Auth extends Component{
    constructor(props){
        super(props);
        this.MPIN = React.createRef();
        this.state = {
            isSet:true,
           
          };
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
                                            type="password"
                                            required
                                            pattern="[0-9]*"
                                            id="id1"
                                            ref={this.MPIN}
                                            maxLength="6" 
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card>
                        <Row>
                            <Col xs={2} style={{marginTop:"10px",textAlign:"center"}}></Col>
                            <Col xs={6}>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xl-5" style={{marginLeft:"50%"}}>
                                    <Button  variant="outline-warning" size="lg" type="submit" 
                                    onClick={() =>
                                        this.checkCredentials()
                                    }>Login</Button>
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