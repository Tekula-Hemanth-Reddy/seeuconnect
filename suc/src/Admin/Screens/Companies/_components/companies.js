import React, { Component } from 'react';
import {Container,Card,Row,Col,Button} from 'react-bootstrap';
import AdminNavBar from '../../../Components/navBar/component/adminNavbar';
import Fotter from '../../../../components/FirstPage/Fotter/_component/_fotter';

class companies extends Component {

    constructor(props){
        super(props);
        this.state = {
            companies:[],
            unBlocked:[],
            blocked:[]
        };
    }

    componentDidMount(){
    
        const requestBody = {
            query: `
            query{
                companies{
                  _id
                  companyName
                  name
                  companyWebsite
                  blocked
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
            this.setState({companies: resData.data.companies});
            this.state.companies.map(item =>{
                if(item.blocked){
                    let list = [...this.state.blocked];
                    list.push(item)
                    this.setState({
                        blocked: list
                    });
                }
                else{
                    let list = [...this.state.unBlocked];
                    list.push(item)
                    this.setState({
                        unBlocked: list
                    });
                }
            });
          })
          .catch(err => {
              console.log(err);
          });
      }

      onBlock = (blockId) =>{
        const requestBody = {
            query: `
            mutation{
                CompanyUpdate(alumniId:"${blockId}"){
                    _id
                    companyName
                    name
                    companyWebsite
                    blocked
                }
              }
            `
        };

        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.status!== 200 && res.status!== 201){
                throw new Error('Failed!');
            }
            return res.json();
        })
        .then(resData => {
            let list = [...this.state.blocked];
            list.push(resData.data.CompanyUpdate);
            this.setState({unBlocked: this.state.unBlocked.filter(function(common) { 
                return common._id !== blockId
            }),
            blocked:list
        });
        })
        .catch(err => {
            console.log(err);
        });
    };

    onUnBlock = (unBlockId) =>{
        const requestBody = {
            query: `
            mutation{
                CompanyUpdate(alumniId:"${unBlockId}"){
                    _id
                    companyName
                    name
                    companyWebsite
                    blocked
                }
              }
            `
        };

        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.status!== 200 && res.status!== 201){
                throw new Error('Failed!');
            }
            return res.json();
        })
        .then(resData => {
            let list = [...this.state.unBlocked];
            list.push(resData.data.CompanyUpdate);
            this.setState({
                blocked: this.state.blocked.filter(function(common) { 
                return common._id !== unBlockId
            }),
            unBlocked:list
        });
        })
        .catch(err => {
            console.log(err);
        });
    };


    render() {
        return (
            <div style={{backgroundColor:"#000",height:"100vh"}}>
                <div style={{marginBottom:"60px"}}>
                    <AdminNavBar/>
                </div>
                <Container className="companyContainer">
                    <div className="row" style={{paddingBottom:"10%"}}>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h3 style={{marginTop:"10%",color:"white"}}>Companies At Hiring</h3>
                            {
                                this.state.unBlocked.map(item =>(
                                    <div style={{paddingTop:"10%"}}>
                                        <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px 15px 15px 25px"}}>
                                        <Row>
                                            <Col md={8}>
                                                <Row>
                                                <h5 style={{color:"#fff",marginTop:"5px",textAlign:"left",marginLeft:"2px"}}>{item.name.split("-")[0]}{" "}{item.name.split("-")[1]}{" "}{item.name.split("-")[2]}</h5>
                                                </Row>
                                                <Row>
                                                <p style={{color:"#fff",marginTop:"5px",textAlign:"left",marginLeft:"2px"}}>{item.companyName}</p>
                                                </Row>
                                                <Row>
                                                    <a href={item.companyWebsite} style={{textDecoration:"none"}} target="_blank">{item.companyWebsite}</a>
                                                </Row>
                                            </Col>
                                            <Col md={4}>
                                            <Button variant="outline-danger" onClick={this.onBlock.bind(this,item._id)} >Block</Button>
                                            </Col>
                                        </Row>
                                        </Card>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h3 style={{marginTop:"10%",color:"white"}}>Companies At Block</h3>
                            {
                                this.state.blocked.map(item =>(
                                    <div>
                                    {item.companyName &&
                                    <div style={{paddingTop:"10%"}}>
                                        <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px 15px 15px 25px"}}>
                                        <Row>
                                            <Col md={8}>
                                                <Row>
                                                <h5 style={{color:"#fff",marginTop:"5px",textAlign:"left",marginLeft:"2px"}}>{item.name.split("-")[0]}{" "}{item.name.split("-")[1]}{" "}{item.name.split("-")[2]}</h5>
                                                </Row>
                                                <Row>
                                                <p style={{color:"#fff",marginTop:"5px",textAlign:"left",marginLeft:"2px"}}>{item.companyName}</p>
                                                </Row>
                                                <Row>
                                                    <a href={item.companyWebsite} style={{textDecoration:"none"}} target="_blank">{item.companyWebsite}</a>
                                                </Row>
                                            </Col>
                                            <Col md={4}>
                                            <Button variant="outline-warning" onClick={this.onUnBlock.bind(this,item._id)} >Un Block</Button>
                                            </Col>
                                        </Row>
                                        </Card>
                                    </div>
                                    }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Container>
                <Fotter/>
            </div>
        );
    }
}

export default companies;