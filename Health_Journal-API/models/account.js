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
    start_sleep_date:{
        type: Date,
        default: new Date(0),
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
        type: Boolean,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        default: 0, 
        required: true
    },
    weight: {
        type: Number,
        default: 0,
        required: true
    },
    BMI: {
        type: Number,
        default: 0,
        required: true
    }
});

module.exports = mongoose.model('Account',accountSchema);