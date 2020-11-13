import React,{Component} from 'react';
import Schooling from './schooling/schooling';
import SecondaryEducation from './secondaryEducation/secondaryEducation';
import Graduation from './graduation/graduation';
import Profile from '../../sideNavBar/sideNavBar';
import './styles/styles.css';


export class Education extends Component
{

    state = {
        step: 1,
        schoolName:'',
        ySchool:'',
        schoolGrade:'',
        schoolBoard:'',
        secondarySchoolName:'',
        ySecondarySchool:'',
        secondarySchoolGrade:'',
        secondarySchoolBoard:'',
        secondarySchoolStream:'',
        collegeName:'',
        yCollegeStart:'',
        yCollegeEnd:'',
        collegeGrade:'',
        collegeStream:'',
        collegeCourse:'',
        collegeBoard:'',
    };


    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };


   render()
   {
    const { step } = this.state;
    const { schoolName,
        ySchool,
        schoolGrade,
        schoolBoard,
        secondarySchoolName,
        ySecondarySchool,
        secondarySchoolGrade,
        secondarySchoolBoard,
        secondarySchoolStream,
        collegeName,
        yCollegeStart,
        yCollegeEnd,
        collegeGrade,
        collegeStream,
        collegeCourse,
        collegeBoard} = this.state;
    const values = { schoolName,
        ySchool,
        schoolGrade,
        schoolBoard,
        secondarySchoolName,
        ySecondarySchool,
        secondarySchoolGrade,
        secondarySchoolBoard,
        secondarySchoolStream,
        collegeName,
        yCollegeStart,
        yCollegeEnd,
        collegeGrade,
        collegeStream,
        collegeCourse,
        collegeBoard,};

        switch (step) {
            case 1:
                return (
                    <div className="educationContainer">
                    <Schooling
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                    </div>
                );
            case 2:
                return (
                    <div className="educationContainer">
                    <SecondaryEducation
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                        
                    />
                    </div>
                );
            case 3:
                return (
                    <div className="educationContainer">
                    <Graduation
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                    </div>
                );
            case 4:
                return (
                   
                    <Profile/>
                    
                );

        }
    
    }
}

export default Education; 