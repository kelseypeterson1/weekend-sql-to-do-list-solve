const express = require('express');

// Setup an express app
const app = express();

// Listen for HTTP requests
// on a port
const PORT = 5000;
app.listen(PORT, () => {
    console.log('I\'m listening on localhost:5000');
});