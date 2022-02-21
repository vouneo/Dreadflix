const { config } = require('../backend/config/index');
const { SIXTY_MINUTES_IN_SECONDS } = require('./time');

function cacheResponse(res, seconds) {
    if(!config.dev){
        res.set('Cache-Control', `public, max-age=${seconds}` )
    }
}

module.exports = SIXTY_MINUTES_IN_SECONDS;