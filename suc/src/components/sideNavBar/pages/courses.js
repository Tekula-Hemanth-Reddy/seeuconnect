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
      courseName: "",
      specialization: "",
      certificate: "",
      credentials: "",
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
        console.log(token);
          console.log({...resData.data.jobGivers});
          this.setState({
          courseName: resData.data.users.profile.courses.courseName,
          specialization:resData.data.users.profile.courses.specialization,
          certificate:resData.data.users.profile.courses.certificate,
          credentials:resData.data.users.profile.courses.credentials,
        });
      })
      .catch(err => {
          console.log(err);
      });
  }

    render()
    {   

        const CoursesData = [
            {
              courseName: 'Introduction to Machine Learning',
              credentials:'NPTEL03506985',
              specialization:'Deep Learning',
              certificate:'https://www.abc.com'
            },
            {
              courseName: 'Introduction to Python',
              credentials:'Coursera56894562',
              specialization:'Machine Learning',
              certificate:'https://www.abc.com'
            },
            {
              courseName: '30 Days of Cloud Program',
              credentials:' ',
              specialization:'Google Cloud',
              certificate:'https://google.qwiklabs.com/public_profiles/c8a5cdeb-cf33-4797-b494-c1a17fe7fb30#'
            }
            
          ];
    
        return (
            <Container className="courses1Container">
              
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
              {CoursesData.map((item, index) => 
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

                                <Card.Subtitle className="mb-2 text-muted subtitleText">{item.certificate}</Card.Subtitle>
                            
                                <Card.Text className="cardText">
                                    {item.specialization}
                                </Card.Text>

                                <Card.Text href="#" className="cardText">
                                <a href="#">{item.credentials}</a>
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
