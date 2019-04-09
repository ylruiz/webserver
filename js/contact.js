// GET method route
const getContact = (req, res) => { 
  let queryName = req.query.name;
  if (queryName == undefined){
    queryName = "";
  } 
  res.render('contact', {name: queryName});
}  

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