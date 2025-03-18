import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ScrumDetails from "./pages/ScrumDetails";
import Profiles from "./pages/Profiles";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./context/AuthContext";
import UserProfile from "./pages/UserProfile";
import AdminHome from "./pages/AdminHome";
import ScrumTeams from "./pages/ScrumTeams";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* User Routes */}
          <Route path="/scrum/:id" element={<ScrumDetails />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/profile/:id" element={<UserProfile />} /> {/* ✅ Fixed duplicate profiles route */}

          {/* Private Routes */}
          <Route path="/user-dashboard" element={<PrivateRoute role="user"><UserDashboard /></PrivateRoute>} />
          <Route path="/admin-dashboard" element={<PrivateRoute role="admin"><AdminDashboard /></PrivateRoute>} />

          {/* Admin Page */}
          <Route path="/admin-home" element={<PrivateRoute role="admin"><AdminHome /></PrivateRoute>} />
          <Route path="/scrum-teams" element={<ScrumTeams />} /> 
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
