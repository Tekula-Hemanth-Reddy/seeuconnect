const AdditionalDetails = require('../../models/additionalDetails');
const Profile = require('../../models/profile');
const User = require('../../models/users');
const { profileInfo } = require('./_merge');

module.exports = {
    //additionalDetails
    detailsAdditional : async () => {
        // if (!req.isAuth) {
        //     throw new Error("Unauthenticated");
        // }
        // const pId = await User.findById(req.userId);
        try {
            const additional = await AdditionalDetails.find();
            // const additional = await AdditionalDetails.find({profileId: {$in: pId.profileId}});
            return additional.map(result => {
                return { ...result._doc, _id: result._doc._id.toString(),
                    profile: profileInfo.bind(this,result._doc.profileId)
                };
            });
        } catch (err) {
            throw err;
        }
    },

    CreateAdditionalDetails : async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        const pId = await User.findById(req.userId);
        const additional = new AdditionalDetails({
            detailsDescription: args.additionalDetailsInput.detailsDescription,
            profileId: pId.profileId
        });
        try {
            const result = await additional.save();
            const profile = await Profile.findById(result._doc.profileId);
            profile.additionalId.push(result.id);
            await profile.save();
            return { ...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId)
            };
        } catch (err) {
            throw err;
        }
    }
};