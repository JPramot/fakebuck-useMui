import React from "react";
import { Navigate } from "react-router-dom";

function RedirectRoute({ children }) {
  let user = "null";
  if (user) return <Navigate to="/" />;
  return children;
}

export default RedirectRoute;
