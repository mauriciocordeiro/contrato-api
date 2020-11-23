let model = require('../database/model.json')

module.exports = {
    async getAll(req, res) {
        res.json(model)
    }
}