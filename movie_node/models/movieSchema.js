const mongoose = require("mongoose");

const movieModel = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    movieDirector: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    releaseDate: {
        type: Date,
        require: true
    },
    thumbnail: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    rating: Number
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('movies', movieModel)