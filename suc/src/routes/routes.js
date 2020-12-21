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
import StudentFailure from '../screens/failureScreens/component/studentFailure';
import FullProfile from '../AlumniPart/Components/fullProfile/component/fullProfile';
import AuthAdmin from '../Admin/Screens/Auth/_components/auth';
import AdminNavBar from '../Admin/Components/navBar/component/adminNavbar';
import AdminLatestNews from '../Admin/Screens/latest/_components/latestNews';
import Companies from '../Admin/Screens/Companies/_components/companies';

class Routes extends Component {
    state = {
        token: null,
        userId: null,
        userType: null,
        idUser:null
    }
    login = (token, userId, userType, tokenExpiration) => {
        this.setState({token: token, userId: userId, userType: userType});
        sessionStorage.setItem('token',token);
        sessionStorage.setItem('userId',userId);
        sessionStorage.setItem('userType',userType);
    };

    logout= () => {
        this.setState({token: null,userId:null,userType:null,idUser:null});
        sessionStorage.clear();
    };

    signUp = (userId) => {
        this.setState({idUser: userId});
        sessionStorage.setItem('idUser',userId);
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
                            <Route path='/admin' component={AuthAdmin}/>

                            <Route path="/alumni" component={() => <LoginSignup typeUser="alumni"/>} />
                            <Route path="/login" component={Partition} />
                            <Route path="/alumniProfile" component={() => <Alumni alumniId={sessionStorage.getItem('userId')}/>}/>
                            <Route path="/details" component={() => <AlumniDetails alumniId={sessionStorage.getItem('userId')}/>} />
                            <Route path="/requirement" component={Requirement} />
                            <Route path="/studentFailure" component={() => <StudentFailure message="Login through Student"/>} />
                            <Route path="/alumniFailure" component={() => <StudentFailure message="Login through Alumni"/>} />
                            <Route path="/signUpFailure" component={() => <StudentFailure message="User Already Exist or Network Problem"/>} />
                            <Route path="/failure" component={() => <StudentFailure message="CredentialsFailure"/>} />
                            <Route path='/fullProfile' component={() => <FullProfile/> } />
                            <Route path='/adminPortal' component={AdminNavBar} />
                            <Route path="/adminLatestNews" component={AdminLatestNews}/>
                            <Route path="/Companies" component={Companies}/>
                                           
                            {this.state.idUser && <Route path="/loading" component={() => <AlumniLoader alumniId={sessionStorage.getItem('idUser')}/>}/>}
                            {this.state.idUser && <Route path="/stuproloading" component={() => <StuProfile studentId={sessionStorage.getItem('idUser')}/>}/>}
                            {this.state.idUser && <Route path="/stuaddloading" component={() => <StuAddress studentId={sessionStorage.getItem('idUser')}/>}/>}
                            {this.state.idUser && <Route path="/sturealoading" component={() => <StuReachOut studentId={sessionStorage.getItem('idUser')}/>}/>}
                            {this.state.idUser && <Route path="/stueduloading" component={() => <StuEducation studentId={sessionStorage.getItem('idUser')}/>}/>}
                            {this.state.idUser && <Route path="/stuschloading" component={() => <StuSchool studentId={sessionStorage.getItem('idUser')}/>}/>}
                            {this.state.idUser && <Route path="/stucolloading" component={() => <StuCollege studentId={sessionStorage.getItem('idUser')}/>}/>}
                            {this.state.idUser && <Route path="/stugraloading" component={() => <StuGraduation studentId={sessionStorage.getItem('idUser')}/>}/>}
                        </Switch>
                    </authContext.Provider>
                </Router>
            </div>
        );
    }
}

export default Routes;
   