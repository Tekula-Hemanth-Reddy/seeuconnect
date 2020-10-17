const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SkillSchema = new Schema({
    skill: {
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    profileId:{
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

module.exports = mongoose.model('Skill', SkillSchema);
