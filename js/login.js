// GET method Login
const getLogin = (req, res) => { 
    res.render('login');
}  
  
// POST method Login
const postLogin = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (email == "" || password == "" ){
      res.render('login', {email: "", password: ""});
    } else  if (email === "hello@test.com" && password === "hello"){  
        let redirectUrl = "/admin/?email="+email;
        res.redirect(redirectUrl);
        //res.render('admin', {email: email});
    } else {
        let html = "success";
        res.send(html);
    }
}
  
module.exports = {
    getLogin: getLogin,
    postLogin: postLogin
}