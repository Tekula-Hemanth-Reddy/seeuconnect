const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PositionSchema = new Schema({
    positionHeld: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: false
    },
    positionDescription: {
        type: String,
        requiredPaths: false
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Position', PositionSchema);
