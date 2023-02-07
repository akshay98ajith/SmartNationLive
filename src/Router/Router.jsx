import { useEffect } from "react";
import { createHashRouter, Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Login from "../Pages/Auth/Login/Login";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import HomePage from "../Pages/HomePage/HomePage";
import DetailPage from "../Pages/Projects/Section3/Detail/DetailPage";
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
};

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
        element: (
          <DetailPage
            title="Construction"
            description="Digitizing construction Jobsite to improve safety, enhance workflow and prevent environmental non-compliances using World’s first Scenario based AI, Video Analytics enabled Construction Management Software"
            construction
          />
        ),
      },
      {
        path: "/Product-Platform/Mining",
        element: (
          <DetailPage
            title="Mining"
            description="Deriving value from data using Scenario-based AI powered Video Analytics for critical mining sites to optimize processes, enhance decision-making and improve safety."
            mining
          />
        ),
      },
      {
        path: "/Product-Platform/Manufacturing",
        element: (
          <DetailPage
            title="Manufacturing"
            description="AI-powered industrial grade Video Analytics for ensuring real-time monitoring of manufacturing firms to improve process efficiency and ensure the health & safety of workers with minimum efforts and errors"
            manufacturing
          />
        ),
      },
      {
        path: "/Product-Platform/FacilityManagement",
        element: (
          <DetailPage
            title="Facility Management"
            description="Redefining Facility Management with the power of Scenario-based AI to ensure fool-proof infrastructure maintenance using real-time and historical data"
            facilitymanagement
          />
        ),
      },
      {
        path: "/Product-Platform/Oil&Gas",
        element: (
          <DetailPage
            title="Oil & Gas"
            description="Redefining Facility Management with the power of Scenario-based AI to ensure fool-proof infrastructure maintenance using real-time and historical data"
            oilandgas
          />
        ),
      },
      {
        path: "/Product-Platform/Transportation",
        element: (
          <DetailPage
            title="Transportation"
            description="Redefining Facility Management with the power of Scenario-based AI to ensure fool-proof infrastructure maintenance using real-time and historical data"
            oilandgas
          />
        ),
      },
      {
        path: "/Product-Platform/Healthcare",
        element: (
          <DetailPage
            title="Healthcare"
            description="Redefining Facility Management with the power of Scenario-based AI to ensure fool-proof infrastructure maintenance using real-time and historical data"
            oilandgas
          />
        ),
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
