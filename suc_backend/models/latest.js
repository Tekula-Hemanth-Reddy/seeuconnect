const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LatestSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Latest', LatestSchema);
