const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name:String,
    username:{type: String, unique: true},
    mobile_no:{type: Number, unique: true},
    email: {type: String, unique: true},
    password:String,
    confirm_password:String
})

module.exports = mongoose.model("users",userSchema);