import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user session
    navigate("/login"); // Redirect to login page
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Navigation Links */}
      <nav>
        <ul>
          <li><Link to="/user-dashboard">Dashboard</Link></li>
          <li><Link to="/profiles">Profiles</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      {/* Scrum Teams Section */}
      <h2>Scrum Teams</h2>
      <ul>
        <li>Scrum Team A <button>Get Details</button></li>
        <li>Scrum Team B <button>Get Details</button></li>
        <li>Scrum Team C <button>Get Details</button></li>
      </ul>
    </div>
  );
};

export default UserDashboard;
