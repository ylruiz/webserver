// GET method Contact
const getContact = (req, res) => { 
  let queryName = req.query.name || '';
  res.render('contact', {name: queryName});
}  

// POST method Contact
const postContact = (req, res) => {
  let nameBody = req.body.name;
  let email = req.body.email;
  var html = "";
  if (nameBody == "" || email == "" ){
    res.render('contact', { name: ""});
  } else {
    html = "success";
    res.send(html);
  }
}

module.exports = {
  getContact: getContact,
  postContact: postContact
}