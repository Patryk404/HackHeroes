const mongoose = require('mongoose');
const historySleepSchema = new mongoose.Schema({
    person: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Account'
    },
    sleep_hours: {
        type: Number,
        required: true
    },
    sleep_minutes: {
        type: Number,
        required: true
    },
    date_start: {
        type: Date,
        required: true
    },
    date_finished: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('historySleep',historySleepSchema);