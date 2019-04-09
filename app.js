const express = require('express');
const mustacheExpress = require('mustache-express');
const contactControler = require('./js/contact'); 

/*
 * body-parser is a piece of express middleware that 
 * reads a form's input and stores it as a javascript
 * object accessible through `req.body` 
 *
 * 'body-parser' must be installed (via `npm install body-parser`)
 *  For more info see: https://github.com/expressjs/body-parser
 */
const bodyParser = require('body-parser');

// create your app
const app = express();
const port = 3000;

// Configure
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

// GET root
app.get('/', (req, res) => {
  res.render('index');
})

// POST root
app.post('/', (req, res) => {
  /* var name = req.body.name;
  if (name == "") {
    res.send("Hello world!");
  } else {
    var html = `Hello: ${name}` + '.<br>' +
               '<a href="/">Try again.</a>';
    res.send(html);
  } */
})

app.get("/contact-us", contactControler.getContact)
app.post("/contact-us", contactControler.postContact)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));