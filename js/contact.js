// GET method route
const getContact = (req, res) => {
  var name = req.query.name;
  if (name == undefined) {
    name = "";
  } 
  var html =`<form action="/contact-us" method="post"> 
               Enter your name*: 
               <br> 
               <input type="text" name="name" placeholder="Full name" value=${name}> 
               <br> 
               Enter your email*: 
               <br> 
               <input type="email" name="emailAddress" placeholder="example@gmail.com"> 
               <br>
               Enter your message: 
               <br>
               <textarea name="message" placeholder="Your message"> </textarea>
               <br>
               <button type="submit">Submit</button> 
              </form>`;
    res.send(html);  
}

const postContact = (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  var html = "";
  if (name == ""|| email == ""){
    var html = 'Please, enter your name and your email' +
               ' <br>' +
               '<a href="/contact-us"">Try again.</a>';
    res.send(html);
  }
};

module.exports = {
  getContact: getContact,
  postContact: postContact
}