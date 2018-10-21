// Dependencies/Packages
const express = require('express'); // node express server
const morgan = require('morgan'); // server logs
const helmet = require('helmet'); // general/header security
const app = express(); // calls express, stored as app

// config
const PORT = process.env.PORT || 3000; // server deployment

// Middleware
app.use(morgan('tiny')); // server logger
app.use(helmet()); // header security
app.use(express.urlencoded({ extended: false })); // encoding of API calls
app.use(express.json({ limit: '1000kb' })); // tell express to use json, limit incoming to 1mb

// Serve static/build files
app.use(express.static('index.html'));

// Sample API endpoint for proof of concept
// look into request, response cycle (Socrata)
app.use('/hello', (req, res) => {
  // server logic goes here
  res.status(200).json({
    message: 'hello, how are you today?',
  });
});

// port listener and happy-happy report
app.listen(PORT, () => console.log('Server OK'));
