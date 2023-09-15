// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 3007;
const routes = require('./user.route');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then((data) => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});




// Middleware
app.use(bodyParser.json());

// Routes

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
