let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dataBaseConfig = require('./database/db')

// Conectando mongoDB
mongoose.Promise = global.Promise
mongoose.connect(dataBaseConfig.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('BD conectado!')
},
    error => {
        console.log('Não foi possível estabelecer conexão om o BD: ' + error)
    }
)

// ROUTES =====================================================================
// ============================================================================
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
// app.use(express.static(path.join(__dirname, 'dist/contrato-manager')))
// app.use('/', express.static(path.join(__dirname, 'dist/contrato-manager')))
// app.use('/*', express.static(path.join(__dirname, 'dist/contrato-manager/*')))

// contrato -------------------------------------------------------------------
const contratoRoute = require('./routes/contrato.route')
app.use('/contratos', contratoRoute)
// ----------------------------------------------------------------------------
// empresa --------------------------------------------------------------------
const empresaRoute = require('./routes/empresa.route')
app.use('/empresas', empresaRoute)
// ----------------------------------------------------------------------------
// ============================================================================

// Create port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message)
    if (!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})