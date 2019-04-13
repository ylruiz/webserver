// GET method Login
const getLogin = (req, res) => { 
    let visibility = 'invisible';
    res.render('login', {visibility: visibility});
}  
  
// POST method Login
const postLogin = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (email === "hello@test.com" && password === "hello"){  
        let redirectUrl = "/admin/?email="+email;
        res.redirect(redirectUrl);
    } else {
        let visibility = 'visible';
        res.render('login', {visibility: visibility});
    }
}
  
module.exports = {
    getLogin: getLogin,
    postLogin: postLogin
}