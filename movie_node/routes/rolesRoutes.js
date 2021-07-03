const { v4: uuidv4 } = require('uuid')

const roleModel = require('../models/roleSchema')

const express = require('express')
const Router = express.Router()

let roles = []

Router.get('/', (req, res, next) => {
    roleModel.find()
    .then(roles => {
        res.status(200).send(roles);
    })
    .catch(error => next(error))
})

Router.get('/:roleId', (req, res, next) => {
    const roleId = req.params.roleId

    roleModel.findOne({
        _id: roleId
    })
    .then(role => {
        res.status(200).send(role)
    })
    .catch(error => next(error))

})

Router.post('/', function (req, res, next) {
    let role = new roleModel({
        name: req.body.name
    })

    role.save()
    .then(role => {res.status(200).send(role)})
    .catch(error => {next(error)});

    res.status(200).send(role)
})

Router.put('/:roleId', function (req, res, next) {
    const roleId = req.params.roleId
    
    roleModel.findOneAndUpdate({
        _id: roleId
    }, {
        name: req.body.name
    })
    .then(role => res.status(200).send(role))
    .catch(error => next(error))
})

Router.delete('/:roleId', function (req, res, next) {
    const roleId = req.params.roleId
    
    roleModel.findOneAndDelete({
        _id: roleId
    }).then(role => {
        res.status(200).send('role well deleted!')
    })
    .catch(error => next(error))
})

module.exports = Router