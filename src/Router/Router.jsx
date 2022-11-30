import { useEffect } from "react";
import { createHashRouter, Outlet, useLocation } from "react-router-dom";
import Footer from "../Molecules/Footer/Footer";
import Header from "../Molecules/Header/Header";
import AboutUs from "../Pages/AboutUs/AboutUs";
import HomePage from "../Pages/HomePage/HomePage";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);
}

const AddHeaderComponent = () => {
    return (
        <>
            <Header />
            <ScrollToTop />
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
                path: "/AboutUs",
                element: <AboutUs />
            },
            {
                path: "/Capabilities",
                element: <AboutUs />
            },
            {
                path: "/Management",
                element: <AboutUs />
            },
            {
                path: "/Industries",
                element: <AboutUs />
            },
            {
                path: "/Pricing",
                element: <AboutUs />
            },
            {
                path: "/CaseStudies",
                element: <AboutUs />
            },
            {
                path: "/WhoWeAre",
                element: <AboutUs />
            },
            {
                path: "/Projects",
                element: <AboutUs />
            },
            {
                path: "/Contact",
                element: <AboutUs />
            },
            {
                path: "/Services",
                element: <AboutUs />
            },
            {
                path: "/FAQs",
                element: <AboutUs />
            },
            {
                path: "/Testimonials",
                element: <AboutUs />
            },
            {
                path: "/Blog",
                element: <AboutUs />
            },
            {
                path: "/Process",
                element: <AboutUs />
            },
        ]
    },

])