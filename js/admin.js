// GET method Admin
const getAdmin = (req, res) => { 
    let queryEmail = req.query.email || '';
    res.render('admin', {email: queryEmail});
} 

module.exports = {
    getAdmin: getAdmin
}