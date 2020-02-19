const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    introduction: { type: String },
    leader: { type: mongoose.SchemaTypes.ObjectId, ref: 'Person' }
})

module.exports = mongoose.model('Team',schema)