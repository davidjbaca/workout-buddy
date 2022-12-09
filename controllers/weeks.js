const Week = require("../models/week");





function index(req, res){



	Week.find({}, function(err, weekDocs){
		
		console.log(weekDocs)

		res.render('weeks/index', {weeks: weekDocs, name: ''})
	})

}

  function newWeek(req, res){
    res.render("weeks/new");
  }
  
  function create(req,res){

    console.log(req.body,'contents of the form');

    Week.create(req.body, function(err, weekDoc){
		if(err){
			console.log(err);
			return res.send('err creating check the terminal')
		} else{
	
		console.log(weekDoc);

		res.redirect('/weeks')
		}
	}); 

    
}
  


  module.exports = { 
    
    new: newWeek,
    create,
    index };