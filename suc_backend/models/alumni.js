const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlumniSchema = new Schema({
    companyName: {
        type: String,
        required: false
    },
    domain: {
        type: String,
        required: false
    },
    platform: {
        type: String,
        required: false
    },
    profileId : {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

module.exports = mongoose.model('Alumni', AlumniSchema);
