import { useState } from "react";
import {useLogin} from "../Hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const {login,error,isLoading}=useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);

  }

  return (
    <>
      <form onSubmit={handleSubmit} className="login">
        <h3>Login</h3>
        
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit" disabled={isLoading}> 
         Login
        </button>
        {error&& <div className="error">{error}</div>}  
        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
      </form>
    </>
  );
};

export default Login;
