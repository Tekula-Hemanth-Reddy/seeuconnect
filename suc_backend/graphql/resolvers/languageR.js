const Language = require('../../models/language');
const Profile = require('../../models/profile');
const { profileInfo } = require('./_merge');

module.exports = {
    //language
    languages : async () => {
        try {
            const languages = await Language.find();
            return languages.map(result => {
                return { ...result._doc, _id: result._doc._id.toString(),
                    profile: profileInfo.bind(this,result._doc.profileId)
                };
            });
        } catch (err) {
            throw err;
        }
    },

    CreateLanguage : async args => {
        const voice = new Language({
            language: args.languageInput.language,
            profileId: args.languageInput.profileId
        });
        try {
            const result = await voice.save();
            const profile = await Profile.findById(result._doc.profileId);
            profile.languageId.push(result.id);
            await profile.save();
            return { ...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId)
            };
        } catch (err) {
            throw err;
        }
    }
};