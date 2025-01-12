import { useState } from "react";

const WorkoutForms = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);

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
        console.log("Workout added");
    } else {
        setError(data.err);
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
        className="form-input"
      />
      <label className="form-label">Reps</label>
      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className="form-input"
      />
      <label className="form-label">Load</label>
      <input
        type="number"
        placeholder="Load"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        className="form-input"
      />
      <button type="submit" className="form-button">Add Workout</button>
      {error && <p className="form-error">{error}</p>}
    </form>
  );
};
export default WorkoutForms;