require('dotenv').config();

const config = {
    dev: process.env.NODE.ENV !== 'production',
    port: process.env.Port || 3000
}

module.exports = { config };