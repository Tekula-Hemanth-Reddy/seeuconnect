import React from "react";
import './css/loginSignup.css';
import BackGroundImage from '../../assets/images/temp/stars.jpeg';
import {Card, Tabs,Tab} from 'react-bootstrap';
import Navbar from '../../components/FirstPage/navbar/navbar';
import Login from './login';
import SignUp from './signup';


function LoginSignup(props)
{
    return(
        <div>
            <Navbar/>
            <div className="loginSignupContainer" style={{ backgroundImage: 'url('+BackGroundImage+')' }}>
            <Card className="loginSignupCardStyle">
            <Tabs defaultActiveKey="Login" id="uncontrolled-tab-example" className="tabsContainer">
                <Tab eventKey="Login" title="Login" >
                <Login type={props.typeUser} />
                </Tab>
                <Tab eventKey="SignUp" title="SignUp" >
                <SignUp type={props.typeUser}/>
                </Tab>
            </Tabs>
            </Card>
            </div>
        </div>
    );
}

export default LoginSignup;