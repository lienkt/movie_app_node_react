const { v4: uuidv4 } = require('uuid')

const seenMovieModel = require('../models/seenMovieSchema')

const express = require('express')
const Router = express.Router()

let seenMovies = []

Router.get('/', (req, res, next) => {
    seenMovieModel.find()
    .then(seenMovies => {
        res.status(200).send(seenMovies);
    })
    .catch(error => next(error))
})

Router.get('/:movieId', (req, res, next) => {
    const movieId = req.params.movieId

    seenMovieModel.find({
        movieId: movieId
    })
    .sort({created_at: 'desc'})
    .then(seenMovie => {
        res.status(200).send(seenMovie)
    })
    .catch(error => next(error))
})

Router.post('/', function (req, res, next) {
    let seenMovie = new seenMovieModel({
        userId: req.body.userId,
        movieId: req.body.movieId
    })

    seenMovie.save()
    .then(seenMovie => {res.status(200).send(seenMovie)})
    .catch(error => {next(error)});

    res.status(200).send(seenMovie)
})

Router.put('/:seenMovieId', function (req, res, next) {
    const seenMovieId = req.params.seenMovieId
    
    seenMovieModel.findOneAndUpdate({
        _id: seenMovieId
    }, {
        userId: req.body.userId,
        movieId: req.body.movieId
    })
    .then(seenMovie => res.status(200).send(seenMovie))
    .catch(error => next(error))
})

Router.delete('/:movieId', function (req, res, next) {
    const movieId = req.params.movieId
    
    seenMovieModel.deleteMany({
        movieId: movieId
    }).then(seenMovie => {
        res.status(200).send('seenMovie well deleted!')
    })
    .catch(error => next(error))
})

module.exports = Router