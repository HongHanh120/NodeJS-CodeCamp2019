const mongoose = require('mongoose');

const {connection} = require('../libs/createConnection');

const {Schema} = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        allowNull: false
    },
    password: {
        type: String,
        require: true,
        allowNull: false
    },
    created: {
        type: Date,
        default: Date.now
    }
}, {versionKey: false});

const User = connection.model('User', userSchema);

module.exports = User;