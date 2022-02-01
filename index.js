const express = require('express');
const app = express();

const { config } = require('./backend/config/index');
const moviesApi = require('./routes/movies.js');

moviesApi(app);

app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
});