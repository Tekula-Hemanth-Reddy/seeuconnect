import React,{Component} from "react";
import {Container,Card,Row,Col,Image} from "react-bootstrap";
import '../styles/styles.css';
import PersonImage from '../../../../assets/images/sliders/student.png';
import * as RIIcons from 'react-icons/ri';
import * as MDIcons from 'react-icons/md';
import * as AIIcons from 'react-icons/ai';
import * as FIIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as BIIcons from 'react-icons/bi';

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
            <div style={{backgroundColor:"black"}}>
                <Container className="fullProfileContainer">
                    <Card className="fullProfileCard">
                        <Container>
                            <Row style={{marginLeft:"20px",left:"20px"}}>
                                <Col>
                                <Image src={PersonImage} roundedCircle  className="roundImage" />
                                </Col>
                                <Col style={{textAlign:"right"}}>
                                    <Row>
                                        <Col md="auto">
                                            <RIIcons.RiFileUserFill style={{ height:"40px",width:"40px",marginTop:"40px"}} className="userIconProfile"/>
                                        </Col>
                                    </Row>
                                    <Row style={{marginTop:"10px"}}>
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
                                </Col>
                            </Row>
                           
                            <hr style={{borderTop:"1px solid #007fbb"}}></hr>
                            <Row>
                                <Col md="auto">
                                    <MDIcons.MdSubject style={{ height:"30px",width:"30px"}}  className="userIconProfile2"/>
                                </Col>
                                <Col md="auto">
                                <p style={{color:"#ffc107",fontSize:"18.5px",textAlign:"bottom" }} >Courses</p>
                                </Col>
                                
                            </Row>
                            <Row>
                                {this.state.studentData.courses_data.map(item =>(
                                    <Col md="auto">
                                        <Card style={{ width: '15rem',height:"45px",marginTop:"5px",marginBottom:"10px",borderColor:"#ffc107",
                                        borderWidth:"3px"}}>
                                        <p style={{color:"black",textAlign:"left",marginTop:"7px",marginLeft:"4px"}}>{item.courseName}</p>  
                                    </Card>
                                  </Col>
                                ))}     
                            </Row>
                            <hr style={{borderTop:"1px solid #007fbb"}}></hr>
                            <Row>
                                <Col md="auto">
                                <AIIcons.AiFillBulb style={{ height:"30px",width:"30px"}}  className="userIconProfile2"/>
                                </Col>
                                <Col md="auto">
                                <p style={{color:"#ffc107",fontSize:"18.5px",textAlign:"bottom" }} >Skills</p>
                                </Col>
                            </Row>
                            <Row>
                                {this.state.studentData.skills_data.map(item =>(
                                    <Col md="auto">
                                        <Card style={{ width: '15rem',height:"45px",marginTop:"5px",marginBottom:"10px",
                                        borderColor:"#ffc107",borderWidth:"3px",
                                        }}>
                                        <p style={{color:"black",textAlign:"left",marginTop:"7px",marginLeft:"4px"}}>{item.skill}</p>  
                                    </Card>
                                  </Col>
                                ))}     
                            </Row>
                            <hr style={{borderTop:"1px solid #007fbb"}}></hr>
                            <Row>
                                <Col md="auto">
                                <FaIcons.FaPencilAlt style={{ height:"30px",width:"30px"}}  className="userIconProfile2"/>
                                </Col>
                                <Col md="auto">
                                <p style={{color:"#ffc107",fontSize:"18.5px",textAlign:"bottom" }} >Experiences</p>
                                </Col>
                            </Row>

                            <Row>
                                {this.state.studentData.positions_data.map(item =>(
                                    <Col md="auto">
                                        <Card style={{ width: '20rem',height:"auto",marginTop:"5px",marginBottom:"10px",borderColor:"#ffc107",borderWidth:"3px"}}>
                                            
                                            <Row style={{margin:"0px 0px 0px 0px",backgroundColor:"#ffc107"}}>
                                            <Col md="auto">
                                            <MDIcons.MdWork style={{height:"25px",width:"25px",marginTop:"10px"}} className="userIconProfile3"/>
                                            </Col>
                                            <Col md="auto">
                                            <p style={{color:"white",textAlign:"left",marginTop:"10px"}}>{item.positionHeld}</p>  
                                            </Col>
                                            </Row>


                                            <Row style={{margin:"1px 0px 00px 0px",backgroundColor:"#ffc107"}}>
                                            <Col md="auto">
                                            <BsIcons.BsBuilding style={{height:"25px",width:"25px",marginTop:"5px"}} className="userIconProfile3"/>
                                            </Col>
                                            <Col md="auto">
                                            <p style={{color:"white",textAlign:"left",marginTop:"5px"}}>@{item.companyName}</p>  
                                            </Col>
                                            </Row>

                                            <Row style={{margin:"1px 0px 00px 0px",backgroundColor:"#ffc107"}}>
                                            <Col md="auto">
                                            <FaIcons.FaRegCalendarAlt style={{height:"25px",width:"25px",marginTop:"5px"}} className="userIconProfile3"/>
                                            </Col>
                                            <Col md="auto">
                                            <p style={{color:"white",textAlign:"left",marginTop:"5px"}}>{item.startDate}-{item.endDate}</p>  
                                            </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                ))}     

                                
                            </Row>

                            <hr style={{borderTop:"1px solid #007fbb"}}></hr>
                                <Row>
                                <Col md="auto">
                                <AIIcons.AiOutlineProject style={{ height:"30px",width:"30px"}}  className="userIconProfile2"/>
                                </Col>
                                <Col md="auto">
                                <p style={{color:"#ffc107",fontSize:"18.5px",textAlign:"bottom" }} >Projects</p>
                                </Col>
                            </Row>
                            

                        <Row>
                                {this.state.studentData.projects_data.map(item =>(
                                    <Col md="auto">
                                        <Card style={{ width: '20rem',height:"auto",marginTop:"5px",marginBottom:"10px",borderColor:"#ffc107",borderWidth:"3px"}}>
                                            
                                            <Row style={{margin:"0px 0px 0px 0px",backgroundColor:"#ffc107"}}>
                                            <Col md="auto">
                                            <BIIcons.BiTask style={{height:"25px",width:"25px",marginTop:"10px"}} className="userIconProfile3"/>
                                            </Col>
                                            <Col md="auto">
                                            <p style={{color:"white",textAlign:"left",marginTop:"10px"}}>{item.projectName}</p>  
                                            </Col>
                                            </Row>


                                            <Row style={{margin:"1px 0px 00px 0px",backgroundColor:"#ffc107"}}>
                                            <Col md="auto">
                                            <MDIcons.MdSubject style={{height:"25px",width:"25px",marginTop:"5px"}} className="userIconProfile3"/>
                                            </Col>
                                            <Col md="auto">
                                            <p style={{color:"white",textAlign:"left",marginTop:"5px"}}>{item.projectDescription}</p>  
                                            </Col>
                                            </Row>

                                            <Row style={{margin:"1px 0px 00px 0px",backgroundColor:"#ffc107"}}>
                                            <Col md="auto">
                                            <FIIcons.FiLink style={{height:"25px",width:"25px",marginTop:"5px"}} className="userIconProfile3"/>
                                            </Col>
                                            <Col md="auto">
                                            <a style={{color:"white",textAlign:"left",marginTop:"5px"}}>{item.projectUrl}</a>  
                                            </Col>
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