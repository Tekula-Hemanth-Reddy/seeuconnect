import React  from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from '../../src/history/history';
import LoginSignup from '../screens/loginSignup/loginSignup';
import Home from '../screens/home/home';
import SideNavBar from '../components/sideNavBar/sideNavBar';

function Routes()
{
    return(
        <Router history={history}>
                <Switch>
                    <Route path="/home" component={Home}/>  
                    <Route path="/login" component={LoginSignup} />
                    <Route path="/profile" component={SideNavBar}/>
                </Switch>
            </Router>

    );

}

export default Routes;
   