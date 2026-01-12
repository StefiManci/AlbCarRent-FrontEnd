import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RoleProtectedRoute({ children, allowedRoles }) {
  const { token, userRole, loading } = useSelector((state) => state.auth);

  console.log("User Role:", userRole);
  console.log("Allowed Roles:", allowedRoles);
  console.log("Token:", token);
  console.log("Loading:", loading);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
