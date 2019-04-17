// GET ROOT
const getHome = (req, res) => { 
    res.render('index',{welcome: ""});
}  

module.exports = {
    getHome: getHome
}