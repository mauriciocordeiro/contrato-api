const mongoose = require('mongoose')
const Contrato = require('../models/Contrato')

function processQuery(req, aggregations) {
    if (req.query.idEmpresa) {
        aggregations.push({ $match: { "_idEmpresa": mongoose.Types.ObjectId(req.query.idEmpresa) } })
    }

    if (req.query.status) {
        aggregations.push({ $match: { "statusContrato": Number(req.query.status) } })
    }

    if (req.query.tipo) {
        aggregations.push({ $match: { "tipoContrato": Number(req.query.tipo) } })
    }

    if (req.query.prestacao) {
        aggregations.push({ $match: { "prestacao": Number(req.query.prestacao) } })
    }

}

module.exports = {
    getAll(req, res, next) {
        let aggregations = [
            {
                $lookup: {
                    from: "empresa",
                    localField: "_idEmpresa",
                    foreignField: "_id",
                    as: "empresa"
                }
            },
            { $unwind: "$empresa" }
        ]

        processQuery(req, aggregations)

        Contrato.aggregate(aggregations).then(data => {
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
                    localField: "_idEmpresa",
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
    },
    getPagamentos(req, res, next) {
        Contrato.aggregate([
            {
                $lookup: {
                    from: "empresa",
                    localField: "_idEmpresa",
                    foreignField: "_id",
                    as: "empresa"
                }
            },
            { $match: { 
                $and: [
                    { _idEmpresa: mongoose.Types.ObjectId(req.query.idEmpresa) }, 
                    { "contas.pagamentos": { $exists: true } }
                ] 
            } },
            { $unwind: "$empresa" },
            { $project: { "contas.pagamentos": 1 } }
        ]).then(data => {
            res.json(data)
        })
    },
    getAditivos(req, res, next) {
        Contrato.aggregate([
            {
                $lookup: {
                    from: "empresa",
                    localField: "_idEmpresa",
                    foreignField: "_id",
                    as: "empresa"
                }
            },
            { $match: { 
                $and: [
                    { _idEmpresa: mongoose.Types.ObjectId(req.query.idEmpresa) }, 
                    { "aditivos": { $exists: true } }
                ] 
            } },
            { $unwind: "$empresa" },
            { $project: { "aditivos": 1 } }
        ]).then(data => {
            res.json(data)
        })
    }
}