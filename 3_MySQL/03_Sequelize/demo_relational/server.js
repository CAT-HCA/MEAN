require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

// include routes
const manufacturers = require('./routes/manufacturers');
const automobiles = require('./routes/automobiles');

const PORT = 3000;

var app = express();

// enable CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use routes
app.use('/manufacturers', manufacturers);
app.use('/automobiles', automobiles);

app.listen(PORT, () => {
    console.log(`Express Server listening on http://localhost:${PORT}`);
});