const mongoose = require('mongoose');
const historySleepSchema = new mongoose.Schema({
    person: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Account'
    },
    Sleep_hours: {
        type: Number,
        required: true
    },
    Sleep_minutes: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('historySleep',historySleepSchema);