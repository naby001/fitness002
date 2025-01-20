import  { useState } from "react"


const Signup =()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit=async (e)  =>{
        e.preventDefault()

        console.log(email,password)
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
            <button className="">Sign Up</button>

        </form>
    )

}
export default Signup