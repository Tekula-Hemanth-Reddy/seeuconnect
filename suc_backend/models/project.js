const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
        required: true
    },
    projectUrl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Project', ProjectSchema);
