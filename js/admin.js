// GET method Admin
const getAdmin = (req, res) => { 
    res.render('admin');
} 

module.exports = {
    getAdmin: getAdmin
}