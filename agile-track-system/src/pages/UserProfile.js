import React, { useState } from "react";

const initialUsers = {
  "employee1@example.com": {
    name: "Employee One",
    tasks: [{ title: "Task One", description: "Description for Task One", status: "To Do" }],
  },
  "employee2@example.com": {
    name: "Employee Two",
    tasks: [
      { title: "Task Two", description: "Description for Task Two", status: "In Progress" },
      { title: "Task Three", description: "Description for Task Three", status: "In Progress" },
    ],
  },
  "employee3@example.com": {
    name: "Employee Three",
    tasks: [{ title: "Task Three", description: "Description for Task Three", status: "Completed" }],
  },
};

const UserProfile = () => {
  const [users, setUsers] = useState(initialUsers);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.password) {
      alert("All fields are required!");
      return;
    }
    if (users[newUser.email]) {
      alert("User with this email already exists!");
      return;
    }

    setUsers({
      ...users,
      [newUser.email]: { name: newUser.name, tasks: [] },
    });

    setNewUser({ name: "", email: "", password: "" });
    setShowForm(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "600px" }}>
      <h2>User Profiles</h2>

      {/* Add New User Button */}
      {!showForm && <button onClick={() => setShowForm(true)} style={{ marginBottom: "10px" }}>Add New User</button>}

      {/* New User Form */}
      {showForm && (
        <div style={{ marginTop: "10px", padding: "10px", border: "1px solid #ccc", background: "#f9f9f9" }}>
          <button onClick={() => setShowForm(false)} style={{ marginBottom: "10px" }}>Cancel</button>
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            />
          </div>
          <button onClick={handleAddUser}>Create User</button>
        </div>
      )}

      {/* List of Users */}
      <ul>
        {Object.keys(users).map((email) => (
          <li key={email} style={{ marginBottom: "15px", padding: "10px", border: "1px solid #ddd", background: "#f1f1f1" }}>
            <b>Name:</b> {users[email].name} <br />
            <b>Email:</b> {email} <br />
            <button onClick={() => setSelectedEmail(email)} style={{ marginTop: "5px" }}>Get History</button>
          </li>
        ))}
      </ul>

      {/* Display Task History of Selected User */}
      {selectedEmail && users[selectedEmail] && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", background: "#fff8e1" }}>
          <h3>Tasks Worked By {users[selectedEmail].name}</h3>
          <ul>
            {users[selectedEmail].tasks.map((task, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <b>Title:</b> {task.title} <br />
                <b>Description:</b> {task.description} <br />
                <b>Status:</b> 
                <span style={{ color: task.status === "Completed" ? "green" : "red", fontWeight: "bold" }}>
                  {" "}{task.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
