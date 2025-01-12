const Workout = require("../models/workoutmodel");
const mongoose = require("mongoose");

//get all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: -1 });
    res.status(200).json({ workouts });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//get single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    const workout = await Workout.findById(id);
    res.status(200).json({ workout });
  } catch (err) {
    res.status(400).json({ err: "workout not found" });
  }
  res.json(getSingleWorkout);
};

//post new workout
const postWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json({ workout });
  } catch (err) {
    res.status(400).json({ err:'workout not created' });
  }
};

//delete workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workout.findByIdAndDelete(id);
    res.status(200).json({ workout });
  } catch (err) {
    res.status(400).json({ err: 'workout not found' });
  }
};

//update workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.findByIdAndUpdate(
      id,
      { title, reps, load },
      { new: true }
    );
    res.status(200).json({ workout });
  } catch (err) {
    res.status(400).json({ err: 'workout not found' });
  }
};

module.exports = {
  postWorkout,
  getWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
};
