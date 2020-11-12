import React  from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from '../../src/history/history';
import LoginSignup from '../screens/loginSignup/loginSignup';
import Home from '../screens/home/home';
import ContactUs from '../components/Fotter/_component/_fotter';
import SideNavBar from '../components/sideNavBar/sideNavBar';
import Partition from '../screens/partition/_component/partition';
import Alumni from '../screens/_alumni/_component/alumni';

function Routes()
{
    return(
        <Router history={history}>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/contactUs" component={ContactUs} /> 
                    <Route path="/student" component={LoginSignup} />
                    <Route path="/profile" component={SideNavBar}/>
                    <Route path="/login" component={Partition} />
                    <Route path="/alumni" component={Alumni} />
                </Switch>
            </Router>

    );

}

export default Routes;
   