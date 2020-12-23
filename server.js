let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dataBaseConfig = require('./src/database/db')

const app = express()

// CORS =======================================================================
app.use(cors())
// ============================================================================

// PARSER =====================================================================
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
// ============================================================================

// DATABASE ===================================================================
mongoose.Promise = global.Promise
mongoose.connect(dataBaseConfig.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database is up!')
},
    error => {
        console.log('Cannot connect database: ' + error)
    }
)
// ============================================================================

// ROUTES =====================================================================
app.use('/empresas', require('./src/routes/empresa.routes'))
app.use('/contratos', require('./src/routes/contrato.routes'))
app.use('/models', require('./src/routes/model.routes'))
app.use('/pagamentos', require('./src/routes/pagamento.routes'))
app.use('/aditivos', require('./src/routes/aditivo.routes'))

// ============================================================================

// ERROR HANDLER ==============================================================
app.use(function (err, req, res, next) {
    console.error(err.message)
    if (!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})
// ============================================================================

// SERVER =====================================================================
var port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('Server is up!')
})
// ============================================================================