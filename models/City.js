const mongoose = require('mongoose')
const {Schema} = mongoose

const citySchema = new Schema({
    title : {type:String, required: true},
    src : {type:String,required: true},
    country: {type:String,required: true}
})

const City = mongoose.model('city',citySchema)

module.exports = City