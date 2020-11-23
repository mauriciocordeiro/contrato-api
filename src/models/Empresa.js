const mongoose = require('mongoose');
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
        telefones: [ Telefone.schema ],
        contratos: { type: Array }
    },
    {
        collection: 'empresa'
    }
)

module.exports = mongoose.model('Empresa', Empresa)