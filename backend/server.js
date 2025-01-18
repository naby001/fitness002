require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//express app
const app = express();
app.use(cors());
const workoutRoutes = require('./routes/workout');
const userRoutes = require('./routes/user');



//middleware
app.use(express.json());
//custom middleware
app.use((req, res, next) => {
   console.log(req.path, req.method);
   next();
});
//routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
        console.log('connected to db and listening on port', process.env.PORT); 
    });
})
.catch((err) => {
    console.log(err);
});



