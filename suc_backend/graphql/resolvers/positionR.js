const Position = require('../../models/position');
const Profile = require('../../models/profile');
const { profileInfo } = require('./_merge');

module.exports = {
    //Position
    positions : async () =>{
        try {
            const stand = await Position.find();
            return stand.map(result => {
                return { ...result._doc, _id: result._doc._id.toString(),
                    profile: profileInfo.bind(this,result._doc.profileId)
                };
            });
        } catch (err) {
            throw err;
        }
    },

    CreatePosition : async args => {
        const stand = new Position({
            positionHeld: args.positionInput.positionHeld,
            companyName: args.positionInput.companyName,
            positionDescription: args.positionInput.positionDescription,
            startDate: new Date(args.positionInput.startDate),
            endDate: new Date(args.positionInput.endDate),//TODO : need to accept null value
            profileId: args.positionInput.profileId
        });
        try {
            const result = await stand.save();
            const profile = await Profile.findById(result._doc.profileId);
            profile.positionId.push(result.id);
            await profile.save();
            return { ...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId)
            };
        } catch (err) {
            throw err;
        }
    }
};