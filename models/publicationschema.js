const mongoose = require('mongoose')
const publications = new mongoose.Schema({
    name: {type: String},
    identity: {type: Number, unique: true},
    email: {type: String, unique: true, required:true},
    nation: {type: String, default: 'bharat'}
})
module.exports = mongoose.model('publication',publications)