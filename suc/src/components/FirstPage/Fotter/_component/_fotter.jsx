import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron,Button,Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../../../assets/images/logo.png';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelopeSquare, faPaperPlane,faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import '../_css/_fotterStyles.css'

function Fotter(){
    return(
        <Jumbotron className="fotter">
            <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-6 col-xl-3 fotterDivision">
                    <Image src={Logo} alt="See U Connect" style={{height:"100px",width:"100px",marginTop:"-50px",marginLeft:"40px",marginBottom:"5px"}}/>
                    <br/>
                    <h7 style={{paddingTop:"5px",paddingBottom:"5px",color:"#fff"}}>Make Sure To Connect</h7>
                    <br/>
                    <h5 className="headingsColor">About Us</h5>
                    <p className="aboutUs">We want to help bring talented students to real time working experience.</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-xl-3 fotterDivision"> 
                    <h5 className="headingsColor">Helpful Links</h5>                   
                    <ul className="listStyles">
                        <li className="unOrderListItems"><a href="#services" className="contactDecorations" style={{marginLeft:"0px",textDecoration:"none"}}>Services</a></li>
                        <li className="unOrderListItems"><a href="#terms" className="contactDecorations" style={{marginLeft:"0px",textDecoration:"none"}}>Terms & Conditions</a></li>
                        <li className="unOrderListItems"><a href="#privacy" className="contactDecorations" style={{marginLeft:"0px",textDecoration:"none"}}>Privacy Policy</a></li>
                    </ul></div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xl-3 fotterDivision">
                    <h5 className="headingsColor">Feed Back</h5>
                    <form action="mailto:seeuconnect@gmail.com" method="POST" enctype="multipart/form-data" name="EmailForm">
                        <textarea name="ContactCommentt" row="1" cols="23" style={{height:"35px", marginTop:"0px"}}>
                        </textarea>
                        <FontAwesomeIcon className='ico' icon={faEnvelopeOpenText} color="#007bff" size="lg" style={{marginBottom:"15px", marginLeft:"10px"}}/>
                        <br/>
                        <Button type="submit" variant="outline-light"  size="sm" className="buttonSend">
                            <FontAwesomeIcon className='ico' icon={faPaperPlane} size="sm" style={{marginRight:"10px",color:"#007bff"}}/>
                            Send
                        </Button> 
                    </form>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6 col-xl-3 contactUs">
                    <h5 className="headingsColor fotterDivision">Contact Us</h5>
                    <ul className="listStyles">
                        <li className="unOrderListItems fotterDivisionLinks"><FontAwesomeIcon className='ico' icon={faPhoneAlt} color="#007bff" size="md"/><a href="tel:+919876543210" className="contactDecorations" style={{textDecoration:"none"}}>+91 9876543210</a></li>
                        <li className="unOrderListItems fotterDivisionLinks"><FontAwesomeIcon className='ico' icon={faEnvelopeSquare} color="#007bff" size="md" /><a href="mailto:seeuconnect@gmail.com" className="contactDecorations" style={{textDecoration:"none"}}>seeuconnect@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <hr style={{backgroundColor: "#fff", color: "#fff" }}/>
            <div >
                <ul className="listStyles" style={{paddingLeft: "0px"}}>
                    <li style={{display: "inline", margin: "15px"}}><a href="#"><FontAwesomeIcon className='ico' icon={faFacebook} color="#007bff" size="lg" /></a></li>
                    <li style={{display: "inline", margin: "15px"}}><a href="#"><FontAwesomeIcon className='ico' icon={faInstagram} color="#007bff" size="lg" /></a></li>
                    <li style={{display: "inline", margin: "15px"}}><a href="#"><FontAwesomeIcon className='ico' icon={faTwitter } color="#007bff" size="lg" /></a></li>
                    
                </ul>
            </div>
        </Jumbotron>
    );
}

export default Fotter;