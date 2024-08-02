const mongoose = require('mongoose')
const userMode1 = new mongoose.Schema({
    name: {type: String},
    mobile_number: {type: Number, unique: true},
    email: {type: String, unique: true, required:true},
    nation: {type: String, default: 'bharat'}
})
module.exports = mongoose.model('user',userMode1)