const mongoose = require("mongoose");

const contactModel = new mongoose.Schema({
    birthDate: {
        type: Date,
        require: true
    },
    gender: {
        type: String
    },
    addressId: {
        type: String
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('contacts', contactModel)