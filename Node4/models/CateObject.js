const mongoose = require('mongoose');
const UserObject = require('UserObject');
const {connection} = require('../libs/createConnection');

const {Schema} = mongoose;

const cateSchema = new Schema({
    _id: {
        type: String
    },
    name: {
        type: String,
    },
    user: {
        type: UserObject
    },
    completed: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
}, {versionKey: false});

const Cate = connection.model('Cate', cateSchema);

module.exports = Cate;