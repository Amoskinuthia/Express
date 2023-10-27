const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = 4000;
const userRoutes = require("./routes/userRoutes.js");
const {errorHandler, notfound} = require("./middleware/errorMiddleWare.js");


app.use('/api/users', userRoutes);

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(notfound);
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
