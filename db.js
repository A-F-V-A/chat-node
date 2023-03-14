const db = require('mongoose')

db.Promise = global.Promise

const connect = async url =>{
    await db.connect(url,{
        useNewUrlParser:true
    })
    console.log('[db AFVA_CHAT] : Conectada coon exito')
}


module.exports = connect




