let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dataBaseConfig = require('./src/database/db')

const app = express()

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
// contrato -------------------------------------------------------------------
const contratoController = require('./src/controllers/contrato.controller')
app.use('/contratos', contratoController)
// ----------------------------------------------------------------------------
// empresa --------------------------------------------------------------------
const empresaController = require('./src/controllers/empresa.controller')
app.use('/empresas', empresaController)
// ----------------------------------------------------------------------------
// modelo ---------------------------------------------------------------------
const modelController = require('./src/controllers/model.controller')
app.use('/models', modelController)
// ----------------------------------------------------------------------------
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

app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
// ============================================================================