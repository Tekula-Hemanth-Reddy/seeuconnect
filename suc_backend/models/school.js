const mongoose = require('mongoose');
const education = require('./education');

const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
    schoolName : {
        type: String
    },
    schoolGrade : {
        type: Number
    },
    schoolBoard : {
        type: String
    },
    schoolYear : {
        type: Number
    },
    educationId : {
        type: Schema.Types.ObjectId,
        ref: "Education"
    }
});

module.exports = mongoose.model('School', SchoolSchema);