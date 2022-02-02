const joi = require('@hapi/joi');

const movieIdSchema = joi.string().regex(/^[0-9a-fAF]{24}$/);
const movieTitleSchema = joi.string().max(80);
const movieYearSchema = joi.number().min(1900).max(3000);
const movieCoverSchema = joi.string().uri();
const movieDescriptionSchema = joi.string().max(300);
const movieDurationSchema = joi.string().min(10).max(1000);
const movieContentRating = joi.string().max(5);
const movieSourceSchema = joi.string().uri();
const movieTagsSchema = joi.array().items(joi.string().max(50));

const createMovieSchema = {
    title: movieTitleSchema.required(),
    year: movieYearSchema.required(),
    cover: movieCoverSchema.required(),
    desciption: movieDescriptionSchema.required(),
    duration: movieDurationSchema.required(),
    contentRating: movieContentRating.required(),
    source: movieSourceSchema.required(),
    tags: movieTagsSchema
};

const updateMovieSchema = {
    title: movieTitleSchema,
    year: movieYearSchema,
    cover: movieCoverSchema,
    desciption: movieDescriptionSchema,
    duration: movieDurationSchema,
    contentRating: movieContentRating,
    source: movieSourceSchema,
    tags: movieTagsSchema
};

module.exports = {
    movieIdSchema,
    createMovieSchema,
    updateMovieSchema
};