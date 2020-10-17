const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    courseName: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: false
    },
    certificate: {
        type: String,
        required: true
    },
    credentials: {
        type: String,
        requiredPaths: true
    },
    profileId: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

module.exports = mongoose.model('Course', CourseSchema);
