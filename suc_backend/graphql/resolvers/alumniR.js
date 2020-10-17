const Alumni = require('../../models/alumni');

module.exports = {
    //alumni
    jobGivers : () =>{
        return Alumni.find()
        .then( information => {
            return information.map( result => {
                return { ...result._doc, _id:result.id };
            });
        }
        )
        .catch( err => {
            throw err;
        });
    },

    CreateAlumni : args => {
        const information = new Alumni({
            companyName: args.alumniInput.companyName,
            domain: args.alumniInput.domain,
            platform: args.alumniInput.platform
        });
        return information.save()
        .then(result => {
            return { ...result._doc, _id:result.id };
        })
        .catch(err => {
            throw err;
        });
    }
};