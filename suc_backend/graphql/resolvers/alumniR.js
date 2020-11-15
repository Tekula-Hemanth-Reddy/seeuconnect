const Alumni = require('../../models/alumni');
const User = require('../../models/users');
const { userInfo } = require('./_merge');


module.exports = {
    //alumni
    jobGivers : async (req) =>{
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        try {
            const result = await Alumni.find({userId: {$in: req.userId}});
            return { ...result._doc, _id: result._doc._id.toString(),
                users: userInfo.bind(this,result._doc.userId)
            };
        } catch (err) {
            throw err;
        }
    },

    CreateAlumni : async (args) => {
        try {
        const user = await User.findById(args.userId);
        const information = new Alumni({
            name: null,
            personPhone: null,
            personMail: user.email,
            companyName: null,
            companyPhone: null,
            companyMail: null,
            companyAddress: null,
            companyWebsite: null,
            userId: args.userId
            });
            const result = await information.save();
            user.alumniId = result.id;
            await user.save();
            return { ...result._doc, _id: result._doc._id.toString(),
                users: userInfo.bind(this,result._doc.userId)
            };
        } catch (err) {
            throw err;
        }
    },

    UpdateAlumni: async (args, req) =>{
        if (!req.isAuth) {
            throw new Error("Unauthenticated");
        }
        try{
        const user = await User.findById(req.userId);
        const alumniUser = await Alumni.findById(user._doc.alumniId);
        alumniUser.name = args.alumniInput.name,
        alumniUser.personPhone = args.alumniInput.personPhone,
        alumniUser.companyName = args.alumniInput.companyName,
        alumniUser.companyPhone = args.alumniInput.companyPhone,
        alumniUser.companyMail = args.alumniInput.companyMail,
        alumniUser.companyAddress = args.alumniInput.companyAddress,
        alumniUser.companyWebsite = args.alumniInput.companyWebsite
        await alumniUser.save();
        return { ...alumniUser._doc, _id: alumniUser._doc._id.toString(),
            users: userInfo.bind(this,alumniUser._doc.userId)
        };
        }
        catch (err) {
            throw err;
        }
    }
};