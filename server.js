const express = require('express');
const cookieParser = require('cookie-parser'); // Import the cookie-parser middleware
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = 4000;
const cors = require('cors');
const userRoutes = require("./routes/userRoutes.js");
const {errorHandler, notfound} = require("./middleware/errorMiddleWare.js");
//bring in the database connection
const connectDB = require('./config/db.js');


app.use(cors({
    origin: 'http://localhost:19006', // Replace with the actual origin of your React Native app
    credentials: true, // Allow credentials, such as cookies or HTTP authentication
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
// Connect to the database
connectDB();

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(notfound);
app.use(errorHandler);
app.use(cookieParser()); // Use the cookie-parser middleware

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
