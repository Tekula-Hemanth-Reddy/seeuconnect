const Address = require('../../models/address');
const Profile = require('../../models/profile');
const User = require('../../models/users');
const { profileInfo } = require('./_merge');

module.exports = {
    //address
    addresses : async () => {
        // if (!req.isAuth) {
        //     throw new Error("Unauthenticated");
        // }
        // const uId = await User.findById(req.userId);
        // const pId = await User.findById(uId.profileId);
        try {
            // const result = await Address.findById(pId.addressId);
            const address = await Address.find();
            return address.map( result => {
                return {...result._doc, _id: result._doc._id.toString(),
                    profile: profileInfo.bind(this,result._doc.profileId)
                    };
            });
        } catch (err) {
            throw err;
        }
    },

    CreateAddress : async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        const pId = await User.findById(req.userId);
        const address = new Address({
            state: args.addressInput.state,
            city: args.addressInput.city,
            location: args.addressInput.location,
            pinCode: +args.addressInput.pinCode,
            profileId: pId.profileId
        });
        try {
            const result = await address.save();
            const profile = await Profile.findById(result._doc.profileId);
            profile.addressId = result.id;
            await profile.save();
            return {...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId)
                };
        } catch (err) {
            throw err;
        }
    }
};