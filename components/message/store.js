const db = require('mongoose')
const Model = require('./model')


//mongodb+srv://adm_afva:HUbzlf3mjvVLj1IZ@cluster0.2szuflz.mongodb.net/test
db.Promise = global.Promise

//conection db

console.log('[db] conectada coon exito')

const list = []

function addMessage(message){
    console.log(message)
    const newMessage = new Model(message)
    newMessage.save()
}

async function getMessages(){
    const message = await Model.find()
    return message
}

module.exports = {
    add: addMessage,
    get: getMessages,
}