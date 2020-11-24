const mongoose = require('mongoose')
const Empresa = require('../models/Empresa')

module.exports = {
    getAll(req, res, next) {
        const { page = 1 } = req.query
        return Empresa.paginate({}, { page, limit: 10 },
            (error, data) => {
                if (error)
                    return next(error)
                else 
                    return res.json(data.docs)
        })
    },
    get(req, res, next) {
        Empresa.findById(req.params.id, (error, data) => {
            if (error)
                return next(error)
            else
                res.json(data)
        })
    },
    insert(req, res, next) {
        let empresa = req.body
        empresa._id = new mongoose.Types.ObjectId()
        Empresa.create(empresa, (error, data) => {
            if (error) 
                return next(error)
            else
                res.json(data)
        })
    },
    update(req, res, next) {
        Empresa.findByIdAndUpdate(req.params.id, req.body, { new: true }, 
            (error, data) => {
                if (error)
                    return next(error)
                else
                    res.json(data)
            })
    },
    delete(req, res, next) {
        Empresa.findByIdAndRemove(req.params.id, 
            (error, data) => {
                if (error)
                    return next(error)
                else
                    res.status(200).json({ msg: data })
        })
    }
}