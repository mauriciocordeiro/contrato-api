const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Telefone = new Schema(
    {
        ddd: { type: String },
        telefone: { type: String }
    }
)

module.exports = mongoose.model('Telefone', Telefone)