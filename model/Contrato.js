const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function deleteEmpty(v) {
    if (v == null) {
        return undefined;
    }
    return v;
}

// Define collection e schema
let Contrato = new Schema(
    {
        _id: { type: mongoose.Types.ObjectId, required: true },
        _idEmpresa: { type: mongoose.Types.ObjectId, required: true },
        numero: { type: String, required: true },
        copiaContrato: { type: String, set: deleteEmpty },
        tipoContrato: { type: Number, required: true },
        prestacao: { type: Number, required: true },
        statusContrato: { type: Number, required: true },
        valorContrato: { type: Number, set: deleteEmpty },
        dataCelebracaoContrato: { type: Date, required: true },
        dataFinalizacaoContrato: { type: Date, set: deleteEmpty },
        observacoesContrato: { type: String, set: deleteEmpty },
        aditivo: { type: Array, set: deleteEmpty },
        conta: { type: Array, set: deleteEmpty }
    },
    {
        collection: 'contrato'
    }
)

module.exports = mongoose.model('Contrato', Contrato)