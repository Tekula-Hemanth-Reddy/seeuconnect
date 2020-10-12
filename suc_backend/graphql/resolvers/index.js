const bcrypt = require('bcryptjs');

const User = require('../../models/users');
const Skill = require('../../models/skill');
const Language = require('../../models/language');
const ReachOut = require('../../models/reachOut');
const Project = require('../../models/project');
const Course = require('../../models/course');
const Alumni = require('../../models/alumni');
const Achievement = require('../../models/achievement');
const Position = require('../../models/position');
const School = require('../../models/school');
const College = require('../../models/college');
const Graduation = require('../../models/graduation');
const AdditionalDetails = require('../../models/additionalDetails');
const Address = require('../../models/address');

module.exports = {

    //users login
    users: () => {
        return User.find()
        .then(users => {
            return users.map(
                user => {
                    return { ...user._doc, password:null, _id: user.id };
                }
            );
        })
        .catch(err => {
            throw new Error("No Users");
        });
    },

    CreateUser: args => {
        return User.findOne({email: args.userInput.email}).then( user => {
            //to find user already exit or not
            if(user)
            {
                throw new Error('user exist already');
            }
            return bcrypt.hash(args.userInput.password, 15);//for bCrypt the password to ensure security
        }).then(hashedPassword => {
            const user = new User({
                email: args.userInput.email,
                password: hashedPassword
            });
            return user.save();
        })
        .then(result => {
            return { ...result._doc, password:null, _id: result.id };
        })
        .catch(err => {
            throw err;
        });
    },

    //language
    languages : () => {
        return Language.find()
        .then(languages => {
            return languages.map(language => {
                return { ...language._doc, _id: language.id };
            }
            );
        })
        .catch(err => {
            throw err;
        });
    },

    CreateLanguage : args => {
        const voice = new Language({
            language: args.languageInput.language
        });
        return voice.save()
        .then(result => {
            return { ...result._doc, _id: result.id};
        })
        .catch(err => {
            throw err;
        });
    },

    //skills
    skills : () => {
        return Skill.find()
        .then(skills => {
            return skills.map(skill => {
                return { ...skill._doc, _id: skill.id };
            }
            );
        })
        .catch(err => {
            throw err;
        });
    },

    CreateSkill : args => {
        const ability = new Skill({
            skill: args.skillInput.skill
        });
        return ability.save()
        .then(result => {
            return { ...result._doc, _id: result.id};
        })
        .catch(err => {
            throw err;
        });
    },

    //reachOut
    reachOuts : () => {
        return ReachOut.find()
        .then(contact => {
            return contact.map(
                result =>
                {
                    return { ...result._doc, _id:result.id };
                }
            );
        }
        )
        .catch(err => {
            throw err;
        });
    },

    CreateReachOut : args => {
        const contact = new ReachOut({
            gitHub: args.reachOutInput.gitHub,
            linkedIn: args.reachOutInput.linkedIn,
            instagram: args.reachOutInput.instagram,
            faceBook: args.reachOutInput.faceBook,
            twitter: args.reachOutInput.twitter
        });
        return contact.save()
        .then( result => {
            return { ...result._doc, _id:result.id };
        })
        .catch(err => {
            throw err;
        });
    },

    //projects
    projects : () =>{
        return Project.find()
        .then(projects => {
            return projects.map(result =>{
                return { ...result._doc, _id:result.id };
            });
        })
        .catch(err => {
            throw err;
        });
    },

    CreateProject : args => {
        const works = new Project({
            projectName: args.projectInput.projectName,
            projectDescription: args.projectInput.projectDescription,
            projectUrl: args.projectInput.projectUrl
        });
        return works.save()
        .then( result => {
            return { ...result._doc, _id:result.id};
        })
        .catch(err => {
            throw err;
        });
    },

    //courses
    courses : () =>{
        return Course.find()
        .then( study => {
            return study.map( result => {
                return { ...result._doc, _id:result.id };
            });
        }
        )
        .catch( err => {
            throw err;
        });
    },

    CreateCourse : args => {
        const study = new Course({
            courseName: args.courseInput.courseName,
            specialization: args.courseInput.specialization,
            certificate: args.courseInput.certificate,
            credentials: args.courseInput.credentials
        });
        return study.save()
        .then(result => {
            return { ...result._doc, _id:result.id };
        })
        .catch(err => {
            throw err;
        });
    },

    //alumni
    jobGivers : () =>{
        return Alumni.find()
        .then( information => {
            return information.map( result => {
                return { ...result._doc, _id:result.id };
            });
        }
        )
        .catch( err => {
            throw err;
        });
    },

    CreateAlumni : args => {
        const information = new Alumni({
            companyName: args.alumniInput.companyName,
            domain: args.alumniInput.domain,
            platform: args.alumniInput.platform
        });
        return information.save()
        .then(result => {
            return { ...result._doc, _id:result.id };
        })
        .catch(err => {
            throw err;
        });
    },

    //Achievement
    achievements : () =>{
        return Achievement.find()
        .then( jobsDone => {
            return jobsDone.map( result => {
                return { ...result._doc, _id:result.id };
            });
        }
        )
        .catch( err => {
            throw err;
        });
    },

    CreateAchievement : args => {
        const jobsDone = new Achievement({
            title: args.achievementInput.title,
            achievementDescription: args.achievementInput.achievementDescription,
            certificate: args.achievementInput.certificate
        });
        return jobsDone.save()
        .then(result => {
            return { ...result._doc, _id:result.id };
        })
        .catch(err => {
            throw err;
        });
    },

    //Position
    positions : () =>{
        return Position.find()
        .then( stand => {
            return stand.map( result => {
                return { ...result._doc, _id:result.id };
            });
        }
        )
        .catch( err => {
            throw err;
        });
    },

    createPosition : args => {
        const stand = new Position({
            positionHeld: args.positionInput.positionHeld,
            companyName: args.positionInput.companyName,
            positionDescription: args.positionInput.positionDescription,
            startDate: new Date(args.positionInput.startDate),
            endDate: new Date(args.positionInput.endDate)//TODO : need to accept null value
        });
        return stand.save()
        .then(result => {
            return { ...result._doc, _id:result.id };
        })
        .catch(err => {
            throw err;
        });
    },

    //school
    schools : args => {
        return School.find()
        .then( school => {
            school.map(result => {
                if(result.id === args.schoolID)
                {
                    return { ...result._doc, _id: result.id };
                }
            });
        })
        .catch(err => {
            throw err;
        });
    },

    CreateSchool : args =>{
        const school = new School({
            schoolName: args.schoolInput.schoolName,
            schoolGrade: +args.schoolInput.schoolGrade,
            schoolBoard: args.schoolInput.schoolBoard,
            schoolYear: +args.schoolInput.schoolYear
        });
        return school.save()
        .then(result => {
            return { ...result._doc, _id:result.id };
        })
        .catch(err => {
            throw err;
        });
    },

    //college
    colleges : args => {
        return College.find()
        .then( college => {
            college.map(result => {
                if(result.id === args.collegeID)
                {
                    return { ...result._doc, _id: result.id };
                }
            });
        })
        .catch(err => {
            throw err;
        });
    },

    CreateCollege : args =>{
        const college = new College({
            collegeName: args.collegeInput.collegeName,
            collegeGrade: +args.collegeInput.collegeGrade,
            collegeCourse: args.collegeInput.collegeCourse,
            collegeBoard: args.collegeInput.collegeBoard,
            collegeYear: +args.collegeInput.collegeYear
        });
        return college.save()
        .then(result => {
            return { ...result._doc, _id:result.id };
        })
        .catch(err => {
            throw err;
        });
    },

    //graduation
    graduationCollege : args => {
        return Graduation.find()
        .then( graduation => {
            graduation.map(result => {
                if(result.id === args.graduationId)
                {
                    return { ...result._doc, _id: result.id };
                }
            });
        })
        .catch(err => {
            throw err;
        });
    },

    CreateGraduation : args =>{
        const graduation = new Graduation({
            graduationCollegeName: args.graduationInput.graduationCollegeName,
            graduationCollegeGrade: +args.graduationInput.graduationCollegeGrade,
            graduationUniversity: args.graduationInput.graduationUniversity,
            graduationCourse: args.graduationInput.graduationCourse,
            graduationStream: args.graduationInput.graduationStream,
            graduationYear: +args.graduationInput.graduationYear
        });
        return graduation.save()
        .then(result => {
            return { ...result._doc, _id:result.id };
        })
        .catch(err => {
            throw err;
        });
    },

    //additionalDetails
    detailsAdditional : args =>{
        return AdditionalDetails.find()
        .then( additional => {
            additional.map(result => {
                if(result.id === args.detailsId)
                {
                    return { ...result._doc, _id: result.id };
                }
            });
        })
        .catch(err => {
            throw err;
        });
    },

    CreateAdditionalDetails : args =>{
        const additional = new AdditionalDetails({
            detailsDescription: args.additionalDetailsInput.detailsDescription
        });
        return additional.save()
        .then( result => {
            return { ...result._doc, _id:result.id };
        })
        .catch(err => {
            throw err;
        });
    },

    //address
    addresses : args => {
        return Address.find()
        .then(address => {
            address.map(result => {
                if(result.id === args.addressId)
                {
                    return {...result._doc, _id:result.id };
                }
            });
        })
        .catch(err => {
            throw err;
        });
    },

    CreateAddress : args => {
        const address = new Address({
            state: args.addressInput.state,
            city: args.addressInput.city,
            location: args.addressInput.location,
            pinCode: +args.addressInput.pinCode
        });
        return address.save()
        .then(result => {
            return { ...result._doc, _id:result.id };
        })
        .catch(err => {
            throw err;
        });
    }
};