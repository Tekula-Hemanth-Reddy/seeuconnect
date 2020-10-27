const Alumni = require('../../models/alumni');

module.exports = {
    //alumni
    jobGivers : async () =>{
        try {
            const information = await Alumni.find();
            return information.map(result => {
                return { ...result._doc, _id: result.id };
            });
        } catch (err) {
            throw err;
        }
    },

    CreateAlumni : async args => {
        const information = new Alumni({
            companyName: args.alumniInput.companyName,
            domain: args.alumniInput.domain,
            platform: args.alumniInput.platform
        });
        try {
            const result = await information.save();
            return { ...result._doc, _id: result.id };
        } catch (err) {
            throw err;
        }
    }
};