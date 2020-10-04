const bcrypt = require('bcryptjs');

const User = require('../../models/users');
// const users = require('./models/users');

module.exports = {
    users: () => {
        return User.find()
        .then(users => {
            return users.map(
                user => {
                    return { ...user._doc, password:null, _id: user.id };
                }
            );
        })
        .catch(err => {
            throw new Error("No Users");
        })
    },
    CreateUser: args => {
        return User.findOne({email: args.userInput.email}).then( user => {
            //to find user already exit or not
            if(user)
            {
                throw new Error('user exist already');
            }
            return bcrypt.hash(args.userInput.password, 15);//for byCrypting the password to ensure security
        }).then(hashedPassword => {
            const user = new User({
                email: args.userInput.email,
                password: hashedPassword
            });
            return user.save();
        })
        .then(result => {
            return { ...result._doc, password:null, _id: result.id };
        })
        .catch(err => {
            throw err;
        });
    }
};