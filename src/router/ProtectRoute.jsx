import React from "react";
import { Navigate } from "react-router-dom";

function ProtectRoute({ children }) {
  let user = "john";
  if (!user) return <Navigate to="/login" />;
  return children;
}

export default ProtectRoute;
