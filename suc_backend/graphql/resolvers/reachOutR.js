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

    CreateReachOut : async (args) => {
        try {
        const pId = await User.findById(args.userId);
        const contact = new ReachOut({
            gitHub: null,
            linkedIn: null,
            instagram: null,
            faceBook: null,
            twitter: null,
            profileId: pId.profileId
        });
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
    },

    UpdateReachOut : async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        try {
        const pId = await User.findById(req.userId);
        const profile = await Profile.findById(pId.profileId);
        const contact = await ReachOut.findById(profile.reachOutId);
            contact.gitHub= args.reachOutInput.gitHub;
            contact.linkedIn= args.reachOutInput.linkedIn;
            contact.instagram= args.reachOutInput.instagram;
            contact.faceBook= args.reachOutInput.faceBook;
            contact.twitter= args.reachOutInput.twitter;
            const result = await contact.save();
            return {...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId)
                };
        } catch (err) {
            throw err;
        }
    }
};