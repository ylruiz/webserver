const mongoose = require('mongoose')
const UserSchema = require('../models/User')
const User = mongoose.model('User', UserSchema, 'User')
const connectionString = 'mongodb+srv://yunet:yunet@yunet-webserver-dvshd.mongodb.net/test?retryWrites=true';

mongoose.connect(connectionString, {useNewUrlParser: true})

const user1 = new User({
    first_name: 'Yunet',
    last_name: 'Luis Ruiz',
    email: 'yunet.lruiz@gmail.com'
})

user1.save().then(() => console.log(user1))

module.exports = mongoose;