const mongoose = require('mongoose')

const { Schema } = mongoose


const myShema = new Schema({
    user:String,
    message:{
        type: String,
        require:true,
    },
    date: Date
})

const model = mongoose.model('Message',myShema)
module.exports = model