const { v4: uuidv4 } = require('uuid')

const movieModel = require('../models/movieSchema')

const express = require('express')
const Router = express.Router()

let movies = []

Router.get('/', (req, res, next) => {
    movieModel.find()
    .then(movies => {
        res.status(200).send(movies);
    })
    .catch(error => next(error))
})

Router.get('/:movieId', (req, res, next) => {
    const movieId = req.params.movieId

    movieModel.findOne({
        _id: movieId
    })
    .then(movie => {
        res.status(200).send(movie)
    })
    .catch(error => next(error))

})

Router.post('/', function (req, res, next) {
    let movie = new movieModel({
        title: req.body.title,
        movieDirector: req.body.movieDirector,
        category: req.body.category,
        releaseDate: req.body.releaseDate,
        thumbnail: req.body.thumbnail,
        url: req.body.url,
        rating: null
    })

    movie.save()
    .then(movie => {res.status(200).send(movie)})
    .catch(error => {next(error)});

    res.status(200).send(movie)
})

Router.put('/:movieId', function (req, res, next) {
    const movieId = req.params.movieId
    
    movieModel.findOneAndUpdate({
        _id: movieId
    }, {
        title: req.body.title,
        movieDirector: req.body.movieDirector,
        category: req.body.category,
        releaseDate: req.body.releaseDate,
        thumbnail: req.body.thumbnail,
        url: req.body.url,
        rating: req.body.rating
    })
    .then(movie => res.status(200).send(movie))
    .catch(error => next(error))
})

Router.delete('/:movieId', function (req, res, next) {
    const movieId = req.params.movieId
    
    movieModel.findOneAndDelete({
        _id: movieId
    }).then(movie => {
        res.status(200).send('movie well deleted!')
    })
    .catch(error => next(error))
})

module.exports = Router