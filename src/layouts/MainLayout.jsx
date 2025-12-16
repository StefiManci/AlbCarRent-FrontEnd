import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"
import Footer from "./Footer"



export default function MainLayout() {
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
    )
}