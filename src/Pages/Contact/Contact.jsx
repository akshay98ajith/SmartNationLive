import React from "react";
import { Suspense } from "react";
import ContactSection from "./ContactSection/ContactSection";
const Landing = React.lazy(() => import("./Landing/Landing"));
const Contact = () => {
  return (
    <div className="pages">
      <Suspense fallback={<></>}>
        <Landing />
      </Suspense>
      <Suspense fallback={<></>}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Contact;
