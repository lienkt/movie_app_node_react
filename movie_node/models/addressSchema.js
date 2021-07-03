const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    country: {
        type: String,
        require: true
    },
    area: {
        type: String
    },
    city: {
        type: String,
        require: true
    },
    street: {
        type: String
    },
    number: {
        type: String
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('addresses', addressSchema)