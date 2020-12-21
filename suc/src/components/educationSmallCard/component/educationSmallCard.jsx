import React,{Component} from 'react';
import {Accordion,Card,Button,Container,Row,Col} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import authContext from '../../../context/auth-context';
import '../styles/styles.css';
export class EducationSmallCard extends Component
{
  constructor(props){
    super(props);
    this.state = {
      sn:"",
      sg:"",
      sb:"",
      sy:"",
      cn:"",
      cg:"",
      cc:"",
      cb:"",
      cy:"",
      gn:"",
      gg:"",
      gu:"",
      gc:"",
      gs:"",
      gsy:"",
      gey:""
    }
  }

  static contextType = authContext;

  componentDidMount(){

    const token = sessionStorage.getItem('userId');

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
          this.setState({
            sn : resData.data.users.profile.education.school.schoolName,
            sg : resData.data.users.profile.education.school.schoolGrade,
            sb : resData.data.users.profile.education.school.schoolBoard,
            sy : resData.data.users.profile.education.school.schoolYear,
            cn : resData.data.users.profile.education.college.collegeName,
            cg : resData.data.users.profile.education.college.collegeGrade,
            cc : resData.data.users.profile.education.college.collegeCourse,
            cb : resData.data.users.profile.education.college.collegeBoard,
            cy : resData.data.users.profile.education.college.collegeYear,
            gn : resData.data.users.profile.education.graduation.graduationCollegeName,
            gg : resData.data.users.profile.education.graduation.graduationCollegeGrade,
            gu : resData.data.users.profile.education.graduation.graduationUniversity,
            gc : resData.data.users.profile.education.graduation.graduationCourse,
            gs : resData.data.users.profile.education.graduation.graduationStream,
            gsy: resData.data.users.profile.education.graduation.graduationStartYear,
            gey: resData.data.users.profile.education.graduation.graduationEndYear
        });
      })
      .catch(err => {
          console.log(err);
      });
  }

  render()
  {
    const educationData=[
      {
          school:this.state.sn,
          year:this.state.sy,
          title:'High School',
          grade:this.state.sg,
          board:this.state.sb
      },
      {
          school:this.state.cn,
          year:this.state.sy+"-"+this.state.cy,
          title:'Higher Secondary Education',
          grade:this.state.cg,
          board:this.state.cb
          
      },
      {
          school:this.state.gn,
          year:this.state.gsy+"-"+this.state.gey,
          title:'Graduation',
          grade:this.state.gg,
          board:this.state.gu,
          stream:this.state.gs,
          course:this.state.gc
      }
  ]
      return(
        <div>
      {educationData.map((item, index) => {
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
                                      <p className="yearText" style={{display:"inline"}}>{" "}{item.year}</p>
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
                                  <p className="descriptionText"> {item.title} has been done in {item.school} during the year {item.year} which is affiliated to board {item.board}. Passed out with Grade {item.grade}  </p>
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