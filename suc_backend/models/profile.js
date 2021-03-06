const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    name: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String
    },
    photo: {
        type: String
    },
    portFolio: {
        type: String
    },
    status: {
        type: Boolean,
    },
    interestedIntern: {
        type: Boolean,
    },
    strength: {
        type: Number,
    },
    addressId: {
        type: Schema.Types.ObjectId,
        ref: "Address"
    },
    educationId: {
        type: Schema.Types.ObjectId,
        ref: "Education"
    },
    skillId: [
        {
            type: Schema.Types.ObjectId,
            ref: "Skill"
        }
    ],
    projectId: [
        {
            type: Schema.Types.ObjectId,
            ref: "Project"
        }
    ],
    positionId: [
        {
            type: Schema.Types.ObjectId,
            ref: "Position"
        }
    ],
    courseId: [
        {
            type: Schema.Types.ObjectId,
            ref: "Course"
        }
    ],
    languageId: [
        {
            type: Schema.Types.ObjectId,
            ref: "Language"
        }
    ],
    achievementId: [
        {
            type: Schema.Types.ObjectId,
            ref: "Achievement"
        }
    ],
    additionalId: [
        {
            type: Schema.Types.ObjectId,
            ref: "AdditionalDetails"
        }
    ],
    reachOutId: {
        type: Schema.Types.ObjectId,
        ref: "ReachOut"
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model('Profile', ProfileSchema);
