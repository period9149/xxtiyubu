const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    peopleName: { type: String },
    peopleTask: { type: String },
    peopleBirthday: { type: String },
    peopleBirthplace: { type: String },
    peopleIntroduce: { type: String },
    peopleQQ: { type: String },
    peopleImage: { type: String }
})

/*schema.virtual('leader',{
    localField: '_id',
    foreignField: 'leader',
    ref: 'Team'
})*/

module.exports = mongoose.model('Person',schema)