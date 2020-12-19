const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')
const Endereco = require('./Endereco');
const Telefone = require('./Telefone');
const Schema = mongoose.Schema;

let Empresa = new Schema(
    {
        _id: { type: mongoose.Types.ObjectId, required: false },
        cnpj: { type: String, required: false },
        razaoSocial: { type: String, required: false },
        nomeFantasia: { type: String, required: false },
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