import React  from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from '../../src/history/history';
import LoginSignup from '../screens/loginSignup/loginSignup';
import Home from '../screens/home/home';
import SideNavBar from '../components/sideNavBar/sideNavBar';
import Schooling from '../components/profilePages/education/education';
import Partition from '../screens/partition/_component/partition';
import Alumni from '../AlumniPart/Screens/_alumni/_component/alumni';
import AlumniDetails from '../AlumniPart/Screens/_details/_component/details';
import Requirement from '../AlumniPart/Screens/_entryOptions/_component/requirement';

function Routes()
{
    return(
        <div>
        <Router history={history}>
                <Switch>
                    <Redirect from="/" to="/home" exact />
                    <Route path="/education" component={Schooling}/>  
                    <Route path="/home" component={Home}/>
                    <Route path="/student" component={LoginSignup} />
                    <Route path="/profile" component={SideNavBar}/>
                    <Route path="/login" component={Partition} />
                    <Route path="/alumni" component={Alumni} />
                    <Route path="/details" component={AlumniDetails} />
                    <Route path="/requirement" component={Requirement} />
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;
   