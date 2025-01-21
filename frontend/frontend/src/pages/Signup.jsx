import  { useState } from "react"
import { useSignup } from "../Hooks/useSignup"


const Signup =()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {signup,error,isLoading} =useSignup()
    const handleSubmit=async (e)  =>{
        e.preventDefault()
await signup (email,password)
    }

    return(
        <form onSubmit={handleSubmit} className="signup">
            <h3>Signup</h3>
            <label>Email:</label>
            <input
            type ="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <br></br>
            <label>Password:</label>
            <input
            type ="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <br></br>
            <button disabled={isLoading}>Sign Up</button>
            {error &&<div className="error">{error}</div> } 


        </form>
    )

}
export default Signup