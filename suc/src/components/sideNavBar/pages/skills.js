import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fa';
import ProfessionalSkillsCard from '../../skillsSubCards/professionalSkillsCard/professionalSkillsCard';
import TeluguCard from '../../skillsSubCards/languagesCard/teluguCard';
import HindiCard from '../../skillsSubCards/languagesCard/hindiCard';
import EnglishCard from '../../skillsSubCards/languagesCard/englishCard';
import FrenchCard from '../../skillsSubCards/languagesCard/frenchCard';
import authContext from '../../../context/auth-context';
import './css/skills.css';

class Skills extends Component {
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
            languages{
              language
            }
            skills{
              skill
              rating
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
        <Col md="auto"><EnglishCard/></Col>
        <Col md="auto"><FrenchCard/></Col>
        <Col md="auto"><TeluguCard/></Col>
        <Col md="auto"><HindiCard/></Col>
      </Row>


    </Container>
  );
  }
}

export default Skills;
