import React,{Component} from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import * as CGIcons from 'react-icons/cg';
import * as MDIcons from 'react-icons/md';
import './css/courses.css';
import authContext from '../../../context/auth-context';


export class Courses  extends Component
{
  constructor(props){
    super(props);
    this.state = {
      courseData:[]
    }
  }

  static contextType = authContext;

  componentDidMount(){

    const token = sessionStorage.getItem('userId');;

    const requestBody = {
      query: `
      query{
        users(userId:"${token}"){
          profile{
            courses{
              courseName
              specialization
              certificate
              credentials
            }
          }
        }
      }
      `
  };

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
          courseData: resData.data.users.profile.courses
        });
      })
      .catch(err => {
          console.log(err);
      });
  }

    render()
    {   
        return (
            <Container className="courses1Container" style={{marginLeft:"75vh"}}>
              
              <Row>
                <Col xs={1}>
                  <div>
                    <MDIcons.MdSubject className="courses1Icon"/>
                  </div>
                </Col>
                <Col xs={8}>
                  <p className="courses1Text">Courses</p>
                </Col>
              </Row>

              <div>
              {this.state.courseData.map((item, index) => 
                {
                    return(
                        <Card className="companyCoursesCardMain">
                            <Card.Body>
                                <Card.Title className="cardTitleStyle">
                                    <Row>
                                    <Col xs={1}><CGIcons.CgRecord className="titleIconStyle"/></Col>
                                    <Col xs={8}><p className="titleText">{item.courseName}</p></Col>
                                    </Row>
                                </Card.Title>

                                <Card.Subtitle className="mb-2 text-muted subtitleText"><a href={item.certificate} target="_blank">{item.certificate}</a></Card.Subtitle>
                            
                                <Card.Text className="cardText">
                                    {item.specialization}
                                </Card.Text>

                                <Card.Text href="#" className="cardText">
                                <a href={item.credentials} target="_blank">{item.credentials}</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    );
              
                })}
                
              </div>
            
            </Container>
          );

    }
  
}

export default Courses;
