const mongoose = require('mongoose');
const college = require('./college');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true
    },
    profileId: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    },
    alumniId: {
        type: Schema.Types.ObjectId,
        ref: "Alumni"
    }
});

module.exports = mongoose.model('User', UserSchema);
