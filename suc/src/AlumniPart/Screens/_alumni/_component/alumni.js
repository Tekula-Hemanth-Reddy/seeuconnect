import React,{Component} from 'react';
import {Container,Row,Col,Image,Card} from 'react-bootstrap';
import '../_css/alumni.css';
import PersonImage from '../../../../assets/images/about.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelopeSquare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import authContext from '../../../../context/auth-context';
import NavBar from '../../../Components/navBar/component/alumniNavbar';
import Fotter from '../../../../components/FirstPage/Fotter/_component/_fotter';


class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      userId: this.props.alumniId,
      title: "",
      name: "",
      phone: "",
      email: "",
      company: "",
      cmpPhone: "",
      cmpMail: "",
      cmpAddress: "",
      cmpWebsite: "",
      userMailTo: "",
      userPhoneTo: "",
      companyMailTo: "",
      companyPhoneTo: "",
      blocked: false
    }
  }

  static contextType = authContext;

  componentDidMount(){
    sessionStorage.removeItem("my_skills");
    sessionStorage.removeItem("jobType" );
    sessionStorage.removeItem("jobDays" );
    sessionStorage.removeItem("jobMoney");
    const requestBody = {
      query: `
      query{
        jobGivers(userId:"${this.state.userId}"){
          name
          personPhone
          personMail
          companyName
          companyPhone
          companyMail
          companyAddress
          companyWebsite
          blocked
          users{
            name
          }
        }
      }
      `
  };

  fetch('http://localhost:4000/graphql', {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {
              'Content-Type': 'application/json'
              // 'Authorization': 'Bearer ' + token
          }
      }).then(res => {
          if(res.status!== 200 && res.status!== 201){
              throw new Error('Failed!');
          }
          return res.json();
      })
      .then(resData => {
          this.setState({title: resData.data.jobGivers.users.name,
          name: resData.data.jobGivers.name,
          phone: (""+resData.data.jobGivers.personPhone==="")?"+91 0000000000":""+resData.data.jobGivers.personPhone,
          email: resData.data.jobGivers.personMail,
          company: resData.data.jobGivers.companyName,
          cmpPhone: (""+resData.data.jobGivers.companyPhone==="")?"+91 0000000000":""+resData.data.jobGivers.companyPhone,
          cmpMail: resData.data.jobGivers.companyMail,
          cmpAddress: resData.data.jobGivers.companyAddress,
          cmpWebsite: resData.data.jobGivers.companyWebsite,
          blocked: resData.data.jobGivers.blocked,
          userMailTo: `mailto:${resData.data.jobGivers.personMail}`,
          companyMailTo: `mailto:${resData.data.jobGivers.companyMail}`,
          userPhoneTo: `tel:${this.state.phone.split(" ")[0]}${this.state.phone.split(" ")[1]}`,
          companyPhoneTo: `tel:${this.state.cmpPhone.split(" ")[0]}${this.state.cmpPhone.split(" ")[1]}`
        });
        if(this.state.blocked){sessionStorage.setItem("blocked","blocked");}
        else {sessionStorage.setItem("blocked","notBlocked");}
      })
      .catch(err => {
          console.log(err);
      });
  }

  render(){
    return(
      <div style={{backgroundColor:"#000"}}>
        <NavBar />
        <Container className="alumniContainer">
          <Card className="alumniCardStyle" style={{marginTop:"20px",marginBottom: "20px"}}>
          <Row>
            <Col xs={7}>
            <div className="subDivision" style={{alignItems:"flex-start"}}>
                <h1 className="greetingClass">Hello!!!</h1>
                <h1 className="greetingClass">{this.state.title}</h1>
            </div>
            
            </Col>
            <Col xs={5}>
              <Image src={PersonImage} roundedCircle  className="roundImage"/>
            </Col>
          </Row>
          <hr style={{backgroundColor:"#fff",marginLeft:"20vh",marginRight:"20vh"}}/>
          </Card>
          <Container>
      <Row>
        <Col xs={6}>
          <Card body className="cardStyleAlumni">
            <Row>
              <Col xs={1}>
                
              </Col>
              <Col xs={3} className="leftCard">
                Company
              </Col>
              <Col xs={2}>
                :
              </Col>
              <Col xs={6} className="rightCard">
                {this.state.company}
              </Col>
            </Row>
            <Row>
              <Col xs={1} className="leftCard">
                <FontAwesomeIcon className='ico' icon={faPhoneAlt} color="#007bff" size="md" style={{textAlign:"left"}}/>
              </Col>
              <Col xs={3} className="leftCard">
                Phone
              </Col>
              <Col xs={2}>
                :
              </Col>
              <Col xs={6} className="rightCard">
                <a href="tel:+919876543210" style={{textDecoration:"none"}}>{this.state.cmpPhone}</a>
              </Col>
            </Row>
            <Row>
              <Col xs={1} className="leftCard">
                <FontAwesomeIcon className='ico' icon={faEnvelopeSquare} color="#007bff" size="md" style={{textAlign:"left"}}/>
              </Col>
              <Col xs={3} className="leftCard">
                Email
              </Col>
              <Col xs={2}>
                :
              </Col>
              <Col xs={6} className="rightCard">
                <a href={this.state.companyMailTo} style={{textDecoration:"none"}}>{this.state.cmpMail}</a>
              </Col>
            </Row>
            <Row>
              <Col xs={1} className="leftCard">
                <FontAwesomeIcon className='ico' icon={faMapMarkerAlt} color="#007bff" size="md" style={{textAlign:"left"}}/>
              </Col>
              <Col xs={3} className="leftCard">
                Address
              </Col>
              <Col xs={2}>
                :
              </Col>
              <Col xs={6} className="rightCard">
                <a href="https://www.google.co.in/maps/" style={{textDecoration:"none",color:"#fff"}}>{this.state.cmpAddress}</a>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={6}>
        <Card body className="cardStyleAlumni">
        <Row>
              <Col xs={1}>
                
              </Col>
              <Col xs={3} className="leftCard">
                Full Name
              </Col>
              <Col xs={2}>
                :
              </Col>
              <Col xs={6} className="rightCard">
              {this.state.name&&<div>{this.state.name.split("-")[0]}{" "}{this.state.name.split("-")[1]}{" "}{this.state.name.split("-")[2]}</div>}
              </Col>
        </Row>
        <Row>
              <Col xs={1} className="leftCard">
                <FontAwesomeIcon className='ico' icon={faPhoneAlt} color="#007bff" size="md" style={{textAlign:"left"}}/>
              </Col>
              <Col xs={3} className="leftCard">
                Phone
              </Col>
              <Col xs={2}>
                :
              </Col>
              <Col xs={6} className="rightCard">
                <a href={this.state.userPhoneTo} style={{textDecoration:"none"}}>{this.state.phone}</a>
              </Col>
            </Row>
            <Row>
              <Col xs={1} className="leftCard">
                <FontAwesomeIcon className='ico' icon={faEnvelopeSquare} color="#007bff" size="md" style={{textAlign:"left"}}/>
              </Col>
              <Col xs={3} className="leftCard">
                Email
              </Col>
              <Col xs={2}>
                :
              </Col>
              <Col xs={6} className="rightCard">
                <a href={this.state.userMailTo} style={{textDecoration:"none"}}>{this.state.email}</a>
              </Col>
            </Row>
        </Card>
        <Card body className="cardStyleAlumni" style={{marginTop:"30px"}}>
            <Row>
              <Col xs={5} className="leftCard">
                Company Website
              </Col>
              <Col xs={2}>
                :
              </Col>
              <Col xs={5} className="rightCard">
                <a href={this.state.cmpWebsite} style={{textDecoration:"none"}} target="_blank">{this.state.cmpWebsite}</a>
              </Col>
            </Row>
        </Card>
        </Col>
      </Row>
    </Container>
        </Container>
        <Fotter/>
      </div>
    );
  }
}

export default About;
