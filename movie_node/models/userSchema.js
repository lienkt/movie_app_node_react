const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true
    },
    roleId: {
        type: String,
        required: true
    },
    contactId: {
        type: String
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('users', userModel)