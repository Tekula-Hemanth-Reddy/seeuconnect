const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    pinCode: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Address', AddressSchema);
