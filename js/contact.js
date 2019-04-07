let queryName = "";

// GET method route
const getContact = (req, res) => {
  queryName = req.query.name;
  if (queryName == undefined) {
    queryName = "";
  } 
  var html =`<form action="/contact-us" method="post"> 
               Enter your name*: 
               <br> 
               <input type="text" name="name" placeholder="Full name" value=${queryName}> 
               <br> 
               Enter your email*: 
               <br> 
               <input type="email" name="emailAddress" placeholder="example@gmail.com"> 
               <br>
               Enter your message: 
               <br>
               <textarea name="message" placeholder="Your message"> </textarea>
               <br>
               <button>Submit</button> 
              </form>`;
    res.send(html);  
}

const postContact = (req, res) => {
  let nameBody = req.body.name;
  let email = req.body.email;
  var html = "";
  if (nameBody == "" || email == undefined ){
    html =`<form action="/contact-us" method="post"> 
               Enter your name*: 
               <br> 
               <input type="text" name="name" placeholder="Full name" value=${queryName}> 
               <br> 
               Enter your email*: 
               <br> 
               <input type="email" name="emailAddress" placeholder="example@gmail.com"> 
               <br>
               Enter your message: 
               <br>
               <textarea name="message" placeholder="Your message"> </textarea>
               <br>
               <button> Submit </button> 
              </form>`;
    res.send(html);
  } else {
    html = "success";
    res.send(html);
  }
}

module.exports = {
  getContact: getContact,
  postContact: postContact
}