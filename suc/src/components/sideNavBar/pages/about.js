import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import * as HIIcons from 'react-icons/hi';
import WebCard from '../../smallCards/webCard/webCard';
import SoftwareCard from '../../smallCards/softwareCard/softwareCard';
import ApplicationsCard from '../../smallCards/applicationsCard/applicationsCard';
import LogoDesignCard from '../../smallCards/logodesignCard/logodesignCard';
import authContext from '../../../context/auth-context';
import './css/about.css';


class About extends Component {

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
            name
            phoneNumber
            portFolio
            email
            addresses{
              pinCode
              location
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
          name: resData.data.users.profile.name===""?"---":resData.data.users.profile.name,
          location: resData.data.users.profile.addresses.location,
          pin: resData.data.users.profile.addresses.pinCode,
          phone: resData.data.users.profile.phoneNumber===""?"+91- ":resData.data.users.profile.phoneNumber,
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
    <Container className='mainAboutContainer'>
    <Row>
      <Col xs={1}>
        <div>
          <HIIcons.HiOutlineUser className="aboutMeIcon"/>
        </div>
      </Col>
    
      <Col xs={3}>
        <p className="aboutMeText">About Me</p>
      </Col>
    </Row>
    
    <Row>
      <Col>
        <Container>
          <Row>
            <Col><WebCard/></Col>
            <Col><SoftwareCard/></Col>
          </Row>
        </Container>
        
        <Container>
          <Row>
            <Col><ApplicationsCard/></Col>
            <Col><LogoDesignCard/></Col>
          </Row>
        </Container>
      </Col>
      
      <Col >
        <Container>
          <Row className="headerRow">
            <Col xs={6} md="auto" className="headerCol"><h4>Personal Details</h4></Col>
          </Row>
          
          <Row className="commonRow">
            <Col xs={3} style={{textAlign:"left"}}>Full Name</Col>
            <Col xs={1} >:</Col>
            <Col xs={6}><p className="commonPara">{this.state.name.split("-")[0]}{" "}{this.state.name.split("-")[1]}{" "}{this.state.name.split("-")[2]}</p></Col>
          </Row>

          <Row className="commonRow">
            <Col xs={3} ><p className="commonPara">Address</p></Col>
            <Col xs={1} >:</Col>
            <Col xs={6} ><p className="commonPara">{this.state.location}</p></Col>
          </Row>

          <Row className="commonRow">
            <Col xs={3} ><p className="commonPara">Zip Code</p></Col>
            <Col xs={1} >:</Col>
            <Col xs={6} ><p className="commonPara">{this.state.pin}</p></Col>
          </Row>

          <Row className="commonRow">
            <Col xs={3} ><p className="commonPara">Phone</p></Col>
            <Col xs={1} >:</Col>
            <Col xs={6} ><p className="commonPara">{this.state.phone.split("-")[0]}{" "}{this.state.phone.split("-")[1]}</p></Col>
          </Row>

          <Row className="commonRow">
            <Col xs={3} ><p className="commonPara">Email</p></Col>
            <Col xs={1} >:</Col>
            <Col xs={6} ><p className="commonPara">{this.state.email}</p></Col>
          </Row>

          <Row className="commonRow">
            <Col xs={3} ><p className="commonPara">Website</p></Col>
            <Col xs={1} >:</Col>
            <Col xs={6} ><p className="commonPara">{this.state.website}</p></Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
  );
  }
}

export default About;
