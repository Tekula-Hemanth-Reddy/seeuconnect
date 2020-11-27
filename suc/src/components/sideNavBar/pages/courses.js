import React,{Component} from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import * as CGIcons from 'react-icons/cg';
import * as MDIcons from 'react-icons/md';
import './css/courses.css';


export class Courses  extends Component
{

    render()
    {   

        const CoursesData = [
            {
              title: 'Introduction to Machine Learning',
              certificateId:'NPTEL03506985',
              specialization:'Deep Learning',
              certificate:'https://www.abc.com'
            },
            {
              title: 'Introduction to Python',
              certificateId:'Coursera56894562',
              specialization:'Machine Learning',
              certificate:'https://www.abc.com'
            },
            {
              title: '30 Days of Cloud Program',
              certificateId:' ',
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
                                    <Col xs={8}><p className="titleText">{item.title}</p></Col>
                                    </Row>
                                </Card.Title>

                                <Card.Subtitle className="mb-2 text-muted subtitleText">{item.certificateId}</Card.Subtitle>
                            
                                <Card.Text className="cardText">
                                    {item.specialization}
                                </Card.Text>

                                <Card.Text href="#" className="cardText">
                                <a href="#">{item.certificate}</a>
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
