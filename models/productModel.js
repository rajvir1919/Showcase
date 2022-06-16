const { text } = require('express')
const mongoose = require('mongoose')

const BusSchema = new mongoose.Schema({
    
    link: {
        type: String,
        required: true,
        trim: true
    },
    companyName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    brand:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    category: {
        type: Number,
        default:""
    },
    price: {
        type: String,
        required: true
    },
    
    Description: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('ProUser', BusSchema)