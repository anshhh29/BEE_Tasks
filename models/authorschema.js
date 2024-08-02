const mongoose = require('mongoose')
const authors = new mongoose.Schema({
    name: {type: String},
    mobile_number: {type: Number, unique: true},
    email: {type: String, unique: true, required:true},
    subjects: {type: String, default: 'fiction'}
})
module.exports = mongoose.model('author',authors)