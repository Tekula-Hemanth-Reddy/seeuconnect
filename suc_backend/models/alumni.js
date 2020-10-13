const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlumniSchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Alumni', AlumniSchema);
