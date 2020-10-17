const Course = require('../../models/course');
const Profile = require('../../models/profile');
const { profileInfo } = require('./_merge');

module.exports = {
    //courses
    courses : async () =>{
        try {
            const study = await Course.find();
            return study.map(result => {
                return { ...result._doc, _id: result._doc._id.toString(),
                    profile: profileInfo.bind(this,result._doc.profileId)
                };
            });
        } catch (err) {
            throw err;
        }
    },

    CreateCourse : async args => {
        const study = new Course({
            courseName: args.courseInput.courseName,
            specialization: args.courseInput.specialization,
            certificate: args.courseInput.certificate,
            credentials: args.courseInput.credentials,
            profileId: args.courseInput.profileId
        });
        try {
            const result = await study.save();
            const profile = await Profile.findById(result._doc.profileId);
            profile.courseId.push(result.id);
            await profile.save();
            return { ...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId)
            };
        } catch (err) {
            throw err;
        }
    }
};