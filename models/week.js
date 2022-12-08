const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const workoutSchema = new Schema(
  {
    day: {
        type: String,
        enum: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
    },

    bodyPart:{
        type: String, 
        enum: ['Chest', 'Shoulders', 'Back', 'Legs' ]
    },

    cardio: {
        type: Boolean, 
    }, 
    
    sauna: {
        type: Boolean,
    }

  },
  {
    timestamps: true,
  }
);


const weekSchema = new Schema({

    week:{
        type: String,
    }, 

    goal:{

        type: String, 
    },
    TotalDays:{
        type: String, 
    },
 
    workouts: [workoutSchema] 
});


module.exports = mongoose.model("Week", weekSchema);


