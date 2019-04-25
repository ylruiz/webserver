const mongoose = require('./db')
const UserSchema = require('../models/User')
const User = mongoose.model('User', UserSchema, 'User')

// GET method Register
const getRegister = (req, res) => {
    let visibility = 'invisible';
    res.render('register', {visibility: visibility});
}  
  
// POST method Register
const postRegister = (req, res) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let password = req.body.password;
    const user = new User({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
    })
    //user.save().then(() => console.log(user)) */
}
  
module.exports = {
    getRegister: getRegister,
    postRegister: postRegister
}