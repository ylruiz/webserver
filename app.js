require('dotenv').config()
const express = require('express');
const mustacheExpress = require('mustache-express');
const homeControler = require('./js/home');
const contactControler = require('./js/contact'); 
const loginControler = require('./js/login');
const adminControler = require('./js/admin');
const bodyParser = require('body-parser');
const passport = require('./config/passport');
const cookieParser = require('cookie-parser');
const db = require('./js/db');

// create your app
const app = express();
const port = process.env.PORT || 3000;

/*** START CONFIGURE  ***/
// Configure view engine to render MUSTACHE templates.
app.set('views', './views')
app.engine('mustache', mustacheExpress()) // Register '.mustache' extension with The Mustache Express
app.set('view engine', 'mustache')
/**
 * Pass the path for your partial directory and
 * the extension of the partials within the mustache-express method
 */
app.engine('mustache', mustacheExpress('./views/partials', '.mustache'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()); 
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

/*** END CONFIGURE ***/

/*** START DEFINE ROUTES ***/

// GET root
app.get('/', homeControler.getHome)

// GET Contact Us
app.get("/contact-us", contactControler.getContact)

// POST Contact Us
app.post("/contact-us", contactControler.postContact)

// GET Login
app.get("/login", loginControler.getLogin)

// POST Login
app.post("/login", loginControler.postLogin)

// GET Admin
app.get("/admin", adminControler.getAdmin)

// GET login Facebook
app.get('/login/facebook', )

// GET login Facebook Callback
app.get('/login/facebook/callback', 
  passport.authenticate('facebook', {
    successRedirect: '/login/facebook/success',
    failureRedirect: '/login/facebook/failure'
}))

app.get('/login/facebook/success', (req,res) => {
  console.log(JSON.stringify(req.user, null, 2));
  res.send("Welcome back " + req.user.displayName);
})

app.get('/login/facebook/failure', (req,res) => {
  res.send("Login with Facebook failed");
})

// GET login Google
app.get('/login/google', 
  passport.authenticate('google', { scope:[ 'email', 'profile' ]
}))

// GET login Google Callback
app.get('/login/google/callback', 
passport.authenticate( 'google', {
  successRedirect: '/login/google/success',
  failureRedirect: '/login/google/failure'
}))

app.get('/login/google/success', (req,res) => {
  console.log(JSON.stringify(req.user, null, 2));
  res.send("Welcome back " + req.user.displayName);
})

app.get('/login/google/failure', (req,res) => {
  res.send("Login with Facebook failed");
})

/*** END DEFINE ROUTES ***/

app.listen(port, () => console.log(`Example app listening on port ${port}!`));