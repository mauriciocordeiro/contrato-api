const express = require('express')
const routes = express.Router()
const ModelController = require('../controllers/model.controller')

routes.get('/', ModelController.getAll)

module.exports = routes