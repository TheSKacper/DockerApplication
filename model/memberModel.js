const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    name: {type:String , required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true}
})

const Member = mongoose.model('Member',memberSchema)

module.exports = Member