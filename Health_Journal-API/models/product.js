const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    person: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Account'
    }
});

module.exports = mongoose.model('Product',productSchema);