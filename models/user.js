let mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userName: String,
    userEmail: String,
    password: String
}, { timestamps: true });

let user = mongoose.model('user', Schema);
module.exports = user;