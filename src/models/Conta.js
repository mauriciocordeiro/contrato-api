const mongoose = require('mongoose');
const Pagamento = require('./Pagamento');
const Schema = mongoose.Schema;

let Conta = new Schema(
    {
        copiaConta: { type: String },
        tipoConta: { type: Number },
        statusConta: { type: Number },
        dataVencimentoConta: { type: Date },
        dataRecebimentoSetor: { type: Date },
        dataEnvioDof: { type: Date },
        valorConta: { type: Number },
        observacoesConta: { type: String },
        pagamentos: [ Pagamento.schema ]
    }
)

module.exports = mongoose.model('Conta', Conta)