const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReachOutSchema = new Schema({
    gitHub: {
        type: String,
        required: false
    },
    linkedIn: {
        type: String,
        required: false
    },
    instagram: {
        type: String,
        required: false
    },
    faceBook: {
        type: String,
        required: false
    },
    twitter: {
        type: String,
        required: false
    },
    profileId: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

module.exports = mongoose.model('ReachOut', ReachOutSchema);
