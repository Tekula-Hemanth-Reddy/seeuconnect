const Latest = require('../../models/latest');

module.exports = {
    //latest
    latest : async () => {
        try {
            const latest = await Latest.find();
            return latest.map(result => {
                return { ...result._doc, _id: result._doc._id.toString()};
            });
        } catch (err) {
            throw err;
        }
    },
    CreateLatest : async args =>{
        const latest = new Latest({
            title: args.latestInput.title,
            description: args.latestInput.description
        });
        try {
            const result = await latest.save();
            return { ...result._doc, _id: result.id};
        } catch (err) {
            throw err;
        }
    },
    DeleteLatest : async args =>{
        try {
            const latest = await Latest.findById(args.latestId);
            await Latest.deleteOne({_id: args.latestId});
            return { ...latest._doc, _id: latest._doc._id.toString()};
        } catch (err) {
            throw err;
        }
    }
};