const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    type: { type: String },
    body: { type: String }
},{
    timestamps: {
        createdAt: 'createdAt',
        updateAt: 'updateAt'
    }
})

module.exports = mongoose.model('Activity',schema)