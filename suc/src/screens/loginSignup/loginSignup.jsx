import React from "react";
import './css/loginSignup.css';
import BackGroundImage from '../../assets/images/background.png';
import {Card, Tabs,Tab} from 'react-bootstrap';
import Login from './login';
import SignUp from './signup';


function LoginSignup()
{
    return(
        <div className="loginSignupContainer" style={{ backgroundImage: 'url('+BackGroundImage+')' }}>
        <Card className="cardStyle">
        <Tabs defaultActiveKey="Login" id="uncontrolled-tab-example" className="tabsContainer">
            <Tab eventKey="Login" title="Login" >
            <Login/>
            </Tab>
            <Tab eventKey="SignUp" title="SignUp" >
            <SignUp/>
            </Tab>
        </Tabs>
        </Card>
        </div>
    );
}

export default LoginSignup;