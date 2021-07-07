const { v4: uuidv4 } = require('uuid')

const ratingModel = require('../models/ratingSchema')

const express = require('express')
const Router = express.Router()

let ratings = []

Router.get('/', (req, res, next) => {
    ratingModel.find()
    .then(ratings => {
        res.status(200).send(ratings);
    })
    .catch(error => next(error))
})

Router.get('/:movieId', (req, res, next) => {
    const movieId = req.params.movieId

    ratingModel.find({
        movieId: movieId
    })
    .then(rating => {
        res.status(200).send(rating)
    })
    .catch(error => next(error))

})

Router.post('/', function (req, res, next) {
    let rating = new ratingModel({
        rating: req.body.rating,
        commentTitle: req.body.commentTitle,
        commentContent: req.body.commentContent,
        userId: req.body.userId,
        movieId: req.body.movieId
    })

    rating.save()
    .then(rating => {res.status(200).send(rating)})
    .catch(error => {next(error)});

    res.status(200).send(rating)
})

Router.put('/:ratingId', function (req, res, next) {
    const ratingId = req.params.ratingId
    
    ratingModel.findOneAndUpdate({
        _id: ratingId
    }, {
        rating: req.body.rating,
        commentTitle: req.body.commentTitle,
        commentContent: req.body.commentContent,
        userId: req.body.userId,
        movieId: req.body.movieId
    })
    .then(rating => res.status(200).send(rating))
    .catch(error => next(error))
})

Router.delete('/:movieId', function (req, res, next) {
    const movieId = req.params.movieId
    
    ratingModel.deleteMany({
        movieId: movieId
    }).then(rating => {
        res.status(200).send('rating well deleted!')
    })
    .catch(error => next(error))
})

module.exports = Router