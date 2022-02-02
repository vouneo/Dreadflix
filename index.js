const express = require('express');
const app = express();

const { config } = require('./backend/config/index');
const moviesApi = require('./routes/movies.js');

const { 
    logErrors, 
    wrapErrors, 
    errorHandler  
} = require('./utils/middleware/errorHandlers')

const notFoundHandler = require('./utils/middleware/notFoundHandler');

    // body parser middleware
app.use(express.json());

// routes 
moviesApi(app);

// Catch 404 error
app.use(notFoundHandler);

// Error middlewares (manejadores de errores)
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
});