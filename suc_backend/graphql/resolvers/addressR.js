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

    CreateAddress : async (args) => {
        try {
        const pId = await User.findById(args.userId);
        const address = new Address({
            state: null,
            city: null,
            location: null,
            pinCode: null,
            profileId: pId.profileId
        });
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
    },

    UpdateAddress : async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        try {
        const pId = await User.findById(req.userId);
        const profile = await Profile.findById(pId.profileId);
        const place = await Address.findById(profile.addressId);

            place.state= ""+args.addressInput.state;
            place.city= ""+args.addressInput.city;
            place.location= ""+args.addressInput.location;
            place.pinCode= ""+args.addressInput.pinCode;

            const result = await place.save();
            return {...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId)
                };
        } catch (err) {
            throw err;
        }
    }
};