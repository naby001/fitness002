const Workout = require("../models/workoutmodel");
const mongoose = require("mongoose");

//get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find().sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

//get single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ err: "Workout not found" });
  }
  res.status(200).json(workout); // Return workout directly
};

//post new workout
const postWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  let emp=[]
if(!title)
{
  emp.push('title')
}
if(!load)
{
  emp.push('load')
}
if(!reps)
{
  emp.push('reps')
}
if(emp.length>0)
  return res.status(400).json({err:'plase fill all the fields',emp})


  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout); // Return workout directly
  } catch (err) {
    res.status(400).json({ err: "Workout not created" });
  }
};

//delete workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json("No workout with that id  ");

  const workout = await Workout.findByIdAndDelete(id);
  if (!workout) return res.status(404).json({ err: "Workout not found" });

  res.status(200).json(workout); // Return workout directly
};

//update workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json("No workout with that id  ");

  const workout = await Workout.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
  );
  if (!workout) return res.status(404).json({ err: "Workout not found" });

  res.status(200).json(workout); // Return workout directly
};

module.exports = {
  postWorkout,
  getWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
};
