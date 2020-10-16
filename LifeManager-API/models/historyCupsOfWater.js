const mongoose = require('mongoose');
const historyWaterSchema = new mongoose.Schema({
    person: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Account'
    },
    cups: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('historyWater',historyWaterSchema);