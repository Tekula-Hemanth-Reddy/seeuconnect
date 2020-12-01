import React,{Component} from 'react';
import {Container,Card,Form,Button} from 'react-bootstrap';
import '../_css/details.css';
import authContext from '../../../../context/auth-context';
import NavBar from '../../../Components/navBar/component/alumniNavbar';
import history from '../../../../history/history';

class Details extends Component{
    constructor(props){
        super(props);
        this.titleEl = React.createRef();
        this.pEl = React.createRef();
        this.cEl = React.createRef();
        this.firstEl = React.createRef();
        this.lastEl = React.createRef();
        this.phonePersonEl = React.createRef();
        this.companyEl = React.createRef();
        this.phoneCompanyEl = React.createRef();
        this.emailEl = React.createRef();
        this.addressEl = React.createRef();
        this.websiteEl = React.createRef();
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
            cmpWebsite: ""
          };
    }

    static contextType = authContext;

    componentDidMount(){
        sessionStorage.removeItem("my_skills");
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
              users{
                name
              }
            }
          }
          `
      };
    
      const token = this.context.token;
    
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
              name: (""+resData.data.jobGivers.name)===""?"---":(""+resData.data.jobGivers.name),
              phone: (""+resData.data.jobGivers.personPhone)===""?"+91   ":(""+resData.data.jobGivers.personPhone),
              email: resData.data.jobGivers.personMail,
              company: resData.data.jobGivers.companyName,
              cmpPhone: (""+resData.data.jobGivers.companyPhone)===""?"+91   ":(""+resData.data.jobGivers.companyPhone),
              cmpMail: resData.data.jobGivers.companyMail,
              cmpAddress: resData.data.jobGivers.companyAddress,
              cmpWebsite: resData.data.jobGivers.companyWebsite});
          })
          .catch(err => {
              console.log(err);
          });
      }

    submitHandler = (event) =>{
        event.preventDefault();
        const Title = (""+this.titleEl.current.value)===""?"Mr.":""+this.titleEl.current.value;
        const Phn = (""+this.pEl.current.value)===""?"+91":""+this.pEl.current.value;
        const Cmp = (""+this.cEl.current.value)===""?"+91":""+this.pEl.current.value;
        const FirstName = ""+this.firstEl.current.value;
        const LastName = ""+this.lastEl.current.value;
        const PhonePerson = ""+this.phonePersonEl.current.value;
        const Company = ""+this.companyEl.current.value;
        const Email = ""+this.emailEl.current.value;
        const PhoneCompany = ""+this.phoneCompanyEl.current.value;
        const Website = ""+this.websiteEl.current.value;
        const Address = ""+this.addressEl.current.value;

        const requestBody = {
            query: `
            mutation{
                UpdateAlumni(alumniInput:{name:"${Title}${"-"}${FirstName}${"-"}${LastName}",personPhone:"${Phn}${" "}${PhonePerson}",companyName:"${Company}",companyPhone:"${Cmp}${" "}${PhoneCompany}",companyMail:"${Email}",companyAddress:"${Address}",companyWebsite:"${Website}"}){
                  _id
                  name
                }
              }
            `
        };

        const token = sessionStorage.getItem('token');

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
            history.push('/alumniProfile');
        })
        .catch(err => {
            console.log(err);
        });
    };
    render(){
        return(
            <div style={{backgroundColor:"#000"}}>
                <NavBar />
                <Container className="detailsContainer">
                    <Form onSubmit={this.submitHandler}>
                        <h2>Personel Details</h2>
                        <Card className="detailsCardStyle" style={{marginTop:"20px",marginBottom: "20px"}}>
                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xl-2">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text"
                                            placeholder={"Mr./Miss"}
                                            defaultValue={this.state.phone.substring(0,3)}
                                            defaultValue={this.state.name.split("-")[1]}
                                            ref={this.titleEl} 
                                        ></Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xl-5">
                                    <Form.Group>
                                        <Form.Control
                                            className="inputBoxStyle"
                                            size="text" 
                                            type="text" 
                                            placeholder="First Name*"
                                            defaultValue={this.state.name.split("-")[1]}
                                            ref={this.firstEl}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xl-5">
                                <Form.Group>
                                    <Form.Control 
                                        size="text" 
                                        type="text" 
                                        placeholder="Last Name*"
                                        defaultValue={this.state.name.split("-")[2]}
                                        ref={this.lastEl}
                                    />
                                </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xl-2">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text"
                                            placeholder={"+91"}
                                            defaultValue={this.state.phone.substring(0,3)}
                                            ref={this.pEl} 
                                        ></Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xl-5">
                                <Form.Group>
                                    <Form.Control 
                                        size="text" 
                                        type="Number" 
                                        placeholder="Phone Number"
                                        defaultValue={this.state.phone.substring(4,this.state.phone.length)}
                                        ref={this.phonePersonEl}
                                    />
                                </Form.Group>
                                </div>
                            </div>
                        </Card>
                        <h2>Company Details</h2>
                        <Card className="detailsCardStyle" style={{marginTop:"20px"}}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
                                <Form.Group>
                                    <Form.Control 
                                        size="text" 
                                        type="text" 
                                        placeholder="Company Name"
                                        defaultValue={this.state.company} 
                                        ref={this.companyEl}
                                    />
                                </Form.Group>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
                                <Form.Group>
                                    <Form.Control 
                                        size="text" 
                                        type="text" 
                                        placeholder="Company Website"
                                        defaultValue={this.state.cmpWebsite}
                                        ref={this.websiteEl}
                                    />
                                </Form.Group>
                                </div>
                            </div>
                            <h2>Contact Details</h2>
                            <div className="row">
                                <div className="col-lg-7 col-md-7 col-sm-7 col-xl-7">
                                    <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xl-3">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text"
                                            placeholder={"+91"}
                                            defaultValue={this.state.cmpPhone.substring(0,3)}
                                            ref={this.cEl} 
                                        ></Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-xl-9">
                                <Form.Group>
                                    <Form.Control 
                                        size="text" 
                                        type="Number" 
                                        placeholder="Phone Number"
                                        defaultValue={this.state.cmpPhone.substring(4,this.state.cmpPhone.length)} 
                                        ref={this.phoneCompanyEl}
                                    />
                                </Form.Group>
                                </div>
                                    </div>
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="email" 
                                            placeholder="Email"
                                            defaultValue={this.state.cmpMail} 
                                            ref={this.emailEl}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text" 
                                            placeholder="Address"
                                            defaultValue={this.state.cmpAddress} 
                                            ref={this.addressEl}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xl-5">
                                {/* <Image src={BackGround} className="detailsImage"/> */}
                                <Button  variant="outline-warning" size="lg" type="submit">Save</Button>
                                </div>
                            </div>
                        </Card>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Details;