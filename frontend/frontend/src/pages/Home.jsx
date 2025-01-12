import { useEffect, useState } from "react";
//components
import WorkoutDetails from "../components/workoutdetails";
const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/api/workouts");
            const json = await response.json();
            if (response.ok) {
                setWorkouts(json);
            }
        };
        fetchData(); // Call fetchData function
    }, []);

    return (
        <div>
            <div className="home">
                the works of the workout
                <div className="workouts">
                    {workouts && workouts.map((workout) => (
                       <WorkoutDetails key={workout.id} workout={workout}/> // Return the workout title
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;