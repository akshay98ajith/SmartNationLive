import { createBrowserRouter, createHashRouter, Outlet } from "react-router-dom";
import Footer from "../Molecules/Footer/Footer";
import Header from "../Molecules/Header/Header";
import Capabilities from "../Pages/Capabilities/Capabilities";
import HomePage from "../Pages/HomePage/HomePage";
const AddHeaderComponent = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export const router = createHashRouter([
    {
        path: "/",
        element: <AddHeaderComponent />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "/Capabilities",
                element: <Capabilities />
            },
            {
                path: "/Management",
                element: <Capabilities />
            },
            {
                path: "/Industries",
                element: <Capabilities />
            },
            {
                path: "/Pricing",
                element: <Capabilities />
            },
            {
                path: "/CaseStudies",
                element: <Capabilities />
            },
            {
                path: "/AboutUs",
                element: <Capabilities />
            },
            {
                path: "/WhoWeAre",
                element: <Capabilities />
            },
            {
                path: "/Projects",
                element: <Capabilities />
            },
            {
                path: "/Contact",
                element: <Capabilities />
            },
            {
                path: "/Services",
                element: <Capabilities />
            },
            {
                path: "/FAQs",
                element: <Capabilities />
            },
            {
                path: "/Testimonials",
                element: <Capabilities />
            },
            {
                path: "/Blog",
                element: <Capabilities />
            },
            {
                path: "/Process",
                element: <Capabilities />
            },
        ]
    },

])