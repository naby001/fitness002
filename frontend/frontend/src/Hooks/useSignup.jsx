import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, password) => {
        if (!email || !password) {
            setError("Email and password are required");
            return;
        }

        try {
            setIsLoading(true);
            setError(null);

            const response = await fetch(`http://localhost:3000/api/user/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            

            const json = await response.json();
          

            if (!response.ok) {
                throw new Error(json.error || "Failed to signup");
            }

            // Save the user to local storage
            localStorage.setItem("user", JSON.stringify(json));

            // Update the auth context
            dispatch({ type: "LOGIN", payload: json });
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { signup, isLoading, error };
};
