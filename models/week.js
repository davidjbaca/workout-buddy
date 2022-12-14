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
        type: String,
        enum: ['Yes', 'No'],
        default: null,
    },  
    sauna: {
        type: String,
        enum: ['Yes', 'No'],
        default: null,
    }
    },
  {
    timestamps: true,
  }
);


const weekSchema = new Schema({
    week: String,
    goal: String,
    totalDays: String,

 
    workouts: [workoutSchema] 
});


module.exports = mongoose.model("Week", weekSchema);


