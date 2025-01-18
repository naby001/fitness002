const express = require("express");
const {
  postWorkout,
  getSingleWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutcontrollers");

const router = express.Router();

//get all
router.get("/", getWorkouts);

//get single
router.get("/:id", getSingleWorkout);

//post new workout
router.post("/", postWorkout);

//delete workout
router.delete("/:id", deleteWorkout);

//update workout
router.patch("/:id", updateWorkout);

module.exports = router;

