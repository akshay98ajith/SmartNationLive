import React, { useEffect } from "react";
import { createHashRouter, Outlet, useLocation } from "react-router-dom";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import HomePage from "../Pages/HomePage/HomePage";
import DetailPage from "../Pages/Projects/Section3/Detail/DetailPage";
import Products from "../Pages/Products/Products";
import Projects from "../Pages/Projects/Projects";
import Auth from "../Pages/Auth/Auth";
import { Suspense } from "react";
const Header = React.lazy(() => import("../Components/Header/Header"));
const Footer = React.lazy(() => import("../Components/Footer/Footer"));

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
};

const AddHeaderComponent = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Header />
      </Suspense>
      <ScrollToTop />
      <Outlet />
      <Suspense fallback={<></>}>
        <Footer />
      </Suspense>
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
        element: <HomePage />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/Industries",
        element: <Products />,
      },
      {
        path: "/Pricing",
        element: <AboutUs />,
      },
      {
        path: "/Product-Platform",
        element: <Projects />,
      },
      {
        path: "/Product-Platform/Construction",
        element: <DetailPage title="Construction" construction />,
      },
      {
        path: "/Product-Platform/Mining",
        element: <DetailPage title="Mining" mining />,
      },
      {
        path: "/Product-Platform/Manufacturing",
        element: <DetailPage title="Manufacturing" manufacturing />,
      },
      {
        path: "/Product-Platform/FacilityManagement",
        element: <DetailPage title="Facility Management" facilitymanagement />,
      },
      {
        path: "/Product-Platform/Oil&Gas",
        element: <DetailPage title="Oil & Gas" oilandgas />,
      },
      {
        path: "/Product-Platform/Transportation",
        element: <DetailPage title="Transportation" transportation />,
      },
      {
        path: "/Product-Platform/Healthcare",
        element: <DetailPage title="Healthcare" healthcare />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/user",
        element: <Auth />,
      },
    ],
  },
]);
