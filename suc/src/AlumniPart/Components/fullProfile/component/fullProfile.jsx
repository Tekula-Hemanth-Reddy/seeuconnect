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
                                <p style={{color:"white",fontSize:"20px",textAlign:"left"}}>{this.state.studentData.name}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col  md="auto">
                                <p style={{color:"white",fontSize:"20px",textAlign:"left"}}>{this.state.studentData.phoneNumber}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col  md="auto">
                                <p style={{color:"white",fontSize:"20px",textAlign:"left"}}>{this.state.studentData.email}</p>
                                </Col>
                            </Row>
                            
                            <Row>
                                <p style={{color:"#007fbb",fontSize:"17.5px",textAlign:"left",marginLeft:"12px" }}>Courses</p>
                            </Row>
                            <Row>
                                {this.state.studentData.courses_data.map(item =>(
                                    <Col md="auto">
                                        <Card style={{ width: '15rem',height:"45px",marginTop:"5px",marginBottom:"10px",borderColor:"#007fbb",borderWidth:"3px"}}>
                                        <p style={{color:"black",textAlign:"left",marginTop:"7px",marginLeft:"4px"}}>{item.courseName}</p>  
                                    </Card>
                                  </Col>
                                ))}     
                            </Row>
                            <Row>
                                <p style={{color:"#007fbb",fontSize:"17.5px",textAlign:"left",marginLeft:"12px",marginTop:"5px" }}>Skills</p>
                            </Row>
                            <Row>
                                {this.state.studentData.skills_data.map(item =>(
                                    <Col md="auto">
                                        <Card style={{ width: '15rem',height:"45px",marginTop:"5px",marginBottom:"10px",borderColor:"#007fbb",borderWidth:"3px"}}>
                                        <p style={{color:"black",textAlign:"left",marginTop:"7px",marginLeft:"4px"}}>{item.skill}</p>  
                                    </Card>
                                  </Col>
                                ))}     
                            </Row>
                            <Row>
                                <p style={{color:"#007fbb",fontSize:"17.5px",textAlign:"left",marginLeft:"12px",marginTop:"5px" }}>Experiences</p>
                            </Row>

                            <Row>
                                {this.state.studentData.positions_data.map(item =>(
                                    <Col md="auto">
                                        <Card style={{ width: '20rem',height:"auto",marginTop:"5px",marginBottom:"10px",borderColor:"#007fbb",borderWidth:"3px"}}>
                                            <Row style={{marginLeft:"10px"}}>
                                            <p style={{color:"orange",textAlign:"left",
                                            marginTop:"7px",marginLeft:"4px",fontWeight:"700"}}>{item.positionHeld}</p>  
                                            </Row>
                                            <Row style={{marginLeft:"10px"}}>
                                            <p style={{color:"orange",textAlign:"left",
                                            marginTop:"7px",marginLeft:"4px",fontWeight:"700"}}>{item.companyName}</p>  
                                            </Row>
                                            <Row style={{marginLeft:"10px"}}>
                                            <p style={{color:"black",textAlign:"left",
                                            marginTop:"7px",marginLeft:"4px"}}>{item.startDate}</p>  
                                            </Row>
                                            <Row style={{marginLeft:"10px"}}>
                                            <p style={{color:"black",textAlign:"left",
                                            marginTop:"7px",marginLeft:"4px"}}>{item.endDate}</p>  
                                            </Row>
                                        </Card>
                                    </Col>
                                ))}     
                            
                            </Row>

                            <Row>
                            <p style={{color:"#007fbb",fontSize:"17.5px",textAlign:"left",marginLeft:"12px",marginTop:"5px" }}>Projects</p>
                        </Row>

                        <Row>
                            {this.state.studentData.projects_data.map(item =>(
                                <Col md="auto">
                                    <Card style={{ width: '20rem',height:"auto",marginTop:"5px",marginBottom:"10px",borderColor:"#007fbb",borderWidth:"3px"}}>
                                        <Row style={{marginLeft:"10px"}}>
                                        <p style={{color:"orange",textAlign:"left",
                                        marginTop:"7px",marginLeft:"4px",fontWeight:"700"}}>{item.projectName}</p>  
                                        </Row>
                                        <Row style={{marginLeft:"10px"}}>
                                        <p style={{color:"orange",textAlign:"left",
                                        marginTop:"7px",marginLeft:"4px",fontWeight:"700"}}>{item.projectUrl}</p>  
                                        </Row>
                                        <Row style={{marginLeft:"10px"}}>
                                        <p style={{color:"black",textAlign:"left",
                                        marginTop:"7px",marginLeft:"4px"}}>{item.projectDescription}</p>  
                                        </Row>
                                        <Row style={{marginLeft:"10px"}}>
                                        <p style={{color:"black",textAlign:"left",
                                        marginTop:"7px",marginLeft:"4px"}}>{item.projectDemo}</p>  
                                        </Row>
                                    </Card>
                                </Col>
                            ))}     
                        
                        </Row>
                           
                        </Container>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default FullProfile;