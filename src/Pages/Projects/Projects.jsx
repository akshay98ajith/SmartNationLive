import React from "react";
import { Suspense } from "react";
import Book from "./Book/Book";
const Landing = React.lazy(() => import("./Landing/Landing"));
const Section1 = React.lazy(() => import("./Section1/Section1"));
const Section2 = React.lazy(() => import("./Section2/Section2"));
const Section3 = React.lazy(() => import("./Section3/Section3"));
const Section4 = React.lazy(() => import("./Section4/Section4"));

const Projects = () => {
  return (
    <div className="pages">
      <div className="projectPage">
        <Suspense fallback={<></>}>
          <Landing />
        </Suspense>
        <Suspense fallback={<></>}>
          <Section1 />
        </Suspense>
        {/* <Suspense fallback={<></>}>
                    <Section2 />
                </Suspense> */}
        <Suspense fallback={<></>}>
          <Section3 />
        </Suspense>
        <Suspense fallback={<></>}>
          <Section4 />
        </Suspense>
        <Book />
      </div>
    </div>
  );
};

export default Projects;
