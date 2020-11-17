const School = require('../../models/school');
const College = require('../../models/college');
const Graduation = require('../../models/graduation');
const Education = require('../../models/education');
const Profile = require('../../models/profile');
const User = require('../../models/users');

const { educationInfo, schoolInfo, collegeInfo, graduationInfo, profileInfo, infoEducation } = require('./_merge');

module.exports = {
    //school
    school : async () => {
        try{
            const study = await School.find();
            return study.map( result => {
                return{ ... result._doc, _id: result._doc._id.toString(),
                    education: infoEducation(result._doc.educationId)};
            });
        }
        catch( err )
        {
            throw err;
        }
    },

    CreateSchool : async args =>{
        try {
        const pId = await User.findById(args.userId);
        const profile = await Profile.findById(pId.profileId);
        const school = new School({
            schoolName: null,
            schoolGrade: null,
            schoolBoard: null,
            schoolYear: null,
            educationId: profile.educationId
        });
            const result = await school.save();
            const educate = await Education.findById(profile.educationId);
            educate.schoolId = result._doc._id.toString();
            await educate.save();
            return { ...result._doc, _id: result.id, education: infoEducation(result._doc.educationId) };
        } catch (err) {
            throw err;
        }
    },
    UpdateSchool : async (args,req) =>{
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        try {
        const pId = await User.findById(req.userId);
        const profile = await Profile.findById(pId.profileId);
        const educate = await Education.findById(profile.educationId);
        const school = await School.findById(educate.schoolId);
            school.schoolName= args.schoolInput.schoolName;
            school.schoolGrade= args.schoolInput.schoolGrade;
            school.schoolBoard= args.schoolInput.schoolBoard;
            school.schoolYear= +args.schoolInput.schoolYear;
            const result = await school.save();
            return { ...result._doc, _id: result.id, education: infoEducation(result._doc.educationId) };
        } catch (err) {
            throw err;
        }
    },

    //college
    college : async () => {
        try{
            const study = await College.find();
            return study.map( result => {
                return{ ... result._doc, _id: result._doc._id.toString(),
                    education: infoEducation(result._doc.educationId)};
            });
        }
        catch( err )
        {
            throw err;
        }
    },

    CreateCollege : async args =>{
        try {
            const pId = await User.findById(args.userId);
            const profile = await Profile.findById(pId.profileId);
            const college = new College({
            collegeName: null,
            collegeGrade: null,
            collegeCourse: null,
            collegeBoard: null,
            collegeYear: null,
            educationId: profile.educationId
        });
            const result = await college.save();
            const educate = await Education.findById(result._doc.educationId);
            educate.collegeId = result._doc._id.toString();
            await educate.save();
            return { ...result._doc, _id: result.id, education: infoEducation(result._doc.educationId) };
        } catch (err) {
            throw err;
        }
    },

    UpdateCollege : async (args,req) =>{
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        try {
        const pId = await User.findById(req.userId);
        const profile = await Profile.findById(pId.profileId);
        const educate = await Education.findById(profile.educationId);
        const college = await College.findById(educate.collegeId);
            college.collegeName= args.collegeInput.collegeName;
            college.collegeGrade= args.collegeInput.collegeGrade;
            college.collegeCourse= args.collegeInput.collegeCourse;
            college.collegeBoard= args.collegeInput.collegeBoard;
            college.collegeYear= +args.collegeInput.collegeYear;

            const result = await college.save();
            return { ...result._doc, _id: result.id, education: infoEducation(result._doc.educationId) };
        } catch (err) {
            throw err;
        }
    },

    //graduation
    graduation : async () => {
        try{
            const study = await Graduation.find();
            return study.map( result => {
                return{ ... result._doc, _id: result._doc._id.toString(),
                    education: infoEducation(result._doc.educationId)};
            });
        }
        catch( err )
        {
            throw err;
        }
        
    },

    CreateGraduation : async args =>{
        try {
            const pId = await User.findById(args.userId);
            const profile = await Profile.findById(pId.profileId);
            const graduation = new Graduation({
                graduationCollegeName: null,
                graduationCollegeGrade: null,
                graduationUniversity: null,
                graduationCourse: null,
                graduationStream: null,
                graduationStartYear: null,
                graduationEndYear: null,
                educationId: profile.educationId
            });
            const result = await graduation.save();
            const educate = await Education.findById(result._doc.educationId);
            educate.graduationId = result._doc._id.toString();
            await educate.save();
            return { ...result._doc, _id: result.id, education: infoEducation(result._doc.educationId) };
        } catch (err) {
            throw err;
        }
    },

    UpdateGraduation : async (args,req) =>{
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        try {
        const pId = await User.findById(req.userId);
        const profile = await Profile.findById(pId.profileId);
        const educate = await Education.findById(profile.educationId);
        const graduation = await Graduation.findById(educate.graduationId);

            graduation.graduationCollegeName= args.graduationInput.graduationCollegeName;
            graduation.graduationCollegeGrade= args.graduationInput.graduationCollegeGrade;
            graduation.graduationUniversity= args.graduationInput.graduationUniversity;
            graduation.graduationCourse= args.graduationInput.graduationCourse;
            graduation.graduationStream= args.graduationInput.graduationStream;
            graduation.graduationStartYear= +args.graduationInput.graduationStartYear;
            graduation.graduationEndYear= +args.graduationInput.graduationEndYear;
        
            const result = await graduation.save();
            return { ...result._doc, _id: result.id, education: infoEducation(result._doc.educationId) };
        } catch (err) {
            throw err;
        }
    },

    //education
    education : async () => {
        // if (!req.isAuth) {
        //     throw new Error("Unauthenticated");
        // }
        // const uId = await User.findById(req.userId);
        // const pId = await User.findById(uId.profileId);
        try {
            const educate = await Education.find();
            // const result = await Education.findById(pId.educationId);
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

    CreateEducation : async (args) => {
        try {
        const pId = await User.findById(args.userId);
        const education = new Education({
            schoolId: null,
            collegeId: null,
            graduationId: null,
            profileId: pId.profileId
        });
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
    },

    UpdateEducation : async (args,req) =>{
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        try {
        const pId = await User.findById(req.userId);
        const profile = await Profile.findById(pId.profileId);
        const educate = await Education.findById(profile.educationId);

        const school = await School.findById(educate.schoolId);
            school.schoolName= args.educationInput.schoolName;
            school.schoolGrade= args.educationInput.schoolGrade;
            school.schoolBoard= args.educationInput.schoolBoard;
            school.schoolYear= +args.educationInput.schoolYear;
            await school.save();

        const college = await College.findById(educate.collegeId);
            college.collegeName= args.educationInput.collegeName;
            college.collegeGrade= args.educationInput.collegeGrade;
            college.collegeCourse= args.educationInput.collegeCourse;
            college.collegeBoard= args.educationInput.collegeBoard;
            college.collegeYear= +args.educationInput.collegeYear;

            await college.save();

        const graduation = await Graduation.findById(educate.graduationId);

            graduation.graduationCollegeName= args.educationInput.graduationCollegeName;
            graduation.graduationCollegeGrade= args.educationInput.graduationCollegeGrade;
            graduation.graduationUniversity= args.educationInput.graduationUniversity;
            graduation.graduationCourse= args.educationInput.graduationCourse;
            graduation.graduationStream= args.educationInput.graduationStream;
            graduation.graduationStartYear= +args.educationInput.graduationStartYear;
            graduation.graduationEndYear= +args.educationInput.graduationEndYear;
        
            await graduation.save();
            const retEducation = {
                ...educate._doc,
                _id: educate._doc._id.toString(),
                school : schoolInfo.bind(this, educate._doc.schoolId),
                college : collegeInfo.bind(this, educate._doc.collegeId),
                graduation : graduationInfo.bind(this, educate._doc.graduationId),
                profile: profileInfo.bind(this,educate._doc.profileId)
            };
            return retEducation;
        } catch (err) {
            throw err;
        }
    }
};