const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    body: { type: String }
})

module.exports = mongoose.model('Activity',schema)