const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
    name: {
        type: String,
        index: 1,
        required: [true, 'You must enter a name']
    },
    reviews: {
        type: Array,
        items: {
            type: String
        },
        required: [true, 'You must enter a review']
    },
    date: {
        type: String,
        required: [true, 'You must enter a year']
    },
    rate: {
        type: Number,
        min: 0,
        max: 5,
        required: [true, 'You must enter a rate between 0-5']
    }
});

const movie = model('movie', movieSchema);
module.exports = movie;