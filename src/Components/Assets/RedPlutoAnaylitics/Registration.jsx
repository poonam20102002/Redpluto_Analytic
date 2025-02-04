import { useState } from "react";
import "./Signup.css"
import {Link} from "react-router-dom"

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSignup = (e) => {
      e.preventDefault();
      alert("Signup Successful");
    };
  
    return (
      <div className="container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/Login">Login</Link></p>
      </div>
    );
  }
  export default Signup;