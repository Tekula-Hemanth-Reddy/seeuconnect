const mongoose = require('mongoose');

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
    }
});

module.exports = mongoose.model('School', SchoolSchema);