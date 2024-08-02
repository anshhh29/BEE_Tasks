const mongoose = require('mongoose')
const books = new mongoose.Schema({
    name: {type: String},
    serial_number: {type: Number, unique: true},
    subject: {type: String, unique: true, required:true},
    language: {type: String, default: 'english'}
})
module.exports = mongoose.model('book',books)