const Week = require("../models/week");



function show(req, res) {

	console.log(req.params.id , "<-------object-->")
	Week.findById(req.params.id, function(err, weekDoc){
		res.render('weeks/show', { week: weekDoc});
	});
}

function index(req, res){



	Week.find({}, function(err, weekDocs){
		
		console.log(weekDocs)

		res.render('weeks/index', {weeks: weekDocs})
	})

}

  function newWeek(req, res){
    res.render("weeks/new");
  }
  
  function create(req,res){

	// req.body.cardio = !!req.body.cardio;

	// req.body.sauna = !!req.body.sauna;

	// console.log(req.body,'after');

    console.log(req.body,'contents of the form');

    Week.create(req.body, function(err, weekDoc){
		if(err){
			console.log(err);
			return res.send('err creating check the terminal')
		} else{
	
		console.log(weekDoc);

		
		}
		res.redirect(`/weeks/${weekDoc._id}`);
	}); 

    
}
  


  module.exports = { 
    
    new: newWeek,
    create,
	show,
    index };