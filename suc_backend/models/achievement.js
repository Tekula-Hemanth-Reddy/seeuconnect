const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AchievementSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    achievementDescription: {
        type: String,
        required: false
    },
    certificate: {
        type: String,
        required: false
    },
    profileId: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

module.exports = mongoose.model('Achievement', AchievementSchema);
