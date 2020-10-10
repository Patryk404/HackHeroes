const mongoose = require('mongoose');
const accountSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: { 
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    cups_of_water: {
        type: Number,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    calories_range: {
        type: Number,
        required: true
    },
    sleep: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Account',accountSchema);