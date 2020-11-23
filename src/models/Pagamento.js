const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Pagamento = new Schema(
    {
        dataPagamentoConta: { type: Number },
        valorPago: { type: Number },
        taxaJuros: { type: Number }
    }
)

module.exports = mongoose.model('Pagamento', Pagamento)