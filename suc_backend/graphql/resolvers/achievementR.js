const Achievement = require('../../models/achievement');
const Profile = require('../../models/profile');
const User = require('../../models/users');
const { profileInfo } = require('./_merge');

module.exports = {
    //Achievement
    achievements : async () => {
        // if (!req.isAuth) {
        //     throw new Error("Unauthenticated");
        // }
        // const pId = await User.findById(req.userId);
        try {
            const jobsDone = await Achievement.find();
            // const jobsDone = await Achievement.find({profileId: {$in: pId.profileId}});
            return jobsDone.map(result => {
                return { ...result._doc, _id: result._doc._id.toString(),
                    profile: profileInfo.bind(this,result._doc.profileId)
            };
            });
        } catch (err) {
            throw err;
        }
    },

    CreateAchievement : async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        const pId = await User.findById(req.userId);
        const userAchievement = await Achievement.findOne({ $and: [ { profileId: pId.profileId }, {title: args.achievementInput.title} ] });
        if(userAchievement){
            userAchievement.achievementDescription= args.achievementInput.achievementDescription;
            userAchievement.certificate= args.achievementInput.certificate;
            try {
                const result = await userAchievement.save();
                return { ...result._doc, _id: result._doc._id.toString(),
                    profile: profileInfo.bind(this,result._doc.profileId)
                };
            } catch (err) {
                throw err;
            }
        }
        else{
            const jobsDone = new Achievement({
                title: args.achievementInput.title,
                achievementDescription: args.achievementInput.achievementDescription,
                certificate: args.achievementInput.certificate,
                profileId: pId.profileId
            });
            try {
                const result = await jobsDone.save();
                const profile = await Profile.findById(result._doc.profileId);
                profile.achievementId.push(result.id);
                await profile.save();
                return { ...result._doc, _id: result._doc._id.toString(),
                    profile: profileInfo.bind(this,result._doc.profileId)
                };
            } catch (err) {
                throw err;
            }
        }
    },
    DeleteAchievement : async args =>{
        try {
            const result = await Achievement.findById(args.achievementId);
            await Achievement.deleteOne({_id: args.achievementId});
            return { ...result._doc, _id: result._doc._id.toString()};
        } catch (err) {
            throw err;
        }
    }
};