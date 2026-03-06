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
import BusinessOwnerDashboard from "../features/profile/privateProfiles/BusinessProfile/BusinessManagerPage";
import BusinessDisplayPage from "../features/profile/publicProfiles/BusinessProfile/BusinessDisplayPage";
import CustomerManagerPage from "../features/profile/privateProfiles/CustomerProfile/CustomerManagerPage";
import CustomerDisplayPage from "../features/profile/publicProfiles/CustomerProfile/CustomerDisplayPage";
import AdminLayout from "../features/Admin/AdminLayout/AdminLayout";
import AdminDashboard from "../features/Admin/AdminLayout/Dashboard/AdminDashboard";
import FleetPage from "../features/Admin/AdminLayout/Fleet/FleetPage";
import ReservationsPage from "../features/Admin/AdminLayout/Reservations/ReservationsPage";
import CustomersPage from "../features/Admin/AdminLayout/Customers/CustomersPage";
import AddCustomer from "../features/Admin/AdminLayout/Customers/components/AddCustomer";
import CarsManager from "../features/profile/privateProfiles/BusinessProfile/components/CarsManager";
import ReservationsManager from "../features/profile/privateProfiles/BusinessProfile/components/ReservationsManager";
import Statistics from "../features/profile/privateProfiles/BusinessProfile/components/Statistics";
import CarInformation from "../features/profile/privateProfiles/BusinessProfile/components/actions/car-information/CarInformation";
import Unauthorized from "../shared/Unauthorized";
import RoleProtectedRoute from "../shared/RoleProtectedRoute";
import Profile from "../features/profile/Profile";
import PublicCarInfo from "../features/cars/components/PublicCarInfo";
import Book from "../features/booking/components/Book";

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
        path: "/cars/carInformation/:id",
        element: <PublicCarInfo />,
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
          <RoleProtectedRoute allowedRoles={["Bussiness"]}>
            <BusinessOwnerDashboard />
          </RoleProtectedRoute>
        ),
        children: [
          { index: true, element: <CarsManager /> },
          { path: "cars", element: <CarsManager /> },
          { path: "bookings", element: <ReservationsManager /> },
          { path: "statistics", element: <Statistics /> },
          { path: "cars/:id", element: <CarInformation /> },
        ],
      },
      {
        path: "/businessprofile/:id",
        element: (
          <ProtectedRoute>
            <BusinessDisplayPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/customerprofile/:id",
        element: (
          <ProtectedRoute>
            <CustomerDisplayPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/booking/:carId",
        element: <Book />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/unauthorized",
        element: <Unauthorized />,
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
