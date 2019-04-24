const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: String,
    first_name: String,
    last_name: String,
    email: String,
    password_hash: String
},{timestamps: true})

module.exports = userSchema;