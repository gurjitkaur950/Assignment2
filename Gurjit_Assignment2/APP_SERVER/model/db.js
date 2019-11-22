const mongoose = require('mongoose');
const dbURI = "mongodb+srv://saigurjit011195:gurjit@0008@gurjit-lo5gp.mongodb.net/test?retryWrites=true&w=majority";
//mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.connect(dbURI, {dbName: 'foodDB'})
mongoose.connection.on('connected', () => {
console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
console.log('Mongoose disconnected');
});

