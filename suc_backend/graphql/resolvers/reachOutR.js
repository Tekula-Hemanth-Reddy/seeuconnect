const ReachOut = require('../../models/reachOut');
const Profile = require('../../models/profile');
const { profileInfo } = require('./_merge');

module.exports = {
    //reachOut
    reachOuts : async () => {
        try {
            const contact = await ReachOut.find();
            return contact.map( result => {
                return {...result[0]._doc, _id: result[0]._doc._id.toString(),
                    profile: profileInfo.bind(this,result[0]._doc.profileId)
                    };
            });
        } catch (err) {
            throw err;
        }
    },

    CreateReachOut : async args => {
        const contact = new ReachOut({
            gitHub: args.reachOutInput.gitHub,
            linkedIn: args.reachOutInput.linkedIn,
            instagram: args.reachOutInput.instagram,
            faceBook: args.reachOutInput.faceBook,
            twitter: args.reachOutInput.twitter,
            profileId: args.reachOutInput.profileId
        });
        try {
            const result = await contact.save();
            const profile = await Profile.findById(result._doc.profileId);
            profile.reachOutId = result.id;
            await profile.save();
            return {...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId)
                };
        } catch (err) {
            throw err;
        }
    }
};