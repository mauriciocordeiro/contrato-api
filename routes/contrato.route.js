const express = require('express')
const mongoose = require('mongoose')
const contratoRoute = express.Router()

// Contrato model
let Contrato = require('../model/Contrato')

// Create Contrato
contratoRoute.route('/').post((req, res, next) => {
    let contrato = req.body
    contrato._id = new mongoose.Types.ObjectId()
    
    Contrato.create(contrato, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Retrieve contrato
contratoRoute.route('/').get((req, res) => {
    // Contrato.find((error, data) => {
    //     if (error) {
    //         return next(error)
    //     } else {
    //         res.json(data)
    //     }
    // })
    Contrato.aggregate([
        {
            $lookup: {
                from: "empresa",
                localField: "_id_empresa",
                foreignField: "_id",
                as: "empresa"
            }
        },
        { $unwind: "$empresa" }
    ]).then(data => {
        res.json(data)
    })
})

// Retrieve um contrato
contratoRoute.route('/:id').get((req, res) => {
    // Contrato.findById(req.params.id, (error, data) => {
    //     if (error) {
    //         return next(error)
    //     } else {
    //         res.json(data)
    //     }
    // })

    Contrato.aggregate([
        { 
            $match: { "_id": mongoose.Types.ObjectId(req.params.id) } 
        },  
        {
            $lookup: {
                from: "empresa",
                localField: "_id_empresa",
                foreignField: "_id",
                as: "empresa"
            }
        },
        { $unwind: "$empresa" }
    ]).then(data => {
        res.json(data[0])
    })
})

// Update contrato
contratoRoute.route('/:id').put((req, res, next) => {
    Contrato.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), {
        $set: req.body
    }, (error, data) => {
        if (error) {
            console.log(error)
            return next(error)
        } else {
            res.json(data)
            console.log('Contrato successfully updated!')
        }
    })
})

// Delete contrato
contratoRoute.route('/:id').delete((req, res, next) => {
    Contrato.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = contratoRoute