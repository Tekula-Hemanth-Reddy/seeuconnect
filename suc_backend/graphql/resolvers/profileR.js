const Profile = require('../../models/profile');
const User = require('../../models/users');
const { userInfo, educationInfo, reachOutInfo, additionalInfo, achievementInfo, languageInfo, courseInfo, projectInfo, positionInfo, skillInfo, addressInfo } = require('./_merge');

module.exports = {
    profile : async () =>{
        try {
            // const result = await Profile.findById(args.profileId);
            const profile = await Profile.find();
            return profile.map(result =>{
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
        });
        } catch (err) {
            throw err;
        }
    },
    CreateProfile : async args => {
        const information = new Profile({
            about: args.profileInput.about,
            phoneNumber: args.profileInput.phoneNumber,
            photo: args.profileInput.photo,
            portFolio: args.profileInput.portFolio,
            status: args.profileInput.status,
            interestedIntern: args.profileInput.interestedIntern,
            strength: 10,
            addressId: null,
            educationId: null,
            skillId: [],
            projectId: [],
            positionId: [],
            courseId: [],
            languageId: [],
            achievementId: [],
            additionalId: [],
            reachOutId: null,
            userId: args.profileInput.userId
        });
        try {
            const result = await information.save();
            const user = await User.findById(result._doc.userId);
            user.projectId = result.id;
            await user.save();
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
    }
};