const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EducationSchema = new Schema({
    schoolId : {
        type: Schema.Types.ObjectId,
        ref: 'School'
    },
    collegeId : {
        type: Schema.Types.ObjectId,
        ref: 'College'
    },
    graduationId : {
        type: Schema.Types.ObjectId,
        ref: 'Graduation'
    },
    profileId : {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
});

module.exports = mongoose.model('Education', EducationSchema);
