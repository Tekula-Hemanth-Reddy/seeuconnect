import React,{Component} from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fa';
import * as CIIcons from 'react-icons/cg';
import './css/experience.css';
import authContext from '../../../context/auth-context';

class Experience extends Component {
  constructor(props){
    super(props);
    this.state = {
      positionData:[]
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
            positions{
              positionHeld
              companyName
              positionDescription
              startDate
              endDate
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
          positionData: resData.data.users.profile.positions
        });
      })
      .catch(err => {
          console.log(err);
      });
  }

  render(){
  return (
    <Container className="experienceContainer" style={{marginLeft:"75vh"}}>
      <Row>
        <Col xs={1}>
          <div>
            <HIIcons.FaPencilAlt className="experienceIcon"/>
          </div>
        </Col>
        <Col xs={8}>
          <p className="experienceText">Work Experience</p>
        </Col>
      </Row>

    <Row style={{marginLeft:"20px",marginTop:"20px"}}>
      <Col >
        <Container>
          {this.state.positionData.map(item =>(
            <Row>
            <Col>
            <Card className="companyExperienceCardMain">
                <Card.Body>
                    <Card.Title className="cardTitleStyle">
                        <Row>
                        <Col xs={1}><CIIcons.CgRecord className="titleIconStyle"/></Col>
                        <Col xs={8}><p className="titleText">{item.positionHeld}{" At "}{item.companyName}</p></Col>
                        </Row>
                    </Card.Title>

                    <Card.Subtitle className="mb-2 text-muted subtitleText">{item.startData}{" - "}{item.endDate}</Card.Subtitle>
                  
                    <Card.Text className="cardText">
                        {item.positionDescription}
                    </Card.Text>
{/* 
                    <Card.Link href="#" className="linkText">https://google.com</Card.Link> */}
                </Card.Body>
            </Card>
            </Col>
          </Row>
          ))}
        </Container>
      </Col>
      
    </Row>

    </Container>
  );
  }
}

export default Experience;
