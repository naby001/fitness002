const workoutdetails = ({workout}) => {
    return (
        <div className="workoutdetails">
            <h2>{workout.title}</h2>
            <p><strong>reps:</strong>{workout.reps}</p>
            <p><strong>Load:</strong>{workout.load}</p>
            <p>{workout.createdAt}</p>
        </div>
    );
}
export default workoutdetails;