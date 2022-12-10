
const Week = require("../models/week");

module.exports = {
  create, 
  delete: deleteWorkout
 
};


function deleteWorkout(req, res){

  // First have to find the Movie with the review
  Week.findOne({'workouts._id': req.params.id, 'workouts.user': req.user._id}, function(err, weekDoc){
    // rogue user
    if(!weekDoc) return res.redirect('/weeks');

    // remove the subdoc from the movie array
    // req.params.id is the review subdoc id
    weekDoc.workouts.remove(req.params.id);

    weekDoc.save(function(err){
      if(err) return res.send('err, check terminal fix this');
      res.redirect(`/weeks/${weekDoc._id}`)
    })

  })
}




function create(req, res) {
 
  Week.findById(req.params.id, function (err, weekDoc) {
    if (err) {
      console.log(err, " <- err from week.findById callback");
      return res.send("error from create workouts check the terminal");
    }

    console.log("========================");
    // found wee from the database that we want to add the review (req.body) to!
    console.log(weekDoc, " <- week from the database!");
    console.log("========================");
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    weekDoc.workouts.push(req.body);

    weekDoc.save(function (err) {
      // respond to the clinet
	//   console.log(weeDoc)
	  console.log(err, " <_ err from weekDoc.save callback")

      res.redirect(`/weeks/${req.params.id}`);
    });
  });
}
