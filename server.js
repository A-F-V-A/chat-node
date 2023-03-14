/* Modulos */

const  express = require('express')
const  bodyParser = require('body-parser')


/* Uso */
const router = require('./network/routes')
const app = express()

// Conexion a la db 
const db = require('./db')

db('')


/* Init */
app.use(bodyParser.json())
app.use('/app',express.static('public'))
router(app)


app.listen(3000)
console.log('La aplicacion ya esta escuchando en http://localhost:3000')
