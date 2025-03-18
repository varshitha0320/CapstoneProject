import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 🚀 Used for redirection

  const handleSignUp = () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    // Storing user data in localStorage (for simplicity)
    const userData = { name, email, password };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Signup successful! Redirecting to login...");
    navigate("/login"); // 🔥 Redirecting to login page
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Navigation Links */}
      <nav>
        <ul>
          <li><Link to="/user-dashboard">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      {/* Sign Up Form */}
      <h2>Sign Up</h2>
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label style={{ marginLeft: "10px" }}>Email: </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label style={{ marginLeft: "10px" }}>Password: </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
