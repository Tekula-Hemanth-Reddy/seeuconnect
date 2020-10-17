const School = require('../../models/school');
const College = require('../../models/college');
const Graduation = require('../../models/graduation');
const Education = require('../../models/education');
const Profile = require('../../models/profile');

const { educationInfo, schoolInfo, collegeInfo, graduationInfo, profileInfo } = require('./_merge');

module.exports = {
    //school
    school : async args => {
        try{
            const study = await School.findById(args.schoolId);
            return{ ... study._doc, _id: study._doc._id.toString(),
                education: educationInfo.bind(this, study._doc.educationId)};
        }
        catch( err )
        {
            throw err;
        }
    },

    CreateSchool : async args =>{
        const school = new School({
            schoolName: args.schoolInput.schoolName,
            schoolGrade: +args.schoolInput.schoolGrade,
            schoolBoard: args.schoolInput.schoolBoard,
            schoolYear: +args.schoolInput.schoolYear,
            educationId: args.schoolInput.study
        });
        try {
            const result = await school.save();
            const educate = await Education.findById(result._doc.educationId);
            educate.schoolId = result._doc._id.toString();
            await educate.save();
            return { ...result._doc, _id: result.id, education: educationInfo.bind(this, result._doc.educationId) };
        } catch (err) {
            throw err;
        }
    },

    //college
    college : async args => {
        try{
            const study = await College.findById(args.collegeID);
            return{ ... study._doc, _id: study._doc._id.toString(),
                education: educationInfo.bind(this, study._doc.educationId)};
        }
        catch( err )
        {
            throw err;
        }
    },

    CreateCollege : async args =>{
        const college = new College({
            collegeName: args.collegeInput.collegeName,
            collegeGrade: +args.collegeInput.collegeGrade,
            collegeCourse: args.collegeInput.collegeCourse,
            collegeBoard: args.collegeInput.collegeBoard,
            collegeYear: +args.collegeInput.collegeYear,
            educationId: args.collegeInput.study
        });
        try {
            const result = await college.save();
            const educate = await Education.findById(result._doc.educationId);
            educate.collegeId = result._doc._id.toString();
            await educate.save();
            return { ...result._doc, _id: result.id, education: educationInfo.bind(this, result._doc.educationId) };
        } catch (err) {
            throw err;
        }
    },

    //graduation
    graduation : async args => {
        try{
            const study = await Graduation.findById(args.graduationId);
            return{ ... study._doc, _id: study._doc._id.toString(),
                education: educationInfo.bind(this, study._doc.educationId)};
        }
        catch( err )
        {
            throw err;
        }
        
    },

    CreateGraduation : async args =>{
        const graduation = new Graduation({
            graduationCollegeName: args.graduationInput.graduationCollegeName,
            graduationCollegeGrade: +args.graduationInput.graduationCollegeGrade,
            graduationUniversity: args.graduationInput.graduationUniversity,
            graduationCourse: args.graduationInput.graduationCourse,
            graduationStream: args.graduationInput.graduationStream,
            graduationYear: +args.graduationInput.graduationYear,
            educationId: args.graduationInput.study
        });
        try {
            const result = await graduation.save();
            const educate = await Education.findById(result._doc.educationId);
            educate.graduationId = result._doc._id.toString();
            await educate.save();
            return { ...result._doc, _id: result.id, education: educationInfo.bind(this, result._doc.educationId) };
        } catch (err) {
            throw err;
        }
    },

    //education
    education : async () => {
        try {
            const educate = await Education.find();
            return educate.map( result => {
                return { ...result._doc, _id: result._doc._id.toString(),
                    school: schoolInfo.bind(this,result._doc.schoolId),
                    college: collegeInfo.bind(this,result._doc.collegeId),
                    graduation: graduationInfo.bind(this,result._doc.graduationId),
                    profile: profileInfo.bind(this,result._doc.profileId)
                };
            });
        } catch (err) {
            throw err;
        }
    },

    CreateEducation : async args =>{
        const education = new Education({
            schoolId: null,
            collegeId: null,
            graduationId: null,
            profileId: args.educationInput.profileId
        });
        try {
            const result = await education.save();
            const profile = await Profile.findById(result._doc.profileId);
            profile.educationId = result.id;
            await profile.save();
            const retEducation = {
                ...result._doc,
                _id: result._doc._id.toString(),
                school : schoolInfo.bind(this, result._doc.schoolId),
                college : collegeInfo.bind(this, result._doc.collegeId),
                graduation : graduationInfo.bind(this, result._doc.graduationId),
                profile: profileInfo.bind(this,result._doc.profileId)
            };
            return retEducation;
        } catch (err) {
            throw err;
        }
    }
};