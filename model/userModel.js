const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    email:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },
    name:
    {
        type:String,
        required:true
    },
    surname:
    {
        type:String,
        required:true
    },
    country:
    {
        type:String,
        required:true
    },
    city:
    {
        type:String,
        required:true
    },
    street:
    {
        type:String,
        required:true
    },
    zipCode:
    {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('userModel', userSchema);