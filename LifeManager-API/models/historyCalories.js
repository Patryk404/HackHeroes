const mongoose = require('mongoose');
const historyCalorieSchema = new mongoose.Schema({
    person: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Account'
    },
    calories: {
        type: Number,
        required: true
    },
    calories_range: {
        type: Number,
        required: true
    },
    //products: 
    meet: { // czy spełnione
        type: Boolean,
        required: true,
        default: false
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('historyCalorie',historyCalorieSchema);