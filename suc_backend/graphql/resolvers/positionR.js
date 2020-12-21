const Position = require('../../models/position');
const Profile = require('../../models/profile');
const User = require('../../models/users');
const { profileInfo } = require('./_merge');

module.exports = {
    //Position
    positions : async () => {
        // if (!req.isAuth) {
        //     throw new Error("Unauthenticated");
        // }
        // const pId = await User.findById(req.userId);
        try {
            const stand = await Position.find();
            // const stand = await Position.find({profileId: {$in: pId.profileId}});
            return stand.map(result => {
                return { ...result._doc, _id: result._doc._id.toString(),
                    startDate: new Date(result._doc.startDate).toISOString().split("T")[0],
                    endDate: new Date(result._doc.endDate).toISOString().split("T")[0],
                    profile: profileInfo.bind(this,result._doc.profileId)
                };
            });
        } catch (err) {
            throw err;
        }
    },

    CreatePosition : async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        const pId = await User.findById(req.userId);
        const userPosition = await Position.findOne({ $and: [ { profileId: pId.profileId }, {positionHeld: args.positionInput.positionHeld}, {companyName: args.positionInput.companyName} ] });
        if(userPosition){
            userPosition.positionDescription= args.positionInput.positionDescription;
            userPosition.startDate= new Date(args.positionInput.startDate);
            userPosition.endDate= new Date(args.positionInput.endDate);
            try {
                const result = await userPosition.save();
                return { ...result._doc, _id: result._doc._id.toString(),
                    startDate: new Date(result._doc.startDate).toISOString().split("T")[0],
                    endDate: new Date(result._doc.endDate).toISOString().split("T")[0],
                    profile: profileInfo.bind(this,result._doc.profileId)
                };
            } catch (err) {
                throw err;
            }
        }
        else{
            const stand = new Position({
                positionHeld: args.positionInput.positionHeld,
                companyName: args.positionInput.companyName,
                positionDescription: args.positionInput.positionDescription,
                startDate: new Date(args.positionInput.startDate),
                endDate: new Date(args.positionInput.endDate),//TODO : need to accept null value
                profileId: pId.profileId
            });
            try {
                const result = await stand.save();
                const profile = await Profile.findById(result._doc.profileId);
                profile.positionId.push(result.id);
                await profile.save();
                return { ...result._doc, _id: result._doc._id.toString(),
                    startDate: new Date(result._doc.startDate).toISOString().split("T")[0],
                    endDate: new Date(result._doc.endDate).toISOString().split("T")[0],
                    profile: profileInfo.bind(this,result._doc.profileId)
                };
            } catch (err) {
                throw err;
            }
        }
    },
    DeletePosition : async args =>{
        try {
            const stand = await Position.findById(args.positionId);
            await Position.deleteOne({_id: args.positionId});
            return { ...stand._doc, _id: stand._doc._id.toString(),
                startDate: new Date(result._doc.startDate).toISOString().split("T")[0],
                endDate: new Date(result._doc.endDate).toISOString().toISOString().split("T")[0]};
        } catch (err) {
            throw err;
        }
    }
};