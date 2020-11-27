import React, { Component } from 'react';
import {Col, Container, Row,Button} from 'react-bootstrap';
import './css/home.css';
import Image from 'react-bootstrap/Image';
import AdityaImage from '../../../assets/images/background.png';
import authContext from '../../../context/auth-context';


class Home extends Component {

  constructor(props){
    super(props);
    console.log(this.props.studentId);
    this.state = {
      userId: this.props.studentId,
      name: "",
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
          name
          profile{
            portFolio
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
          name: resData.data.users.name,
          website: resData.data.users.profile.portFolio});
      })
      .catch(err => {
          console.log(err);
      });
  }


  render(){
  return (
    
    <Container className="mainHomeContainer">
      <Row>
      <Col xs={6}>
      <div className="subDivision" style={{alignItems:"flex-start"}}>
          <h1 className="greetingClass">Hello!!</h1>
          <h1 className="greetingClass">{this.state.name}</h1>
          <Button href={this.state.website} target="_blank" className="portfolioBtn" variant="primary" size="lg">Visit My PortFolio</Button>
      </div>
      
      </Col>
      <Col xs={6}>
      <Image src={AdityaImage} roundedCircle  className="roundImage"/>
      </Col>
      </Row>
    </Container>
    
  );}
}

export default Home;
