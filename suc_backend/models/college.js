const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CollegeSchema = new Schema({
    collegeName : {
        type: String,
        required: true
    },
    collegeGrade : {
        type: Number,
        required: true
    },
    collegeCourse : {
        type: String,
        required: true
    },
    collegeBoard : {
        type: String,
        required: true
    },
    collegeYear : {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('College', CollegeSchema);