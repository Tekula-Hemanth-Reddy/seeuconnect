const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdditionalDetailsSchema = new Schema({
    detailsDescription: {
        type: String,
        required: true
    },
    profileId: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

module.exports = mongoose.model('AdditionalDetails', AdditionalDetailsSchema);
