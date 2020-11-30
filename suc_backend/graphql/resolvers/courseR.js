const Course = require('../../models/course');
const Profile = require('../../models/profile');
const User = require('../../models/users');
const { profileInfo } = require('./_merge');

module.exports = {
    //courses
    courses : async () => {
        // if (!req.isAuth) {
        //     throw new Error("Unauthenticated");
        // }
        // const pId = await User.findById(req.userId);
        try {
            const study = await Course.find();
            // const study = await Course.find({profileId: {$in: pId.profileId}});
            return study.map(result => {
                return { ...result._doc, _id: result._doc._id.toString(),
                    profile: profileInfo.bind(this,result._doc.profileId)
                };
            });
        } catch (err) {
            throw err;
        }
    },

    CreateCourse : async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        const pId = await User.findById(req.userId);
        const userCourse = await Course.findOne({ $and: [ { profileId: pId.profileId }, {courseName: args.courseInput.courseName} ] });
        if(userCourse){
            userCourse.specialization= args.courseInput.specialization;
            userCourse.certificate= args.courseInput.certificate;
            userCourse.credentials= args.courseInput.credentials;
            try {
                const result = await userCourse.save();
                return { ...result._doc, _id: result._doc._id.toString(),
                    profile: profileInfo.bind(this,result._doc.profileId)
                };
            } catch (err) {
                throw err;
            }
        }
        else{
            const study = new Course({
                courseName: args.courseInput.courseName,
                specialization: args.courseInput.specialization,
                certificate: args.courseInput.certificate,
                credentials: args.courseInput.credentials,
                profileId: pId.profileId
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
    },
    DeleteCourse : async args =>{
        try {
            const result = await Course.findById(args.courseId);
            await Course.deleteOne({_id: args.courseId});
            return { ...result._doc, _id: result._doc._id.toString()};
        } catch (err) {
            throw err;
        }
    }
};