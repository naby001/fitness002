import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../Hooks/useWorkoutContext";
import { useAuthContext } from "../Hooks/useAuthContext";
//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForms from "../components/WorkoutForms";

const Home = () => {
    const{workouts,dispatch}=useWorkoutsContext();
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/api/workouts",{
            headers:
            {"Authorization":`Bearer ${user.token}`}}); 
         

            const json = await response.json();
            if (response.ok) {
               dispatch({ type: "SET_WORKOUTS", payload: json }); // Set workouts
            }
        };
        if(user){
        fetchData();
        } // Call fetchData function
    }, [dispatch,user]);

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