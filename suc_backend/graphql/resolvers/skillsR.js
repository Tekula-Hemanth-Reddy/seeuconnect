const Skill = require('../../models/skill');
const Profile = require('../../models/profile');
const User = require('../../models/users');
const { profileInfo } = require('./_merge');

module.exports = {
    //skills
    skills : async () => {
        // if (!req.isAuth) {
        //     throw new Error("Unauthenticated");
        // }
        // const pId = await User.findById(req.userId);
        try {
            // const skills = await Skill.find({profileId: {$in: pId.profileId}});
            const skills = await Skill.find();
            return skills.map(result => {
                return { ...result._doc, _id: result._doc._id.toString(),
                    profile: profileInfo.bind(this,result._doc.profileId)
                };
            });
        } catch (err) {
            throw err;
        }
    },

    CreateSkill : async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        const pId = await User.findById(req.userId);
        const ability = new Skill({
            skill: args.skillInput.skill,
            rating: args.skillInput.rating,
            profileId: pId.profileId
        });
        try {
            const result = await ability.save();
            const profile = await Profile.findById(result._doc.profileId);
            profile.skillId.push(result.id);
            await profile.save();
            return { ...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId)
            };
        } catch (err) {
            throw err;
        }
    }
};