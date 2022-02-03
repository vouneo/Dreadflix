const assert  = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mock/mongoLib'); 

const { moviesMock } = require('../utils/mock/movies');

describe('services - movies', function() {
    const MoviesServices = proxyquire('../services/movies.js', {
        '../lib/mongo.js': MongoLibMock
    });

    const moviesService = new MoviesServices();

    describe('when getMovies methos is called', async function() {
        it('should call the getall MongoLib method', async function() {
            await moviesService.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        });

        it('should return an array of movies', async function() {
            const result = await moviesService.getMovies({});
            const expected = moviesMock;
            assert.deepEqual(result, expected); 
        });
    });
});