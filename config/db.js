const mongoose = require('mongoose');

// Replace the database URL with your own
const dbURI = 'mongodb://localhost/mydatabase';

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(`MongoDB connection error: ${err}`));

module.exports = mongoose.connection;
