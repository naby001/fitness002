import { createContext } from "react";
export const WorkoutsContext = createContext(); // Updated name

export const workoutReducer = (state, action) => {
    switch (action.type) {
        case "SET_WORKOUTS":
            return {
                workouts: action.payload,
            };
        case "ADD_WORKOUT":
            return {
                workouts: [action.payload, ...state.workouts],
            };
        default:
            return state;
    }
};

export const WorkoutProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: null,
    });

    return (
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutsContext.Provider>
    );
};
