import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ role, component: Component }) => {
  const { user } = useContext(AuthContext);
  if (!user || user.role !== role) return <Navigate to="/login" />;
  return <Component />;
};

export default PrivateRoute;
