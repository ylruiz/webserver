const express = require('express');

// create your app
const app = express();

//define hostname and port
const hostname = '127.0.0.1';
const port = 3000;

const path = '/name(/:yourName)?';

// GET method route
app.get(`${path}`, (req, res) => {
    /*
     * if (path is localhost:3000/name) {
     *    the name variable receives a json with the form following:
     *    {'0': undefined, yourName: undefined} 
     * }
     * 
     *  if (path is localhost:3000/name/yourName) {
     *    the name variable receives a json with the form following:
     *    {'0': /the yourName value, yourName: the yourName value} 
     * }
     */
    let name = req.params; 
    /*
     * if (the property yourname exists and isn't undifined ) {
     *    the page shows "Hello yourName"
     * } else {
     *    "Hello world!"
     * }
     * 
     */
    if (name.hasOwnProperty("yourName") && name.yourName != undefined){
        res.send(`Hello ${name.yourName}`);
    } else{
        res.send("Hello world!");
    }
});
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`));