const Week = require("../models/week");





function index(req, res) {
    console.log(req.user);
    res.render('weeks/index');
  }

  function newWeek(req, res){
    res.render("weeks/new");
  }
  


  module.exports = { 
    
    new: newWeek,
    index };