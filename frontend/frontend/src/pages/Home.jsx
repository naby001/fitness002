import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../Hooks/useWorkoutContext";
import { useAuthContext } from "../Hooks/useAuthContext";
//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForms from "../components/WorkoutForms";

const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/api/workouts", {
                headers: { "Authorization": `Bearer ${user.token}` }
            });
            const json = await response.json();
            if (response.ok) {
                dispatch({ type: "SET_WORKOUTS", payload: json }); // Set workouts
            }
        };
        if (user) {
            fetchData();
        }
    }, [dispatch, user]);

    return (
        <div className="home-container" style={{ backgroundColor: '#f0f0f0' }}>
            <div className="workouts-container">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <div className="form-container">
                <WorkoutForms />
            </div>
        </div>
    );
};

export default Home;