const Skill = require('../../models/skill');
const Profile = require('../../models/profile');
const { profileInfo } = require('./_merge');

module.exports = {
    //skills
    skills : async () => {
        try {
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

    CreateSkill : async args => {
        const ability = new Skill({
            skill: args.skillInput.skill,
            rating: args.skillInput.rating,
            profileId: args.skillInput.profileId
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