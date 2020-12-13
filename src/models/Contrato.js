const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Aditivo = require('./Aditivo');
const Conta = require('./Conta');

const ST_ATIVO = 1
const ST_FINALIZADO = 2
const ST_CANCELADO = 3

const TP_LICITATORIO = 1;
const TP_PERMANENTE = 2;
const TP_CONSULTORIA = 3;

const SERVICO = 1;
const PRODUTO = 2;


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
        aditivos: [ Aditivo.schema ],
        contas: [ Conta.schema ]
    },
    {
        collection: 'contrato'
    }
)

module.exports = mongoose.model('Contrato', Contrato)