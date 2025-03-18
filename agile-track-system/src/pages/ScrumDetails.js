import React from "react";
import { useParams } from "react-router-dom";

const scrumTeams = {
  A: {
    name: "Scrum Team A",
    tasks: [
      { title: "Task One", description: "Description for Task One", status: "Completed" },
    ],
    users: [{ name: "Employee One", email: "employee1@example.com" }],
  },
  B: {
    name: "Scrum Team B",
    tasks: [
      { title: "Task Two", description: "Description for Task Two", status: "In Progress" },
    ],
    users: [{ name: "Employee Two", email: "employee2@example.com" }],
  },
  C: {
    name: "Scrum Team C",
    tasks: [
      { title: "Task Three", description: "Description for Task Three", status: "Pending" },
    ],
    users: [{ name: "Employee Three", email: "employee3@example.com" }],
  },
};

const ScrumDetails = () => {
  const { id } = useParams(); // Get team ID from URL
  const scrumTeam = scrumTeams[id];

  if (!scrumTeam) {
    return <h2>Scrum Team not found</h2>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Scrum Details for {scrumTeam.name}</h2>

      {/* Tasks Section */}
      <h3>Tasks</h3>
      <ul>
        {scrumTeam.tasks.map((task, index) => (
          <li key={index}>
            <b>{task.title}:</b> {task.description} - <i>{task.status}</i>
          </li>
        ))}
      </ul>

      {/* Users Section */}
      <h3>Users</h3>
      <ul>
        {scrumTeam.users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrumDetails;
