import React,{Component} from 'react';
import {Accordion,Card,Button,Container,Row,Col} from 'react-bootstrap';
import {EducationData} from '../../sideNavBar/pages/data/education';
import * as HIIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import authContext from '../../../context/auth-context'
import '../styles/styles.css';


export class EducationSmallCard extends Component
{

    constructor(props){
        super(props);
        this.state = {
          name: "",
          location: "",
          pin: "",
          phone: "",
          email: "",
          website: ""
        }
      }
    
      static contextType = authContext;
    
      componentDidMount(){
    
        const token = this.context.userId;
    
        const requestBody = {
          query: `
          query{
            users(userId:"${token}"){
                profile{
                education{
                  school{
                    schoolName
                    schoolGrade
                    schoolBoard
                    schoolYear
                  }
                college{
                  collegeName
                  collegeGrade
                  collegeCourse
                  collegeBoard
                  collegeYear
                }
                  graduation{
                    graduationCollegeName
                    graduationCollegeGrade
                    graduationUniversity
                    graduationCourse
                    graduationStream
                    graduationStartYear
                    graduationEndYear
                  }
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
            console.log(token);
              console.log({...resData.data.jobGivers});
              this.setState({
              name: resData.data.users.profile.name,
              location: resData.data.users.profile.addresses.location,
              pin: resData.data.users.profile.addresses.pinCode,
              phone: resData.data.users.profile.phoneNumber,
              email: resData.data.users.profile.email,
              website: resData.data.users.profile.portFolio
            });
          })
          .catch(err => {
              console.log(err);
          });
      }
    

    render()
    {
        return(
            <div>
        {EducationData.map((item, index) => {
            return (
                <Accordion key={index}>
                    <Card className="smallCardContainer">
                        <Card.Header style={{textAlign:"left"}}>
                            <Container>
                                <Row>
                                    <Col xs={2} className="iconBorderColorCol">
                                        <HIIcons.FaPencilAlt className="pencilIcon"/>
                                    </Col>
                                    <Col xs={8}  className="headingTitle">
                                        <p  className="courseTitle" >{item.title}</p> 
                                        <p className="schoolText" style={{display:"inline"}}>{item.school}</p>
                                        <p className="yearText" style={{display:"inline"}}> -{item.year}</p>
                                        </Col>
                                    <Col xs={2} style={{textAlign:"right"}} className="iconBorderColorCol">
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <AiIcons.AiOutlinePlus className="plusIcon"/>
                                    </Accordion.Toggle>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Header>
                       
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div>
                                    <p className="descriptionText"> {item.title} has been done in {item.school} during the year {item.year} 
                                    which is affiliated to board {item.board}. Passed out with Grade {item.grade}  </p>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            );
          })}

          </div>

        );
    }

} 

export default EducationSmallCard;