const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://yunet:yunet@yunet-webserver-dvshd.mongodb.net/test?retryWrites=true';

mongoose.connect(connectionString, {useNewUrlParser: true})

module.exports = mongoose;