const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    courseName: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    certificate: {
        type: String,
        required: true
    },
    credentials: {
        type: String,
        requiredPaths: true
    }
});

module.exports = mongoose.model('Course', CourseSchema);
