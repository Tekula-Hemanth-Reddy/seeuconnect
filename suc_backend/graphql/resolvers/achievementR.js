const Achievement = require('../../models/achievement');
const Profile = require('../../models/profile');
const { profileInfo } = require('./_merge');

module.exports = {
    //Achievement
    achievements : async () =>{
        try {
            const jobsDone = await Achievement.find();
            return jobsDone.map(result => {
                return { ...result._doc, _id: result._doc._id.toString(),
                    profile: profileInfo.bind(this,result._doc.profileId)
            };
            });
        } catch (err) {
            throw err;
        }
    },

    CreateAchievement : async args => {
        const jobsDone = new Achievement({
            title: args.achievementInput.title,
            achievementDescription: args.achievementInput.achievementDescription,
            certificate: args.achievementInput.certificate,
            profileId: args.achievementInput.profileId
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
};