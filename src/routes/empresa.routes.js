const express = require('express')
const routes = express.Router()
const EmpresaController = require('../controllers/empresa.controller')

routes.get('/', EmpresaController.getAll)

module.exports = routes