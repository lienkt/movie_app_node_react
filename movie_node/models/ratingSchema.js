const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    rating: {
        type: String,
        require: true
    },
    commentTitle: {
        type: String
    },
    commentContent: {
        type: String
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