const mongoose = require('mongoose');

const {connection} = require('../libs/createConnection');

const {Schema} = mongoose;

const postSchema = new Schema({
    title: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Post = connection.model('Post', postSchema);

module.exports = Post;





