const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CollegeSchema = new Schema({
    collegeName : {
        type: String
    },
    collegeGrade : {
        type: Number
    },
    collegeCourse : {
        type: String
    },
    collegeBoard : {
        type: String
    },
    collegeYear : {
        type: Number
    },
    educationId : {
        type: Schema.Types.ObjectId,
        ref: "Education"
    }
});

module.exports = mongoose.model('College', CollegeSchema);