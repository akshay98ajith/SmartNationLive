import { useEffect } from "react";
import { createHashRouter, Outlet, useLocation } from "react-router-dom";
import Footer from "../Molecules/Footer/Footer";
import Header from "../Molecules/Header/Header";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import HomePage from "../Pages/HomePage/HomePage";
import DetailPage from "../Pages/Products/List/Detail/DetailPage";
import Products from "../Pages/Products/Products";
import Projects from "../Pages/Projects/Projects";

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
                path: "/Products",
                element: <Products />,
            },
            {
                path: "/Products/Service1",
                element: <DetailPage title='Service 1' />
            },
            {
                path: "/Products/Service2",
                element: <DetailPage title='Service 2' />
            },
            {
                path: "/Products/Service3",
                element: <DetailPage title='Service 1' />
            },
            {
                path: "/Products/Service4",
                element: <DetailPage title='Service 1' />
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
                element: <Projects />
            },
            {
                path: "/Contact",
                element: <Contact />
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