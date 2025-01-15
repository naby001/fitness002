import { useWorkoutsContext } from "../Hooks/useWorkoutContext";

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext();

    const handleClick = async () => {
        
            const response = await fetch(`http://localhost:3000/api/workouts/${workout._id}`, {
                method: 'DELETE',
            });

            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'DELETE_WORKOUT', payload: json });
            }
    };

    return (
        <div className="workoutdetails">
            <h2>{workout.title}</h2>
            <p><strong>Reps:</strong> {workout.reps}</p>
            <p><strong>Load:</strong> {workout.load} kg</p>
            <p>{new Date(workout.createdAt).toLocaleString()}</p>
            <span onClick={handleClick} style={{ cursor: "pointer", color: "red" }}>delete</span>
        </div>
    );
};

export default WorkoutDetails;
