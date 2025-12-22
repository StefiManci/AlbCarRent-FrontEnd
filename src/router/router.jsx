import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../features/login/components/Login";
import Register from "../features/login/components/Register";
import NotFound from "../shared/NotFound";
import Cars from "../pages/Cars";
import Blog from "../pages/Blog";
import ProtectedLogin from "../shared/protectedLogin";
import ProtectedRoute from "../shared/ProtectedRoute";
import BusinessManagerPage from "../features/profile/privateProfiles/BusinessProfile/BusinessManagerPage";
import BusinessDisplayPage from "../features/profile/publicProfiles/BusinessProfile/BusinessDisplayPage";
import CustomerManagerPage from "../features/profile/privateProfiles/CustomerProfile/CustomerManagerPage";
import CustomerDisplayPage from "../features/profile/publicProfiles/CustomerProfile/CustomerDisplayPage";
import AdminLayout from "../features/Admin/AdminLayout/AdminLayout";
import AdminDashboard from "../features/Admin/AdminLayout/Dashboard/AdminDashboard";
import FleetPage from "../features/Admin/AdminLayout/Fleet/FleetPage";
import ReservationsPage from "../features/Admin/AdminLayout/Reservations/ReservationsPage";
import CustomersPage from "../features/Admin/AdminLayout/Customers/CustomersPage";
import AddCustomer from "../features/Admin/AdminLayout/Customers/components/AddCustomer";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/login",
        element: (
          <ProtectedLogin>
            <Login />
          </ProtectedLogin>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectedLogin>
            <Register />
          </ProtectedLogin>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/businessmanager",
        element: (
          <ProtectedRoute>
            <BusinessManagerPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/businessprofile",
        element: (
          <ProtectedRoute>
            <BusinessDisplayPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/customermanager",
        element: (
          <ProtectedRoute>
            <CustomerManagerPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/customerprofile",
        element: (
          <ProtectedRoute>
            <CustomerDisplayPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/fleet",
        element: <FleetPage />,
      },
      {
        path: "/admin/reservations",
        element: <ReservationsPage />,
      },
      {
        path: "/admin/customers",
        element: <CustomersPage />,
      },
      {
        path: "/admin/customers/add",
        element: <AddCustomer />,
      },
    ],
  },
]);

export default router;
