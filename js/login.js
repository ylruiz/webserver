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
    } else {
      let html = "success";
      res.send(html);
    }
}
  
module.exports = {
    getLogin: getLogin,
    postLogin: postLogin
}