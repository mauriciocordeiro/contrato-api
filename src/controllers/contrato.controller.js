const mongoose = require('mongoose')
const Contrato = require('../models/Contrato')

module.exports = {
    getAll(req, res, next) {
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
    },
    get(req, res, next) {
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
    },
    insert(req, res, next) {
        let contrato = req.body
        contrato._id = new mongoose.Types.ObjectId()
        
        Contrato.create(contrato, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    },
    update(req, res, next) {
        Contrato.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), {
            $set: req.body
        }, (error, data) => {
            if (error) {
                console.log(error)
                return next(error)
            } else {
                res.json(data)
            }
        })
    },
    delete(req, res, next) {
        Contrato.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.status(200).json({
                    msg: data
                })
            }
        })
    }
}