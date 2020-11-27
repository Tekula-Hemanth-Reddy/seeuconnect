const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LanguageSchema = new Schema({
    language: {
        type: String
    },
    profileId: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

module.exports = mongoose.model('Language', LanguageSchema);
