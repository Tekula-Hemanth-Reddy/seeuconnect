import React, { Component } from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import * as HIIcons from 'react-icons/fa';
import ProfessionalSkillsCard from '../../skillsSubCards/professionalSkillsCard/professionalSkillsCard';
import authContext from '../../../context/auth-context';
import 'react-circular-progressbar/dist/styles.css';
import './css/skills.css';

class Skills extends Component {
  constructor(props){
    super(props);
    this.state = {languageData: []};
  }

  static contextType = authContext;

  componentDidMount(){

    const token = this.context.userId;

    const requestBody = {
      query: `
      query{
        users(userId:"${token}"){
          profile{
            languages{
              language
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
        this.setState({languageData: resData.data.users.profile.languages});
      })
      .catch(err => {
          console.log(err);
      });
  }

  render(){
  return (
    <Container className="skillsContainer1">
      
      <Row>
          <Col xs={1}>
            <div>
              <HIIcons.FaRegLightbulb className="skillsIcon"/>
            </div>
          </Col>
          <Col xs={8}>
            <p className="skillsText">Skills</p>
          </Col>
      </Row>


      <Row>
      <Col xs={1}><div><HIIcons.FaTags className="tagIcon"/></div></Col>
      <Col md="auto" ><p style={{marginRight:"10px"}}>#graphicdesign</p></Col>
      <Col md="auto"><p>#photography</p></Col>
      <Col md="auto"><p>#technology</p></Col>
      <Col md="auto"><p>#design</p></Col>
      <Col md="auto"><p>#webdevelopment</p></Col>
      <Col md="auto"><p>#application</p></Col>
      
      </Row>

      
      <ProfessionalSkillsCard/>
      
      <Row>
          <p className="languageHeader">Language Skills</p>
      </Row>

      <Row>
        {/* <Col md="auto"><EnglishCard/></Col>
        <Col md="auto"><FrenchCard/></Col> */}
        {this.state.languageData.map(item =>(
          <Col md="auto">
          <Card className="languageCard" style={{borderBottomColor:"#00c5fc"}}>
          <CircularProgressbar value={100} 
                               text={item.language} 
                               strokeWidth={3} 
                               className="progressBar" 
                               styles={buildStyles({
                                  textColor: "#00c5fc",
                                  pathColor: "#00c5fc",
                                })}/>
          </Card>
          </Col>
        ))}
        {/* <Col md="auto"><HindiCard/></Col> */}
      </Row>


    </Container>
  );
  }
}

export default Skills;
