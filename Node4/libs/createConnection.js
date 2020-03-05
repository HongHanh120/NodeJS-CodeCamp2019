const Mongoose = require('mongoose');

const MONGO_PATH = process.env.MONGO_PATH || "localhost";
const MONGO_PORT = process.env.MONGO_PORT || 27017;

const uri = `mongodb://${MONGO_PATH}:${MONGO_PORT}/hello`;
const connection = Mongoose
    .createConnection(
        uri,
        {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true
        }, () => {
            console.log('MongoDB is connected.');
        });
/*
connection.on('error', (error) => {
    console.error('MONGODB_ERROR', error)
});
*/
module.exports.connection = connection;


//module.exports = connection;