const ReachOut = require('../../models/reachOut');
const Profile = require('../../models/profile');
const User = require('../../models/users');
const { profileInfo } = require('./_merge');

module.exports = {
    //reachOut
    reachOuts : async () => {
        // if (!req.isAuth) {
        //     throw new Error("Unauthenticated");
        // }
        // const uId = await User.findById(req.userId);
        // const pId = await User.findById(uId.profileId);
        try {
            // const result = await ReachOut.findById(pId.reachOutId);
            const contact = await ReachOut.find();
            return contact.map( result => {
                return {...result._doc, _id: result._doc._id.toString(),
                    profile: profileInfo.bind(this,result._doc.profileId)
                    };
            });
        } catch (err) {
            throw err;
        }
    },

    CreateReachOut : async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        const pId = await User.findById(req.userId);
        const contact = new ReachOut({
            gitHub: args.reachOutInput.gitHub,
            linkedIn: args.reachOutInput.linkedIn,
            instagram: args.reachOutInput.instagram,
            faceBook: args.reachOutInput.faceBook,
            twitter: args.reachOutInput.twitter,
            profileId: pId.profileId
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