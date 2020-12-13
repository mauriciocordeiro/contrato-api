const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')
const Endereco = require('./Endereco');
const Telefone = require('./Telefone');
const Schema = mongoose.Schema;

let Empresa = new Schema(
    {
        _id: { type: mongoose.Types.ObjectId, required: true },
        cnpj: { type: String, required: true },
        razaoSocial: { type: String, required: true },
        nomeFantasia: { type: String, required: true },
        email: { type: String },
        endereco: Endereco.schema,
        telefones: [ Telefone.schema ]
    },
    {
        collection: 'empresa'
    }
)

Empresa.plugin(mongoosePaginate)

module.exports = mongoose.model('Empresa', Empresa)