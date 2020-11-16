const Profile = require('../../models/profile');
const User = require('../../models/users');
const Address = require('../../models/address');
const { userInfo, educationInfo, reachOutInfo, additionalInfo, achievementInfo, languageInfo, courseInfo, projectInfo, positionInfo, skillInfo, addressInfo } = require('./_merge');

module.exports = {
    profile : async () =>{
        // console.log(req);
        // if (!req.isAuth) {
        //     throw new Error("Unauthenticated");
        // }
        // const user = await User.findById(req.userId);
        try {
            // const result = await Profile.findById(user.profileId);
            const profile = await Profile.find();
            return profile.map(result =>{
            return { ...result._doc, _id: result._doc._id.toString(),
                addresses: addressInfo.bind(this,result._doc._id.toString()),
                skills: skillInfo.bind(this,result._doc._id.toString()),
                positions: positionInfo.bind(this,result._doc._id.toString()),
                projects: projectInfo.bind(this,result._doc._id.toString()),
                courses: courseInfo.bind(this,result._doc._id.toString()),
                languages: languageInfo.bind(this,result._doc._id.toString()),
                achievements: achievementInfo.bind(this,result._doc._id.toString()),
                detailsAdditional: additionalInfo.bind(this,result._doc._id.toString()),
                reachOuts: reachOutInfo.bind(this,result._doc._id.toString()),
                education: educationInfo.bind(this,result._doc._id.toString()),
                users: userInfo.bind(this,result._doc.userId)
            };
        });
        } catch (err) {
            throw err;
        }
    },
    CreateProfile : async (args) => {
        try {
        const user = await User.findById(args.userId);
        const information = new Profile({
            about: null,
            phoneNumber: null,
            photo: null,
            portFolio: null,
            email: user.email,
            status: false,
            interestedIntern: null,
            strength: null,
            addressId: null,
            educationId: null,
            skillId: [],
            projectId: [],
            positionId: [],
            courseId: [],
            languageId: [],
            achievementId: [],
            additionalId: [],
            reachOutId: null,
            userId: args.userId
        });
            const result = await information.save();
            user.profileId = result.id;
            await user.save();
            return { ...result._doc, _id: result._doc._id.toString(),
                addresses: addressInfo.bind(this,result._doc._id.toString()),
                skills: skillInfo.bind(this,result._doc._id.toString()),
                positions: positionInfo.bind(this,result._doc._id.toString()),
                projects: projectInfo.bind(this,result._doc._id.toString()),
                courses: courseInfo.bind(this,result._doc._id.toString()),
                languages: languageInfo.bind(this,result._doc._id.toString()),
                achievements: achievementInfo.bind(this,result._doc._id.toString()),
                detailsAdditional: additionalInfo.bind(this,result._doc._id.toString()),
                reachOuts: reachOutInfo.bind(this,result._doc._id.toString()),
                education: educationInfo.bind(this,result._doc._id.toString()),
                users: userInfo.bind(this,result._doc.userId)
            };
        } catch (err) {
            throw err;
        }
    },
    UpdateProfile : async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        try{
        const user = await User.findById(req.userId);
        const result = await Profile.findById(user._doc.profileId);
            result.name= ""+args.profileInput.name;
            result.phoneNumber= ""+args.profileInput.phoneNumber;
            result.photo= null;
            result.portFolio= ""+args.profileInput.portFolio;
            result.interestedIntern= args.profileInput.interestedIntern;
            result.strength= 10;

            await result.save();

            const address = await Address.find(result.addressId);
            address.state= ""+args.profileInput.state;
            address.city= ""+args.profileInput.city;
            address.location= ""+args.profileInput.location;
            address.pinCode= ""+args.profileInput.pinCode;

            await address.save();

            return { ...result._doc, _id: result._doc._id.toString(),
                addresses: addressInfo.bind(this,result._doc._id.toString()),
                skills: skillInfo.bind(this,result._doc._id.toString()),
                positions: positionInfo.bind(this,result._doc._id.toString()),
                projects: projectInfo.bind(this,result._doc._id.toString()),
                courses: courseInfo.bind(this,result._doc._id.toString()),
                languages: languageInfo.bind(this,result._doc._id.toString()),
                achievements: achievementInfo.bind(this,result._doc._id.toString()),
                detailsAdditional: additionalInfo.bind(this,result._doc._id.toString()),
                reachOuts: reachOutInfo.bind(this,result._doc._id.toString()),
                education: educationInfo.bind(this,result._doc._id.toString()),
                users: userInfo.bind(this,result._doc.userId)
            };
        } catch (err) {
            throw err;
        }
    }
};