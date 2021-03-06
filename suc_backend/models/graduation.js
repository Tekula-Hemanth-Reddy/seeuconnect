const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GraduationSchema = new Schema({
    graduationCollegeName : {
        type: String
    },
    graduationCollegeGrade : {
        type: String
    },
    graduationUniversity : {
        type: String
    },
    graduationCourse : {
        type: String
    },
    graduationStream : {
        type: String
    },
    graduationStartYear : {
        type: Number
    },
    graduationEndYear : {
        type: Number
    },
    educationId : {
        type: Schema.Types.ObjectId,
        ref: "Education"
    }
});

module.exports = mongoose.model('Graduation', GraduationSchema);