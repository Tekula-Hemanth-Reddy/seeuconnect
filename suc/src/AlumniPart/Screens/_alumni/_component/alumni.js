import React,{Component} from 'react';
import {Container,Row,Col,Image,Card} from 'react-bootstrap';
import '../_css/alumni.css';
import AdityaImage from '../../../../assets/images/Aditya.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelopeSquare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import authContext from '../../../../context/auth-context';


class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      company: "",
      cmpPhone: "",
      cmpMail: "",
      cmpAddress: "",
      cmpWebsite: ""
    }
  }

  static contextType = authContext;

  componentDidMount(){
    const requestBody = {
      query: `
      query{
        jobGivers(){
          name
          personPhone
          personMail
          companyName
          companyPhone
          companyMail
          companyAddress
          companyWebsite
        }
      }
      `
  };

  const token = this.context.token;

  fetch('http://localhost:4000/graphql', {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
          }
      }).then(res => {
          if(res.status!== 200 && res.status!== 201){
              throw new Error('Failed!');
          }
          return res.json();
      })
      .then(resData => {
          console.log({...resData.data.jobGivers});
          this.setState({name: resData.data.jobGivers.name,
          phone: resData.data.jobGivers.personPhone,
          email: resData.data.jobGivers.personMail,
          company: resData.data.jobGivers.companyName,
          cmpPhone: resData.data.jobGivers.companyPhone,
          cmpMail: resData.data.jobGivers.companyMail,
          cmpAddress: resData.data.jobGivers.companyAddress,
          cmpWebsite: resData.data.jobGivers.companyWebsite});
      })
      .catch(err => {
          console.log(err);
      });
  }

  render(){
    return(
      <div style={{backgroundColor:"#000"}}>
        <Container className="alumniContainer">
          <Card className="alumniCardStyle" style={{marginTop:"20px",marginBottom: "20px"}}>
          <Row>
            <Col xs={7}>
            <div className="subDivision" style={{alignItems:"flex-start"}}>
                <h1 className="greetingClass">Hello!!!</h1>
                <h1 className="greetingClass">{this.state.name}</h1>
            </div>
            
            </Col>
            <Col xs={5}>
              <Image src={AdityaImage} roundedCircle  className="roundImage"/>
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
                <a href="mailto:dummy@gmail.com" style={{textDecoration:"none"}}>{this.state.cmpMail}</a>
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
                {this.state.name}
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
                <a href="tel:+919876543210" style={{textDecoration:"none"}}>{this.state.phone}</a>
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
                <a href="mailto:dummy@gmail.com" style={{textDecoration:"none"}}>{this.state.email}</a>
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
                <a href="https://tidbeat.com/" style={{textDecoration:"none"}}>{this.state.cmpWebsite}</a>
              </Col>
            </Row>
        </Card>
        </Col>
      </Row>
    </Container>
        </Container>
      </div>
    );
  }
}

export default About;
