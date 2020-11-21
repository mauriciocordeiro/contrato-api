let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dataBaseConfig = require('./database/db')

const app = express()

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
const contratoController = require('./controller/contrato.controller')
app.use('/contratos', contratoController)
// ----------------------------------------------------------------------------
// empresa --------------------------------------------------------------------
const empresaController = require('./controller/empresa.controller')
app.use('/empresas', empresaController)
// ----------------------------------------------------------------------------
// modelo ---------------------------------------------------------------------
const modelController = require('./controller/model.controller')
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
http.createServer(function(req, res){ 
    res.writeHead(200,{'Content-type':'text/plain'}); 
    res.end("A api tá on!"); 
}).listen(port); 

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
// ============================================================================