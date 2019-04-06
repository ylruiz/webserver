const express = require('express');
const bodyParser = require('body-parser');

/*
 *The path module provides utilities for working with file and directory paths
 */
const path = require('path');

// create your app
const app = express();
const port = 3000;

// create my dir
const dir = '/home/raimelmedina/Documents/yunet/webserver/';

// configure body-parser
app.use(express.static(path.join(dir)));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// GET method route
app.get('/contact-us', (req, res) => {
  res.status(200)
     .sendFile(path.join(dir + '/index.html'));         
});

/*
 * This route receives the posted form.
 * As explained above, usage of 'body-parser' means
 * that `req.body` will be filled in with the form elements
 */
app.post('/contact-us', (req, res) => {
 /*  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  if (name == "" || email == "") {
    res.send("Hello world!");
  } else {
    var html = `Hello: ${name}` + '.<br>' +
               '<a href="/">Try again.</a>';
    res.send(html);
  } */
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));