const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GraduationSchema = new Schema({
    graduationCollegeName : {
        type: String,
        required: true
    },
    graduationCollegeGrade : {
        type: Number,
        required: true
    },
    graduationUniversity : {
        type: String,
        required: true
    },
    graduationCourse : {
        type: String,
        required: true
    },
    graduationStream : {
        type: String,
        required: true
    },
    graduationYear : {
        type: Number,
        required: true
    },
    educationId : {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Education"
    }
});

module.exports = mongoose.model('Graduation', GraduationSchema);