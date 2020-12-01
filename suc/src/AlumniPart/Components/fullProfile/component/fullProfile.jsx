import React,{Component} from "react";
import {Container,Card,Row,Col,Image} from "react-bootstrap";
import '../styles/styles.css';
import PersonImage from '../../../../assets/images/sliders/student.png';

class FullProfile extends Component{
  
    constructor(props){
        super(props);

       this.state={
        studentData: sessionStorage.getItem("profileProps")===null?[]:JSON.parse(sessionStorage.getItem("profileProps")),
       }
        
       
      }
      
    render()
    {
        console.log(this.state.studentData);
        return(
            <div style={{backgroundColor:"#292727"}}>
                <Container className="fullProfileContainer">
                    <Card className="fullProfileCard">
                        <Container>
                            <Row style={{marginLeft:"20px",left:"20px"}}>
                            <Image src={PersonImage} roundedCircle  className="roundImage" />
                            </Row>
                            <Row>
                                <Col  md="auto">
                                <p style={{color:"white",fontSize:"20px",marginLeft:"40px"}}>{this.state.studentData.name}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col  md="auto">
                                <p style={{color:"white",fontSize:"20px",marginLeft:"40px"}}>{this.state.studentData.phoneNumber}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col  md="auto">
                                <p style={{color:"white",fontSize:"20px",marginLeft:"40px"}}>{this.state.studentData.email}</p>
                                </Col>
                            </Row>
                            <Row style={{marginTop:"20px"}}>
                               <Col xs={6}>
                                    <p>Courses</p>
                                    <Row>
                                        <Col>
                                            
                                        </Col>                               
                                    </Row>
                               </Col>
                               <Col xs={6}>
                                    <p>Positions</p>
                               </Col>
                            </Row>
                        </Container>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default FullProfile;