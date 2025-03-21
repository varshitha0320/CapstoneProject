import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import "../style.css";



const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); 
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    
    const users = JSON.parse(localStorage.getItem("users")) || [];

    
    if (users.some((user) => user.email === email)) {
      alert("Email already exists! Please log in.");
      return;
    }

    
    const newUser = { name, email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    
    if (signup) {
      signup(name, email, password, role);
    }

    alert("Signed up successfully! Please log in.");
    navigate("/login");
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <div className="auth-container">
  <div className="auth-box">
      <h2>Sign Up</h2>

      <label>Name: </label>
      <br/>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br/>
      <label>Email: </label>
      <br/>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br/>
      <label>Password: </label>
      <br/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br/>
      <label>Role: </label>
      <br/>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <br/>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
    </div>
    </div>
  );
};

export default Signup;
