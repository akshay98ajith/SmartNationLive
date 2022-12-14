import { useEffect } from "react";
import { createHashRouter, Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Login from "../Pages/Auth/Login/Login";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import HomePage from "../Pages/HomePage/HomePage";
import DetailPage from "../Pages/Products/List/Detail/DetailPage";
import Products from "../Pages/Products/Products";
import Projects from "../Pages/Projects/Projects";
import Auth from "../Pages/Auth/Auth";

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
                path: "/Industries",
                element: <Products />,
            },
            {
                path: "/Industries/Industries1",
                element: <DetailPage title='Service 1' />
            },
            {
                path: "/Industries/Industries2",
                element: <DetailPage title='Service 2' />
            },
            {
                path: "/Industries/Industries3",
                element: <DetailPage title='Service 1' />
            },
            {
                path: "/Industries/Industries4",
                element: <DetailPage title='Service 1' />
            },
            {
                path: "/Pricing",
                element: <AboutUs />
            },
            {
                path: "/Product-Platform",
                element: <Projects />
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/user",
                element: <Auth />
            },
        ]
    },

])