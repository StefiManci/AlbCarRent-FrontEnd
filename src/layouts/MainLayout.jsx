import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadTokenFromStorage } from "../features/login/store/authSlice";

export default function MainLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTokenFromStorage());
  }, [dispatch]);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1 w-full">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}
