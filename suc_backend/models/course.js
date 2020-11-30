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
        required: false
    },
    credentials: {
        type: String,
        requiredPaths: false
    },
    profileId: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

module.exports = mongoose.model('Course', CourseSchema);
