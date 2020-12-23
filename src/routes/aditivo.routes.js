const express = require('express')
const routes = express.Router()
const ContratoController = require('../controllers/contrato.controller')

routes.get('/', ContratoController.getAditivos)

module.exports = routes