const Language = require('../../models/language');
const Profile = require('../../models/profile');
const User = require('../../models/users');
const { profileInfo } = require('./_merge');

module.exports = {
    //language
    languages : async () => {
        // if (!req.isAuth) {
        //     throw new Error("Unauthenticated");
        // }
        // const pId = await User.findById(req.userId);
        try {
            // const languages = await Language.find({profileId: {$in: pId.profileId}});
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

    CreateLanguage : async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        const pId = await User.findById(req.userId);
        const voice = new Language({
            language: args.languageInput.language,
            profileId: pId.profileId
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
    },
    DeleteLanguage : async args =>{
        try {
            const result = await Language.findById(args.languageId);
            await Language.deleteOne({_id: args.languageId});
            return { ...result._doc, _id: result._doc._id.toString()};
        } catch (err) {
            throw err;
        }
    }
};