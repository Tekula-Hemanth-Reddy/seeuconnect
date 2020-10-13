const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SkillSchema = new Schema({
    skill: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Skill', SkillSchema);
