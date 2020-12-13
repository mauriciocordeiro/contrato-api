const express = require('express')
const routes = express.Router()
const ContratoController = require('../controllers/contrato.controller')

routes.get('/', ContratoController.getAll)
routes.get('/:id', ContratoController.get)
routes.post('/', ContratoController.insert)
routes.put('/:id', ContratoController.update)
routes.delete('/:id', ContratoController.delete)

routes.get('/pagamentos', ContratoController.getPagamentos)
routes.get('/aditivos', ContratoController.getAditivos)

module.exports = routes