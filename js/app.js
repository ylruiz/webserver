const express = require('express');
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
// configure body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
/*
 * A browser's default method is 'GET', so this
 * is the route that express uses when we visit
 * our site initially
 */
app.get('/', (req, res) => {
  var name = req.query.name;
  if (name){
    res.send("Hello " + name);
  } else {
    res.send("Hello world!");
  }
});

/*
 * This route receives the posted form.
 * As explained above, usage of 'body-parser' means
 * that `req.body` will be filled in with the form elements
 */
app.post('/', (req, res) => {
  var name = req.body.name;
  if (name == "") {
    res.send("Hello world!");
  } else {
    var html = `Hello: ${name}` + '.<br>' +
               '<a href="/">Try again.</a>';
    res.send(html);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));