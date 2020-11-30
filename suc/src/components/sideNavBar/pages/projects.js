import React,{Component} from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai';
import * as GRIcons from 'react-icons/gr';
import './css/awards.css';
import authContext from '../../../context/auth-context';


export class Projects  extends Component
{
  constructor(props){
    super(props);
    this.state = {
      projectData:[]
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
            projects{
              projectName
              projectDemo
              projectDescription
              projectUrl
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
            projectData:resData.data.users.profile.projects         
        });
      })
      .catch(err => {
          console.log(err);
      });
  }

    render()
    {   
        return (
            <Container className="courses1Container">
              
              <Row>
                <Col xs={1}>
                  <div>
                    <AiIcons.AiOutlineProject className="courses1Icon"/>
                  </div>
                </Col>
                <Col xs={8}>
                  <p className="courses1Text">Projects</p>
                </Col>
              </Row>

              <div>
              {this.state.projectData.map((item, index) => 
                {
                    return(
                        <Card className="awardsCardMain">
                            <Card.Body>
                                <Card.Title className="cardTitleStyle">
                                    <Row>
                                    <Col xs={1}><GRIcons.GrProjects className="titleIconStyle3"/></Col>
                                    <Col xs={8}><p className="titleText">{item.projectName}</p></Col>
                                    </Row>
                                </Card.Title>

                                <Card.Subtitle className="mb-2 text-muted subtitleText">{item.projectDescription}</Card.Subtitle>
                            
                                <Card.Text className="cardText">
                                    {item.projectUrl}
                                </Card.Text>

                                <Card.Text href="#" className="cardText">
                                <a href="#">{item.projectDemo}</a>
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

export default Projects;
