const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    body: { type: String },
},{
    timestamps: {
        createdAt: 'createdAt',
        updateAt: 'updateAt'
    }
})

module.exports = mongoose.model('Group',schema)