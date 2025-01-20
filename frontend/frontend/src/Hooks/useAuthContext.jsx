// ...existing code...
import { AuthContext } from "../context/WorkoutContext";
// ...existing code...
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};
