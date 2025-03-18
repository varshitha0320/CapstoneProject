import React, { useState } from "react";

const initialScrumTeams = [
  { id: 1, name: "Scrum Team A" },
  { id: 2, name: "Scrum Team B" },
  { id: 3, name: "Scrum Team C" },
];

const initialTeamDetails = {
  2: {
    tasks: [{ id: 1, title: "Task Two", description: "Description for Task Two", status: "In Progress" }],
    users: [{ id: 1, name: "Employee Two", email: "employee2@example.com" }],
  },
};

const ScrumTeams = () => {
  const [scrumTeams, setScrumTeams] = useState(initialScrumTeams);
  const [teamDetails, setTeamDetails] = useState(initialTeamDetails);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [newTeamName, setNewTeamName] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Fetch details for a selected team
  const handleGetDetails = (teamId) => {
    setSelectedTeam(teamId);
  };

  // Update Task Status
  const handleStatusChange = (taskId, newStatus) => {
    setTeamDetails((prevDetails) => {
      const updatedDetails = { ...prevDetails };
      if (updatedDetails[selectedTeam]) {
        updatedDetails[selectedTeam].tasks = updatedDetails[selectedTeam].tasks.map((task) =>
          task.id === taskId ? { ...task, status: newStatus } : task
        );
      }
      return updatedDetails;
    });
  };

  // Handle New Scrum Creation
  const handleCreateScrum = () => {
    if (!newTeamName.trim()) {
      alert("Scrum Team name cannot be empty!");
      return;
    }

    const newTeamId = scrumTeams.length + 1;
    const newTeam = { id: newTeamId, name: newTeamName };

    setScrumTeams([...scrumTeams, newTeam]);
    setTeamDetails({ ...teamDetails, [newTeamId]: { tasks: [], users: [] } });
    setNewTeamName("");
    setShowForm(false);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Scrum Teams</h2>

      {/* Toggle Form */}
      <button 
        onClick={() => setShowForm(!showForm)}
        style={{
          padding: "8px 12px",
          marginBottom: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "4px"
        }}
      >
        {showForm ? "Cancel" : "Add New Scrum"}
      </button>

      {/* Scrum Creation Form */}
      {showForm && (
        <div>
          <input
            type="text"
            placeholder="Enter Scrum Team Name"
            value={newTeamName}
            onChange={(e) => setNewTeamName(e.target.value)}
            style={{ padding: "5px", marginRight: "5px" }}
          />
          <button onClick={handleCreateScrum} style={{ padding: "5px 10px", cursor: "pointer" }}>
            Create Scrum
          </button>
        </div>
      )}

      {/* List of Scrum Teams */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {scrumTeams.map((team) => (
          <li key={team.id} style={{ marginBottom: "8px" }}>
            {team.name} 
            <button 
              onClick={() => handleGetDetails(team.id)}
              style={{
                marginLeft: "10px",
                padding: "5px",
                backgroundColor: "#008CBA",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "4px"
              }}
            >
              Get Details
            </button>
          </li>
        ))}
      </ul>

      {/* Scrum Team Details */}
      {selectedTeam && teamDetails[selectedTeam] && (
        <div>
          <h3>Scrum Details for {scrumTeams.find((t) => t.id === selectedTeam)?.name}</h3>

          <h4>Tasks</h4>
          <ul>
            {teamDetails[selectedTeam].tasks.map((task) => (
              <li key={task.id}>
                <strong>{task.title}:</strong> {task.description} - 
                <i> {task.status} </i>
                <select
                  value={task.status}
                  onChange={(e) => handleStatusChange(task.id, e.target.value)}
                  style={{ marginLeft: "10px", padding: "5px" }}
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </li>
            ))}
          </ul>

          <h4>Users</h4>
          <ul>
            {teamDetails[selectedTeam].users.map((user) => (
              <li key={user.id}>
                {user.name} ({user.email})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ScrumTeams;
