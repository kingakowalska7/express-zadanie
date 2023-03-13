const mongoose = require('mongoose');

// mongoose.set('strictQuery', false);

const User = new mongoose.Schema({
    name: String,
    address: Object,
    email: String
})

module.exports = mongoose.model('User', User)