const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/users');
const { profileInfo, alumniInfo } = require('./_merge');

module.exports = {

    //users login
    users: async (args) => {
        try {
            const result = await User.findById(args.userId);
            return {...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId),
                alumni: alumniInfo.bind(this,result._doc.alumniId)
            };
        } catch (err) {
            throw new Error("No Users");
        }
    },

    CreateUser: async args => {
        try {
            const user = await User.findOne({ email: args.userInput.email });
            //to find user already exist or not
            if (user) {
                throw new Error('user exist already');
            }
            const hashedPassword = await bcrypt.hash(args.userInput.password, 15);
            const user_1 = new User({
                name: args.userInput.name,
                email: args.userInput.email,
                password: hashedPassword,
                userType: args.userInput.userType,
                profileId: null,
                alumniId: null
            });
            const result = await user_1.save();
            return {...result._doc, _id: result._doc._id.toString(),
                profile: profileInfo.bind(this,result._doc.profileId),
                alumni: alumniInfo.bind(this,result._doc.alumniId)
            };
        } catch (err) {
            throw err;
        }
    },

    login: async ({email,password}) => {
        const user = await User.findOne({email: email});
        if(!user)
        {
            throw new Error('User does not exist');
        }
        const isEqual = await bcrypt.compare(password, user.password);
        if(!isEqual)
        {
            throw new Error('password is incorrect');
        }
        const token = jwt.sign({userId: user.id, profileId: user.profileId}, 'sucSuperPrivateKey', {expiresIn: '1h'});
        return{ userId: user.id, token: token,userType: user.userType, tokenExpiration: 1};
    }
};