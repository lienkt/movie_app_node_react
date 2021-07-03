const { v4: uuidv4 } = require('uuid')

const userModel = require('../models/userSchema')
const roleModel = require('../models/roleSchema')
const contactModel = require('../models/contactSchema')
const addressModel = require('../models/addressSchema')

const express = require('express')
const Router = express.Router()

let users = []

Router.get('/', (req, res, next) => {
    userModel.find()
    .then(users => {
        res.status(200).send(users);
    })
    .catch(error => next(error))
})

Router.get('/:userId', (req, res, next) => {
    const userId = req.params.userId

    userModel.findOne({
        _id: userId
    })
    .then(user => {
        res.status(200).send(user)
    })
    .catch(error => next(error))

})

Router.post('/', function (req, res, next) {
    let roleIn = req.body.role
    let contactIn = req.body.contact
    let addressIn = req.body.address
    let userIn = req.body.user

    let user = new userModel({
        title: req.body.title,
        userDirector: req.body.userDirector,
        category: req.body.category,
        releaseDate: req.body.releaseDate,
        thumbnail: req.body.thumbnail,
        url: req.body.url,
        rating: null
    })
    user.save()
    .then(user => {res.status(200).send(user)})
    .catch(error => {next(error)});

    res.status(200).send(user)
})

Router.put('/:userId', function (req, res, next) {
    const userId = req.params.userId
    
    userModel.findOneAndUpdate({
        _id: userId
    }, {
        title: req.body.title,
        userDirector: req.body.userDirector,
        category: req.body.category,
        releaseDate: req.body.releaseDate,
        thumbnail: req.body.thumbnail,
        url: req.body.url,
        rating: req.body.rating
    })
    .then(user => res.status(200).send(user))
    .catch(error => next(error))
})

Router.delete('/:userId', function (req, res, next) {
    const userId = req.params.userId
    
    userModel.findOneAndDelete({
        _id: userId
    }).then(user => {
        res.status(200).send('user well deleted!')
    })
    .catch(error => next(error))
})

module.exports = Router