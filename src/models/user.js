const mongoose = require('mongoose')
const userschema = mongoose.Schema({
    name:{
        type : String
    },
    age:{
        type: Number
    }
})

const User = mongoose.model('user',userschema)
exports.module = User