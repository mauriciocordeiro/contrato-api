const express = require('express')

const modelController = express.Router()

let model = require('../database/model.json')
modelController.route('/').get((req, res) => {
    res.json(model)
})

module.exports = modelController