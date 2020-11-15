const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    state: {
        type: String
    },
    city: {
        type: String
    },
    location: {
        type: String
    },
    pinCode: {
        type: Number
    },
    profileId: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

module.exports = mongoose.model('Address', AddressSchema);
