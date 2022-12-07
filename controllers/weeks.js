

function index(req, res) {
    console.log(req.user);
    res.render('weeks/index');
  }
  


  module.exports = { index };