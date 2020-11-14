import React  from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from '../../src/history/history';
import LoginSignup from '../screens/loginSignup/loginSignup';
import Home from '../screens/home/home';
import ContactUs from '../components/Fotter/_component/_fotter';
import SideNavBar from '../components/sideNavBar/sideNavBar';
import Schooling from '../components/profilePages/education/education';
import Partition from '../screens/partition/_component/partition';
import PersonalDetails from '../components/profilePages/personalDetails/component/personalDetails';
import ReachOut from '../components/profilePages/reachout/component/reachout';
import Project from '../components/profilePages/project/component/project';
import Experience from '../components/profilePages/experience/component/experience';
import Achievement from '../components/profilePages/achievements/component/achievement';

function Routes()
{
    return(
        <div>
        <Router history={history}>
                <Switch>
                    <Route path="/education" component={Schooling}/>  
                    <Route path="/home" component={Home}/>
                    <Route path="/contactUs" component={ContactUs} /> 
                    <Route path="/student" component={LoginSignup} />
                    <Route path="/profile" component={SideNavBar}/>
                    <Route path="/login" component={Partition} />
                    <Route path="/personalDetails" component={PersonalDetails}/>  
                    <Route path="/reachout" component={ReachOut}/>  
                    <Route path="/project" component={Project}/>  
                    <Route path="/experience" component={Experience}/>  
                    <Route path="/ach" component={Achievement}/>  
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;
   