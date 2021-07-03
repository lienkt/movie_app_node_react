const mongoose = require("mongoose");

const seenMovieSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    movieId: {
        type: String,
        require: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('seenMovies', seenMovieSchema)