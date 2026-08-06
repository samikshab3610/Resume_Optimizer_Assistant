import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../api/authApi";

function ProtectedRoute({ children }) {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    getCurrentUser()
      .then(() => setStatus("authed"))
      .catch(() => setStatus("guest"));
  }, []);

  if (status === "checking") return null;
  if (status === "guest") return <Navigate to="/login" replace />;
  return children;
}

export default ProtectedRoute;