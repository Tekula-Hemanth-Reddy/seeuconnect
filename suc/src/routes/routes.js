import React  from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from '../../src/history/history';
import LoginSignup from '../screens/loginSignup/loginSignup';
import Home from '../screens/home/home';
import SideNavBar from '../components/sideNavBar/sideNavBar';
import Schooling from '../components/profilePages/education/education';
import Partition from '../screens/partition/_component/partition';
<<<<<<< HEAD
import PersonalDetails from '../components/profilePages/personalDetails/component/personalDetails';
import ReachOut from '../components/profilePages/reachout/component/reachout';
import Project from '../components/profilePages/project/component/project';
import Experience from '../components/profilePages/experience/component/experience';
import Achievement from '../components/profilePages/achievements/component/achievement';
=======
import Alumni from '../AlumniPart/Screens/_alumni/_component/alumni';
import AlumniDetails from '../AlumniPart/Screens/_details/_component/details';
import Requirement from '../AlumniPart/Screens/_entryOptions/_component/requirement';
>>>>>>> 0b7f92959e3e42b7b219970af07cec1df464533b

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
<<<<<<< HEAD
                    <Route path="/personalDetails" component={PersonalDetails}/>  
                    <Route path="/reachout" component={ReachOut}/>  
                    <Route path="/project" component={Project}/>  
                    <Route path="/experience" component={Experience}/>  
                    <Route path="/ach" component={Achievement}/>  
=======
                    <Route path="/alumni" component={Alumni} />
                    <Route path="/details" component={AlumniDetails} />
                    <Route path="/requirement" component={Requirement} />
>>>>>>> 0b7f92959e3e42b7b219970af07cec1df464533b
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;
   