const { Double } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Aditivo = new Schema(
    {
        copiaContratoAditivo: { type: String },
        valorContratoAditivo: { type: Number },
        dataRenovacao: { type: Date },
        dataVencimento: { type: Date },
        observacoes: { type: String },
    }
)

module.exports = mongoose.model('Aditivo', Aditivo)