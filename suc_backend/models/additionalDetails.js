const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdditionalDetailsSchema = new Schema({
    detailsDescription: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('AdditionalDetails', AdditionalDetailsSchema);
