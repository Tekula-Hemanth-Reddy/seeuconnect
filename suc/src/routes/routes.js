import React  from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from '../../src/history/history';
import LoginSignup from '../screens/loginSignup/loginSignup';
import Home from '../screens/home/home';
import ContactUs from '../components/Fotter/_component/_fotter';
import SideNavBar from '../components/sideNavBar/sideNavBar';
<<<<<<< HEAD
import Schooling from '../components/profilePages/education/education';
=======
import Partition from '../screens/partition/_component/partition';
>>>>>>> b836c308f86b8b63c2837d5d29ca090d0a5e530c

function Routes()
{
    return(
        <div>
        <Router history={history}>
                <Switch>
<<<<<<< HEAD
                    <Route path="/home" component={Schooling}/>  
                    <Route path="/login" component={LoginSignup} />
=======
                    <Route path="/home" component={Home}/>
                    <Route path="/contactUs" component={ContactUs} /> 
                    <Route path="/student" component={LoginSignup} />
>>>>>>> b836c308f86b8b63c2837d5d29ca090d0a5e530c
                    <Route path="/profile" component={SideNavBar}/>
                    <Route path="/login" component={Partition} />
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;
   