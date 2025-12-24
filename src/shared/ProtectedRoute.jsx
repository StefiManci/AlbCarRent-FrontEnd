import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null || token === undefined) return;
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  if (token === undefined) {
    return null;
  }

  return children;
}
