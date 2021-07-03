const { v4: uuidv4 } = require('uuid')

const contactModel = require('../models/contactSchema')

const express = require('express')
const Router = express.Router()

let contacts = []

Router.get('/', (req, res, next) => {
    contactModel.find()
    .then(contacts => {
        res.status(200).send(contacts);
    })
    .catch(error => next(error))
})

Router.get('/:contactId', (req, res, next) => {
    const contactId = req.params.contactId

    contactModel.findOne({
        _id: contactId
    })
    .then(contact => {
        res.status(200).send(contact)
    })
    .catch(error => next(error))

})

Router.post('/', function (req, res, next) {
    let contact = new contactModel({
        birthDate: req.body.birthDate,
        gender: req.body.gender,
        addressId: req.body.addressId
    })

    contact.save()
    .then(contact => {res.status(200).send(contact)})
    .catch(error => {next(error)});

    res.status(200).send(contact)
})

Router.put('/:contactId', function (req, res, next) {
    const contactId = req.params.contactId
    
    contactModel.findOneAndUpdate({
        _id: contactId
    }, {
        birthDate: req.body.birthDate,
        gender: req.body.gender,
        addressId: req.body.addressId
    })
    .then(contact => res.status(200).send(contact))
    .catch(error => next(error))
})

Router.delete('/:contactId', function (req, res, next) {
    const contactId = req.params.contactId
    
    contactModel.findOneAndDelete({
        _id: contactId
    }).then(contact => {
        res.status(200).send('contact well deleted!')
    })
    .catch(error => next(error))
})

module.exports = Router