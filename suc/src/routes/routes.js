import React,{Component}  from "react";
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
import authContext from '../context/auth-context';
import AlumniLoader from '../screens/loginSignup/loading/alumni/alumniLoader';

class Routes extends Component
{
    state = {
        token: null,
        userId: null,
        userType: null,
        idUser:null
    }
    login = (token, userId, userType, tokenExpiration) => {
        this.setState({token: token, userId: userId, userType: userType});
    };

    logout= () => {
        this.setState({token: null});
    };

    signUp = (userId) => {
        this.setState({idUser: userId});
        console.log(this.state.idUser);
    };
    render(){
        return(
            <div>
                <Router history={history}>
                    <authContext.Provider value={{token: this.state.token,userId: this.state.userId,userType: this.state.userType,idUser: this.state.idUser, login: this.login, logout: this.logout, signUp: this.signUp}}>
                        <Switch>
                            {!this.state.token && <Redirect from="/" to="/home" exact />}
                            {this.state.token && <Redirect from="/alumni" to="/details" exact />}
                            {this.state.token && <Redirect from="/student" to="/profile" exact />}
                            {/* {this.state.idUser && <Redirect from="/alumni" to="/loading" exact />} */}
                            <Route path="/education" component={Schooling}/>  
                            <Route path="/home" component={Home}/>
                            <Route path="/student" component={() => <LoginSignup typeUser="student"/>} />
                            <Route path="/alumni" component={() => <LoginSignup typeUser="alumni"/>} />
                            <Route path="/profile" component={SideNavBar}/>
                            <Route path="/login" component={Partition} />
                            <Route path="/alumniProfile" component={Alumni} />
                            <Route path="/details" component={AlumniDetails} />
                            <Route path="/requirement" component={Requirement} />
                            {this.state.idUser && <Route path="/loading" component={AlumniLoader} alumniId={this.state.idUser}/>}
                        </Switch>
                    </authContext.Provider>
                </Router>
            </div>
        );
    }
}

export default Routes;
   