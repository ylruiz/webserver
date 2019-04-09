// GET method route
const getContact = (req, res) => { 
  res.render('contact', { title: 'Hey', message: 'Hello there!' });
}  

const postContact = (req, res) => {
  let nameBody = req.body.name;
  let email = req.body.email;
  var html = "";
  if (nameBody == "" || email == "" ){
    res.render('contact', { title: 'Hey', message: 'Hello there!' });
  } else {
    html = "success";
    res.send(html);
  }
}

module.exports = {
  getContact: getContact,
  postContact: postContact
}