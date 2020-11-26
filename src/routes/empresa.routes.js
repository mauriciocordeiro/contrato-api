const express = require('express')
const routes = express.Router()
const EmpresaController = require('../controllers/empresa.controller')

routes.get('/', EmpresaController.getAll)
routes.get('/:id', EmpresaController.get)
routes.post('/', EmpresaController.insert)
routes.put('/:id', EmpresaController.update)
routes.delete('/:id', EmpresaController.delete)

module.exports = routes