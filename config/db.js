const mongoose = require('mongoose');

// Replace the database URL with your own
const dbURI = 'mongodb+srv://Amoskinuthia:Vcfnw0rot51Ui5mj@cluster0.m2v3tkt.mongodb.net/express?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connection success');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = connectDB;
