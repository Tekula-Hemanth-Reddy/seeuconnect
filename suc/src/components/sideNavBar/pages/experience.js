import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fa';
import './css/experience.css';
import CompanyExperienceCard from '../../companyExperienceCard/companyExperienceCard';
import TrophyCard from '../../awardCards/trophyCard/trophyCard';
import GeneralAward from '../../awardCards/generalAward/generalAward';
import authContext from '../../../context/auth-context';

class Experience extends Component {
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
    <Container className="experienceContainer">
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
    <Row>
      <Col >
        <Container>
          <Row>
            <Col><CompanyExperienceCard/></Col>
          </Row>
          <Row>
            <Col><CompanyExperienceCard/></Col>
          </Row>
          <Row>
            <Col><CompanyExperienceCard/></Col>
          </Row>
        </Container>
      </Col>
      <Col style={{marginLeft:"240px"}}>
        <Container>
          <Row>
            <Col><TrophyCard/></Col>
          </Row>
          <Row>
            <Col><GeneralAward/></Col>
          </Row>
        </Container>
      </Col>
    </Row>

    </Container>
  );
  }
}

export default Experience;
