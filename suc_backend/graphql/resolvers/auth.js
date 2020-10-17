const bcrypt = require('bcryptjs');
const User = require('../../models/users');
const { profileInfo } = require('./_merge');

module.exports = {

    //users login
    users: async () => {
        try {
            const users = await User.find();
            return users.map(
                user => {
                    return {...user._doc, _id: user._doc._id.toString(),
                        profile: profileInfo.bind(this,user._doc.profileId)
                    };
                }
            );
        } catch (err) {
            throw new Error("No Users");
        }
    },

    CreateUser: async args => {
        try {
            const user = await User.findOne({ email: args.userInput.email });
            //to find user already exit or not
            if (user) {
                throw new Error('user exist already');
            }
            const hashedPassword = await bcrypt.hash(args.userInput.password, 15);
            const user_1 = new User({
                firstName: args.userInput.firstName,
                lastName: args.userInput.lastName,
                email: args.userInput.email,
                password: hashedPassword,
                collegeSpecific: "VCE",
                profileId: null
            });
            const result = await user_1.save();
            return {...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId)
            };
        } catch (err) {
            throw err;
        }
    }
};