const mongoose = require('mongoose')

const { Schema } = mongoose


const myShema = new Schema({
    user:{
        type: Schema.ObjectId,
        ref:'User'
    },
    message:{
        type: String,
        require:true,
    },
    date: Date
})

const model = mongoose.model('Message',myShema)
module.exports = model