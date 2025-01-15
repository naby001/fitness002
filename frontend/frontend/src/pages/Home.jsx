import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../Hooks/useWorkoutContext";
//components
import WorkoutDetails from "../components/workoutdetails";
import WorkoutForms from "../components/WorkoutForms";

const Home = () => {
    const{workouts,dispatch}=useWorkoutsContext();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/api/workouts");
            const json = await response.json();
            if (response.ok) {
               dispatch({ type: "SET_WORKOUTS", payload: json }); // Set workouts
            }
        };
        fetchData(); // Call fetchData function
    }, [dispatch]);

    return (
        <div>
            <div className="home">
                
                <div className="workouts">
                    {workouts && workouts.map((workout) => (
                       <WorkoutDetails key={workout.id} workout={workout}/> // Return the workout title
                    ))}
                </div>
                <WorkoutForms />
            </div>
        </div>
    );
};

export default Home;