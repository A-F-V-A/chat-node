const mongoose = require('mongoose')

const { Schema } = mongoose


const myShema = new Schema({
    name:{
        type: String,
        require:true,
    }
})

const model = mongoose.model('User',myShema)
module.exports = model