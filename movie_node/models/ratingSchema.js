const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    rating: {
        type: Number,
        require: true
    },
    commentTitle: {
        type: String
    },
    commentContent: {
        type: String
    },
    movieId: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('ratings', ratingSchema)