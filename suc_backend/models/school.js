const mongoose = require('mongoose');
const education = require('./education');

const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
    schoolName : {
        type: String,
        required: true
    },
    schoolGrade : {
        type: Number,
        required: true
    },
    schoolBoard : {
        type: String,
        required: true
    },
    schoolYear : {
        type: Number,
        required: true
    },
    educationId : {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Education"
    }
});

module.exports = mongoose.model('School', SchoolSchema);