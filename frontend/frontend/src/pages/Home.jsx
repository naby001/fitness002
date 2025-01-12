import { useEffect, useState } from "react";

const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/workouts");
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
                        <p key={workout._id}>{workout.title}</p> // Return the workout title
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;