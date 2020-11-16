import React,{Component}  from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from '../../src/history/history';
import LoginSignup from '../screens/loginSignup/loginSignup';
import Home from '../screens/home/home';
import SideNavBar from '../components/sideNavBar/sideNavBar';
import Partition from '../screens/partition/_component/partition';
import Alumni from '../AlumniPart/Screens/_alumni/_component/alumni';
import AlumniDetails from '../AlumniPart/Screens/_details/_component/details';
import Requirement from '../AlumniPart/Screens/_entryOptions/_component/requirement';
import authContext from '../context/auth-context';
import AlumniLoader from '../screens/loginSignup/loading/alumni/alumniLoader';
import StuProfile from '../screens/loginSignup/loading/student/stuProfile';
import StuAddress from '../screens/loginSignup/loading/student/stuAddress';
import StuReachOut from '../screens/loginSignup/loading/student/stuReachOut';
import StuEducation from '../screens/loginSignup/loading/student/stuEducation';
import StuSchool from '../screens/loginSignup/loading/student/stuSchool';
import StuCollege from '../screens/loginSignup/loading/student/stuCollege';
import StuGraduation from '../screens/loginSignup/loading/student/stuGraduation';
import EditSideBar from '../components/editSideNavBar/sideNavBar';

class Routes extends Component {
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
        this.setState({token: null,userId:null,userType:null,idUser:null});
    };

    signUp = (userId) => {
        this.setState({idUser: userId});
    };
    render(){
        return(
            <div>
                <Router history={history}>
                    <authContext.Provider value={{token: this.state.token,userId: this.state.userId,userType: this.state.userType,idUser: this.state.idUser, login: this.login, logout: this.logout, signUp: this.signUp}}>
                        <Switch>
                            {!this.state.token && <Redirect from="/" to="/home" exact />} 
                            <Route path="/home" component={Home}/>
                            <Route path="/student" component={() => <LoginSignup typeUser="student"/>} />
                            <Route path="/profile" component={SideNavBar}/>
                            <Route path='/profile/edit' component={EditSideBar}/>

                            <Route path="/alumni" component={() => <LoginSignup typeUser="alumni"/>} />
                            <Route path="/login" component={Partition} />
                            <Route path="/alumniProfile" component={() => <Alumni alumniId={this.state.userId}/>}/>
                            <Route path="/details" component={() => <AlumniDetails alumniId={this.state.userId}/>} />
                            <Route path="/requirement" component={Requirement} />
                                           
                            {this.state.idUser && <Route path="/loading" component={() => <AlumniLoader alumniId={this.state.idUser}/>}/>}
                            {this.state.idUser && <Route path="/stuproloading" component={() => <StuProfile studentId={this.state.idUser}/>}/>}
                            {this.state.idUser && <Route path="/stuaddloading" component={() => <StuAddress studentId={this.state.idUser}/>}/>}
                            {this.state.idUser && <Route path="/sturealoading" component={() => <StuReachOut studentId={this.state.idUser}/>}/>}
                            {this.state.idUser && <Route path="/stueduloading" component={() => <StuEducation studentId={this.state.idUser}/>}/>}
                            {this.state.idUser && <Route path="/stuschloading" component={() => <StuSchool studentId={this.state.idUser}/>}/>}
                            {this.state.idUser && <Route path="/stucolloading" component={() => <StuCollege studentId={this.state.idUser}/>}/>}
                            {this.state.idUser && <Route path="/stugraloading" component={() => <StuGraduation studentId={this.state.idUser}/>}/>}
                        </Switch>
                    </authContext.Provider>
                </Router>
            </div>
        );
    }
}

export default Routes;
   