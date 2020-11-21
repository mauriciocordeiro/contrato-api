const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Empresa = new Schema (
    {
        _id: { type: mongoose.Types.ObjectId, required: true },
        cnpj: { type: String, required: true },
        razao_social: { type: String, required: true },
        nome_fantasia: { type: String, required: true },
        email: { type: String },
        endereco: { type: Object },
        telefones: { type: Array },
        contratos: { type: Array }
    },
    {
        collection: 'empresa'
    }
)

module.exports = mongoose.model('Empresa', Empresa)