
const week = require("../models/week");
const Week = require("../models/week");

module.exports = {
  create, 
  delete: deleteWorkout,
  edit,
  update
 
};

function edit(req,res){

    res.render('weeks/edit' , {w: req.params.id});


}

function update(req, res) {
  Week.findOneAndUpdate(
    {'workouts._id': req.params.id, 'workouts.user': req.user._id},

    req.body,

    {new: true},
    function(err, weekDoc) {
      if (err || !weekDoc) return res.redirect('/weeks');
      res.redirect(`/weeks/${weekDoc._id}`);
    }
  );
}

function deleteWorkout(req, res){


  Week.findOne({'workouts._id': req.params.id, 'workouts.user': req.user._id}, function(err, weekDoc){
 
    if(!weekDoc) return res.redirect('/weeks');


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
   
    console.log(weekDoc, " <- week from the database!");
    console.log("========================");
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    weekDoc.workouts.push(req.body);

    weekDoc.save(function (err) {
      // respond to the clinet
	//   console.log(weekDoc)
	  console.log(err, " <_ err from weekDoc.save callback")

      res.redirect(`/weeks/${req.params.id}`);
    });
  });
}
