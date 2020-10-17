const AdditionalDetails = require('../../models/additionalDetails');
const Profile = require('../../models/profile');
const { profileInfo } = require('./_merge');

module.exports = {
    //additionalDetails
    detailsAdditional : async () =>{
        try {
            const additional = await AdditionalDetails.find();
            return additional.map(result => {
                return { ...result._doc, _id: result._doc._id.toString(),
                    profile: profileInfo.bind(this,result._doc.profileId)
                };
            });
        } catch (err) {
            throw err;
        }
    },

    CreateAdditionalDetails : async args =>{
        const additional = new AdditionalDetails({
            detailsDescription: args.additionalDetailsInput.detailsDescription,
            profileId: args.additionalDetailsInput.profileId
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