const { v4: uuidv4 } = require('uuid')

const seenMovieModel = require('../models/seenMovieSchema')

const express = require('express')
const Router = express.Router()

let seenMovies = []

Router.get('/:userId', (req, res, next) => {
    const userId = req.params.userId

    seenMovieModel.find({
        userId: userId
    })
    .sort({created_at: 'desc'})
    .then(seenMovie => {

        res.status(200).send(seenMovie)
    })
    .catch(error => next(error))
})

module.exports = Router