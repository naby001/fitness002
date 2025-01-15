import { useWorkoutsContext } from "../Hooks/useWorkoutContext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext();

    const handleClick = async () => {
        
            const response = await fetch(`https://fitness002-1.onrender.com/api/workouts/${workout._id}`, {
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
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>

            <span className='material-symbols-outlined'onClick={handleClick} style={{ cursor: "pointer"}}>delete</span>
        </div>
    );
};

export default WorkoutDetails;
