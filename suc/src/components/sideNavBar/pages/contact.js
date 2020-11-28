import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import EmailCard from '../../contactCards/emailCard/emailCard';
import AddressCard from '../../contactCards/addressCard/addressCard';
import PhoneCard from '../../contactCards/phoneCard/phoneCard';
import MessageCard from '../../contactCards/messageCard/messageCard';
import authContext from '../../../context/auth-context';
import './css/contact.css';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      phone: "",
      location: "",
      State: "",
      City: "",
      PinCode: "",
      git: "",
      linked: "",
      instagram: "",
      face: "",
      twitter: "",
      fullAdd: ""
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
            email
            phoneNumber
            addresses{
              location
              state
              city
              pinCode
            }
            reachOuts{
              gitHub
              linkedIn
              instagram
              faceBook
              twitter
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
          console.log({...resData.data});
          this.setState({
          email:resData.data.users.profile.email,
          phone:resData.data.users.profile.phoneNumber,
          location:resData.data.users.profile.addresses.location,
          State:resData.data.users.profile.addresses.state,
          City:resData.data.users.profile.addresses.city,
          PinCode:resData.data.users.profile.addresses.pinCode,
          git:resData.data.users.profile.reachOuts.gitHub,
          linked:resData.data.users.profile.reachOuts.linkedIn,
          instagram:resData.data.users.profile.reachOuts.instagram,
          face:resData.data.users.profile.reachOuts.faceBook,
          twitter:resData.data.users.profile.reachOuts.twitter,
          fullAdd: ""+resData.data.users.profile.addresses.location+","+resData.data.users.profile.addresses.city+","+resData.data.users.profile.addresses.state
        });
        console.log(this.state.email);
      })
      .catch(err => {
          console.log(err);
      });
  }

  render(){
  return (
    <Container className="mainContactContainer">
      <Row>
        <Col xs={1}>
          <div>
            <HIIcons.FiMail className="contactMeIcon"/>
          </div>
        </Col>
        <Col xs={3}>
          <p className="contactMeText">Contact Me</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <Row>
              <Col><EmailCard mail={this.state.email}/></Col>
            </Row>
            <Row>
              <Col><PhoneCard Mobile={this.state.phone}/></Col>
            </Row>
            <Row>
              <Col><AddressCard Place={this.state.fullAdd}/></Col>
            </Row>
            <Row style={{margin:"20px 10px 10px 10px"}}>
              <Col md="auto">
                <a href={this.state.instagram} target="_blank" style={{margin:"0px"}}><FaIcons.FaInstagram className="socialIcons"/></a>
              </Col>
              <Col md="auto">
              <a href={this.state.face} target="_blank" style={{margin:"0px"}}><FaIcons.FaFacebook className="socialIcons"/></a>
              </Col>
              <Col md="auto">
              <a href={this.state.git} target="_blank" style={{margin:"0px"}}><FaIcons.FaGithub className="socialIcons"/></a>
              </Col>
              <Col md="auto">
              <a href={this.state.twitter} target="_blank" style={{margin:"0px"}}><FaIcons.FaTwitter className="socialIcons"/></a>
              </Col>
              <Col md="auto">
              <a href={this.state.linked} target="_blank" style={{margin:"0px"}}><FaIcons.FaLinkedin className="socialIcons"/></a>
              </Col>
            </Row>
          </Container>
        </Col>
        
        <Col>
          <Container>
            <Row>
              <MessageCard/>
            </Row>
          </Container>
        </Col>
      </Row>



    </Container>
    );}
}

export default Contact;
