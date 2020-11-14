const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlumniSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    personPhone: {
        type: String,
        required: false
    },
    personMail: {
        type: String,
        required: false
    },
    companyName: {
        type: String,
        required: false
    },
    companyPhone: {
        type: String,
        required: false
    },
    companyMail: {
        type: String,
        required: false
    },
    companyAddress: {
        type: String,
        required: false
    },
    companyWebsite: {
        type: String,
        required: false
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model('Alumni', AlumniSchema);
