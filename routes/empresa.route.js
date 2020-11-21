const express = require('express')
const mongoose = require('mongoose')
// const app = express()
const empresaRoute = express.Router()

// Empresa model
let Empresa = require('../model/Empresa')

// Create Empresa
empresaRoute.route('/').post((req, res, next) => {
    let empresa = req.body
    empresa._id = new mongoose.Types.ObjectId()

    Empresa.create(empresa, (error, data) => {
        if (error) {
            console.log(error)
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get all empresa
empresaRoute.route('/').get((req, res) => {
    Empresa.find((error, data) => {
        if (error) {
            console.log(error)
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single empresa
empresaRoute.route('/:id').get((req, res) => {
    Empresa.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update empresa
empresaRoute.route('/:id').put((req, res, next) => {
    Empresa.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error)
            console.log(error)
        } else {
            res.json(data)
            console.log('Empresa successfully updated!')
        }
    })
})

// Delete empresa
empresaRoute.route('/:id').delete((req, res, next) => {
    Empresa.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = empresaRoute