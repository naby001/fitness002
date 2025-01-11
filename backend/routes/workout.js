const express = require('express');

const router = express.Router();    

router.get('/', (req, res) => {
    res.json({ mess: "get all workouts" });   
});

//get single
router.get('/:id', (req, res) => {
    res.json({ mess: "get single workout" });   
});
//post new workout
router.post('/', (req, res) => {
    
    res.json({ mess: "post new workout" });   
});
//delete workout
router.delete('/:id', (req, res) => {
    res.json({ mess: "delete workout" });   
});
//update workout
router.patch('/:id', (req, res) => {
    res.json({ mess: "update workout" });   
});
module.exports = router;