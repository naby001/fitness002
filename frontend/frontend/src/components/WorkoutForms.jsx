import { useState } from "react";
import { useWorkoutsContext } from "../Hooks/useWorkoutContext";

const WorkoutForms = () => {
    const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);
  const [emp,setemp]=useState([])

  const handleSubmit = async (e) => {   
    e.preventDefault();
    const workout = { title, reps, load };
    const response = await fetch("http://localhost:3000/api/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workout),
    });
    const data = await response.json();
    if (response.ok) {
        setTitle("");
        setReps("");
        setLoad("");
        setError(null);
        setemp([])
        console.log("Workout added");
        dispatch({ type: "ADD_WORKOUT", payload: data });
    } else {
        setError(data.err);
        setemp(json.emp)
    }
    }

  return (
    <form onSubmit={handleSubmit} className="create form-container">
      <h3 className="form-title">Add a new workout</h3>
      <label className="form-label">Exercise Title</label>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={emp.includes('title')?'error':""}
      />
      <label className="form-label">Reps</label>
      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className={emp.includes('reps')?'error':""}

      />
      <label className="form-label">Load</label>
      <input
        type="number"
        placeholder="Load"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        className={emp.includes('load')?'error':""}

      />
      <button type="submit" className="form-button">Add Workout</button>
      {error && <p className="form-error">{error}</p>}
    </form>
  );
};
export default WorkoutForms;