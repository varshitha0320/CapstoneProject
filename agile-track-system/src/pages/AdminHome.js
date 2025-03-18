import React from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/profiles">Profiles</Link></li>
          <li><button>Logout</button></li>
        </ul>
      </nav>

      {/* Admin Scrum Management */}
      <h2>Scrum Teams</h2>
      <button>Add New Scrum</button> {/* ✅ "Add New Scrum" Button */}

      <ul>
        <li>Scrum Team A <button>Get Details</button></li>
        <li>Scrum Team B <button>Get Details</button></li>
        <li>Scrum Team C <button>Get Details</button></li>
      </ul>
    </div>
  );
};

export default AdminHome;
