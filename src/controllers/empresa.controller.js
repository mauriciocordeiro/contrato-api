const mongoose = require('mongoose')
const Empresa = require('../models/Empresa')

module.exports = {
    async getAll(req, res) {
        const empresas = await Empresa.find()       
        return res.json(empresas)
    }

}