// import mongoose from 'mongoose';
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let Employee = new Schema({
    name: {
        type: String
    },
    project: {
        type: String
    },
    comment: {
        type: String
    },
    rating: {
        type: Number
    },
    status: {
        type: String,
        default: 'Open'
    }
});

module.exports = mongoose.model('Employee', Employee)