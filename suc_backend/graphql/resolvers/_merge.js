const Profile = require('../../models/profile');
const Achievement = require('../../models/achievement');
const AdditionalDetails = require('../../models/additionalDetails');
const Address = require('../../models/address');
const Course = require('../../models/course');
const Language = require('../../models/language');
const Position = require('../../models/position');
const Project = require('../../models/project');
const ReachOut = require('../../models/reachOut');
const Skill = require('../../models/skill');
const School = require('../../models/school');
const College = require('../../models/college');
const Graduation = require('../../models/graduation');
const Education = require('../../models/education');
const Alumni = require('../../models/alumni');
const User = require('../../models/users');

const userInfo = async userId =>{
    try{
        const user = await User.findById(userId);
        return {...user._doc, _id: user._doc._id.toString(),
            profile: profileInfo.bind(this,user._doc.profileId),
            alumni: alumniInfo.bind(this,user._doc.alumniId)
        };
    }
    catch ( err ){
        throw err;
    }
}

const alumniInfo = async alumniId => {
    try {
        const result = await Alumni.findById(alumniId);
        return { ...result._doc, _id: result._doc._id.toString(),
            users: userInfo.bind(this,result._doc.userId)
        };
    } catch (err) {
        throw err;
    }
};

const profileInfo = async profileId => {
    try {
        const result = await Profile.findById(profileId);
        return { ...result._doc, _id: result._doc._id.toString(),
            addresses: addressInfo.bind(this,result._doc._id.toString()),
            skills: skillInfo.bind(this,result._doc._id.toString()),
            positions: positionInfo.bind(this,result._doc._id.toString()),
            projects: projectInfo.bind(this,result._doc._id.toString()),
            courses: courseInfo.bind(this,result._doc._id.toString()),
            languages: languageInfo.bind(this,result._doc._id.toString()),
            achievements: achievementInfo.bind(this,result._doc._id.toString()),
            detailsAdditional: additionalInfo.bind(this,result._doc._id.toString()),
            reachOuts: reachOutInfo.bind(this,result._doc._id.toString()),
            education: educationInfo.bind(this,result._doc._id.toString()),
            users: userInfo.bind(this,result._doc.userId)
        };
    } catch (err) {
        throw err;
    }
};

const achievementInfo = async profileId => {
    try {
        const jobsDone = await Achievement.find({profileId: {$in: profileId}});
        return jobsDone.map(result => {
            return { ...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId)
        };
        });
    } catch (err) {
        throw err;
    }
};

const additionalInfo = async profileId => {
    try {
        const additional = await AdditionalDetails.find({profileId: {$in: profileId}});
        return additional.map(result => {
            return { ...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId)
            };
        });
    } catch (err) {
        throw err;
    }
};

const addressInfo = async profileId => {
    try {
        const result = await Address.find({profileId: {$in: profileId}});
        return {...result[0]._doc, _id: result[0]._doc._id.toString(),
            profile: profileInfo.bind(this,result[0]._doc.profileId)
            };
    } catch (err) {
        throw err;
    }
};

const courseInfo = async profileId => {
    try {
        const study = await Course.find({profileId: {$in: profileId}});
        return study.map(result => {
            return { ...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId)
            };
        });
    } catch (err) {
        throw err;
    }
};

const languageInfo = async profileId => {
    try {
        const languages = await Language.find({profileId: {$in: profileId}});
        return languages.map(result => {
            return { ...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId)
            };
        });
    } catch (err) {
        throw err;
    }
};

const positionInfo = async profileId => {
    try {
        const stand = await Position.find({profileId: {$in: profileId}});
        return stand.map(result => {
            return { ...result._doc, _id: result._doc._id.toString(),
                startDate: new Date(result._doc.startDate),
                profile: profileInfo.bind(this,result._doc.profileId)
            };
        });
    } catch (err) {
        throw err;
    }
};

const projectInfo = async profileId => {
    try {
        const projects = await Project.find({profileId: {$in: profileId}});
        return projects.map(result => {
            return { ...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId)
            };
        });
    } catch (err) {
        throw err;
    }
};

const reachOutInfo = async profileId => {
    try {
        const result = await ReachOut.find({profileId: {$in: profileId}});
        return {...result[0]._doc, _id: result[0]._doc._id.toString(),
            profile: profileInfo.bind(this,result[0]._doc.profileId)
            };
    } catch (err) {
        throw err;
    }
};


const skillInfo = async profileId => {
    try {
        const skills = await Skill.find({profileId: {$in: profileId}});
        return skills.map(result => {
            return { ...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId)
            };
        });
    } catch (err) {
        throw err;
    }
};

const infoEducation = async educationId => {
    try {
        const result = await Education.findById(educationId);
        return educationInfo(result._doc.profileId);
    } catch (err) {
        throw err;
    }
};

const schoolInfo = async schoolId => {
    try {
        const result = await School.findById(schoolId);
        return { ...result._doc, _id: result._doc._id.toString(),
            education: infoEducation.bind(this, result._doc.educationId)  
        };
    } catch (err) {
        throw err;
    }
};
const collegeInfo = async collegeId => {
    try {
        const result = await College.findById(collegeId);
        return { ...result._doc, _id: result._doc._id.toString(),
            education: infoEducation.bind(this, result._doc.educationId)  
        };
    } catch (err) {
        throw err;
    }
};
const graduationInfo = async graduationId => {
    try {
        const result = await Graduation.findById(graduationId);
        return { ...result._doc, _id: result._doc._id.toString(),
            education: infoEducation.bind(this, result._doc.educationId)  
        };
    } catch (err) {
        throw err;
    }
};
const educationInfo = async profileId => {
    try {
        const result = await Education.find({profileId: {$in: profileId}});
        return { ...result[0]._doc, _id: result[0]._doc._id.toString(),
            school: schoolInfo.bind(this,result[0]._doc.schoolId),
            college: collegeInfo.bind(this,result[0]._doc.collegeId),
            graduation: graduationInfo.bind(this,result[0]._doc.graduationId),
            profile: profileInfo.bind(this,result[0]._doc.profileId)
         };
    } catch (err) {
        throw err;
    }
};

exports.userInfo = userInfo;
exports.alumniInfo = alumniInfo;
exports.profileInfo = profileInfo;
exports.achievementInfo = achievementInfo;
exports.additionalInfo = additionalInfo;
exports.addressInfo = addressInfo;
exports.courseInfo = courseInfo;
exports.languageInfo = languageInfo;
exports.positionInfo = positionInfo;
exports.projectInfo = projectInfo;
exports.reachOutInfo = reachOutInfo;
exports.skillInfo = skillInfo;
exports.schoolInfo = schoolInfo;
exports.collegeInfo = collegeInfo;
exports.graduationInfo = graduationInfo;
exports.educationInfo = educationInfo;
exports.infoEducation = infoEducation;