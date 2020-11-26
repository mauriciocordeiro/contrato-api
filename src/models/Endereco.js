const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Endereco = new Schema(
    {
        rua: { type: String },
        numero: { type: String },
        bairro: { type: String },
        cidade: { type: String },
        uf: { type: String },
    }
)

module.exports = mongoose.model('Endereco', Endereco)