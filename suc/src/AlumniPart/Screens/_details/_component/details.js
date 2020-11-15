import React,{Component} from 'react';
import {Container,Card,Form,Button,Image} from 'react-bootstrap';
import '../_css/details.css';
import BackGround from '../../../../assets/images/background/background1.jpg';
import authContext from '../../../../context/auth-context';


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
    }

    static contextType = authContext;

    submitHandler = (event) =>{
        event.preventDefault();
        const Title = ""+this.titleEl.current.value;
        const Phn = ""+this.pEl.current.value;
        const Cmp = ""+this.cEl.current.value;
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
                UpdateAlumni(alumniInput:{name:"${Title}${FirstName}${" "}${LastName}",personPhone:"${Phn}${" "}${PhonePerson}",companyName:"${Company}",companyPhone:"${Cmp}${" "}${PhoneCompany}",companyMail:"${Email}",companyAddress:"${Address}",companyWebsite:"${Website}"}){
                  _id
                  name
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
            console.log(resData);
        })
        .catch(err => {
            console.log(err);
        });
    };
    render(){
        return(
            <div style={{backgroundColor:"#000"}}>
                <Container className="detailsContainer">
                    <Form onSubmit={this.submitHandler}>
                        <h2>Personel Details</h2>
                        <Card className="detailsCardStyle" style={{marginTop:"20px",marginBottom: "20px"}}>
                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xl-2">
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control 
                                        as="select"
                                        ref={this.titleEl}
                                        >
                                        <option>Mr.</option>
                                        <option>Miss.</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xl-5">
                                    <Form.Group>
                                        <Form.Control
                                            className="inputBoxStyle"
                                            size="text" 
                                            type="text" 
                                            placeholder="First Name*" 
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
                                        ref={this.lastEl}
                                    />
                                </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xl-2">
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control 
                                        as="select"
                                        ref={this.pEl}
                                        >
                                        <option>+91</option>
                                        <option>+060</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xl-5">
                                <Form.Group>
                                    <Form.Control 
                                        size="text" 
                                        type="Number" 
                                        placeholder="Phone Number" 
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
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control 
                                        as="select"
                                        ref={this.cEl}
                                        >
                                        <option>+91</option>
                                        <option>+060</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-xl-9">
                                <Form.Group>
                                    <Form.Control 
                                        size="text" 
                                        type="Number" 
                                        placeholder="Phone Number" 
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
                                            ref={this.emailEl}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text" 
                                            placeholder="Address" 
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