import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CustomerManagerPage from "./privateProfiles/CustomerProfile/CustomerManagerPage";
import BusinessProfileManager from "./publicProfiles/BusinessProfile/BusinessProfileManager";

export default function Profile() {
  const userRole = useSelector((state) => state.auth.userRole);
  const navigate = useNavigate();

  console.log("User Role in Profile:", userRole);

  useEffect(() => {
    if (userRole === "Admin") {
      navigate("/admin");
    }
  }, [userRole, navigate]);

  return (
    <>
      {userRole === "Client" && <CustomerManagerPage />}
      {userRole === "Bussiness" && <BusinessProfileManager />}
    </>
  );
}
